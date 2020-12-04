import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}