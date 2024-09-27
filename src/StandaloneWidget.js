import React from "react";
import ReactDOM from "react-dom";
import ChatWidget from "./ChatWidget";

const StandaloneWidget = () => {
  return (
    <React.StrictMode>
      <ChatWidget />
    </React.StrictMode>
  );
};

// Função para carregar o CSS do Tailwind
const loadTailwindCSS = () => {
  const link = document.createElement("link");
  link.href =
    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

// Função para inicializar o widget
window.initChatWidget = () => {
  loadTailwindCSS();
  const widgetContainer = document.createElement("div");
  widgetContainer.id = "chat-widget-container";
  document.body.appendChild(widgetContainer);
  ReactDOM.render(<StandaloneWidget />, widgetContainer);
};
