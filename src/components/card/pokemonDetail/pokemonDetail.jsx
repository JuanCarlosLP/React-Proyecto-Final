import React, {useState, useEffect} from 'react';
import PokemonData from './pokemonData/pokemonData';
import './pokemonDetail.css';


export default function PokemonDetail(props) {
  const [showData, setShowData] = useState(false);
  const [pokemonStats, setPokemonStats] = useState([]);


  const getPokemonStats = (data) => {
    const stats = [];
    data.stats.map(stat => {
      stats.push(stat.base_stat);
      return stats;
    })
    return stats;
  }



  const openPokemonData = () => {
    setShowData(true);
  }

  useEffect(() => {
    // componentDidMount
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const number = props.number;
    //Consumir la API de pokeapi
    const getPokemonDetails = async () => {
      const response = await fetch(`${url}${number}`);
      const data = await response.json();
      const stats = await getPokemonStats(data);
      await setPokemonStats(stats);
      openPokemonData();
    }
    getPokemonDetails();
  }, []);

  
  return (
    <div className="pokemon-detail-container">
      {
        showData ? 
        //* Se muestra una vez que están cargados los detalles del Pokemon
          <div className="pokemon-detail-container">
            <div className="pokemon-detail">
              <div className="pokemon-detail-id">
                <h2>{props.number}</h2>
                <h2>{props.name[0].toUpperCase() + props.name.slice(1)}</h2>
              </div>
              <div className="pokemon-detail-img">
                <img src={props.img} alt={props.name}/>
              </div>
            </div>
            <PokemonData pokemonStats={pokemonStats} closeModalFn={props.closeModalFn} colors={props.colors} />
          </div>

        :
        //* Se muestra mientras los detalles del pokemon son cargados
          <div className="pokeball"></div>
      }
    </div>
  );
}
