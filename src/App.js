import React from "react";
import ChatWidget from "./ChatWidget";

function App() {
  return (
    <div className="App">
      <h1>Meu Site com Widget de Chat</h1>
      <ChatWidget chatMessage="Olá! Como posso te ajudar hoje?" />
    </div>
  );
}

export default App;
