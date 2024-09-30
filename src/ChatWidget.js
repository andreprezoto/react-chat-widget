import React, { useState, useEffect } from "react";

const ChatWidget = ({
  chatMessage = "Precisa de ajuda? Clique aqui para conversar!",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userIp, setUserIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setUserIp(data.ip);
      } catch (error) {
        console.error("Erro ao obter o IP:", error);
      }
    };

    fetchIp();

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

  const Spinner = () => (
    <div className="flex justify-center items-center h-full">
      <svg
        className="animate-spin h-10 w-10 text-[#FF7000]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );

  const getIframeUrl = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    return `https://app.3mindtecnologia.com.br/version-01bgy/widget_chat?userIp=${userIp}&currentUrl=${currentUrl}`;
  };

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
            className="bg-[#FF7000] hover:bg-[#FF7000]/80 text-white rounded-full p-3 shadow-lg"
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
          {isLoading && <Spinner />}
          <iframe
            src={getIframeUrl()}
            title="Chat"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? "none" : "block" }}
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
