import { useEffect, useRef, useState } from "react";
import { faqOptions } from "../../data";
import { whatsappMessage } from "../../utils/whatsapp";

function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const chatMessagesRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([
    {
      from: "bot",
      text: "Hola, soy el asistente virtual de Sonrisa Clara. Puedo responder consultas frecuentes o derivarte a WhatsApp.",
    },
  ]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleFaqClick = (option) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        from: "user",
        text: option.question,
      },
      {
        from: "bot",
        text: option.answer,
      },
    ]);
  };

  return (
    <div className="chat-widget">
      {chatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <div>
              <strong>Sonrisa Clara</strong>
              <span>Asistente virtual</span>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className="chat-body">
            <div className="chat-conversation" ref={chatMessagesRef}>
              {chatMessages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={`chat-bubble ${
                    message.from === "user" ? "user-bubble" : "bot-bubble"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="quick-questions">
              {faqOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleFaqClick(option)}
                >
                  {option.question}
                </button>
              ))}
            </div>

            <a
              href={whatsappMessage("hablar con un asesor")}
              className="chat-whatsapp"
            >
              Ir a WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-float"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Abrir chat"
      >
        <svg
          className="tooth-chat-svg"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            className="tooth-shape"
            d="M18.4 10.8C23.2 8.2 27.7 11.6 32 11.6s8.8-3.4 13.6-.8c7.1 3.8 8.8 13.2 6 21.4-1.7 5.1-4.1 8.4-5 15.2-.7 5.6-2.5 10.2-6.1 10.2-3.1 0-4.2-3.6-5.3-8.1-.8-3.2-1.6-5.7-3.2-5.7s-2.4 2.5-3.2 5.7c-1.1 4.5-2.2 8.1-5.3 8.1-3.6 0-5.4-4.6-6.1-10.2-.9-6.8-3.3-10.1-5-15.2-2.8-8.2-1.1-17.6 6-21.4Z"
          />
          <circle className="tooth-face" cx="25" cy="29" r="2.5" />
          <circle className="tooth-face" cx="39" cy="29" r="2.5" />
          <path
            className="tooth-mouth"
            d="M26 38c2.9 3 9.1 3 12 0"
            strokeLinecap="round"
          />
          <path
            className="tooth-shine"
            d="M22.5 16.8c2.1-1 4.1-.5 6 .1"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ChatWidget;
