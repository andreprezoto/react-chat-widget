import React, { useState, useEffect } from "react";

const ChatWidget = ({
  chatMessage = "Precisa de ajuda? Clique aqui para conversar!",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowBalloon(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowBalloon(false);
    }
  }, [isOpen]);

  const MessageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  return (
    <div className="fixed bottom-4 right-4 flex items-end">
      {!isOpen && (
        <>
          {showBalloon && (
            <div className="mr-4 mb-2 bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-sm animate-fade-in">
              <div className="relative">
                {chatMessage}
                <div className="absolute -right-8 bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
          >
            <MessageIcon />
          </button>
        </>
      )}
      {isOpen && (
        <div
          style={{ width: "500px", height: "600px" }}
          className="bg-white rounded-lg shadow-xl flex flex-col"
        >
          <iframe
            src="https://app.3mindtecnologia.com.br/version-01bgy/widget_chat"
            title="Chat"
            className="w-full h-full rounded-lg"
            frameBorder="0"
          ></iframe>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
