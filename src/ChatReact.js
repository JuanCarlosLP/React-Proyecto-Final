import React, { useState } from "react";
import "./ChatReact.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

function ChatReact() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default ChatReact;
