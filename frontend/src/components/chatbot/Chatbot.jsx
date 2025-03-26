import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="chatbot-icon">
    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
  </svg>
);

function Message({ chat }) {
  return (
    <div className={`message ${chat.role === "assistant" ? "bot" : "user"}-message`}>
      {chat.role === "assistant" && <Icon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
}

function Form({ generateBotResponse, isLoading }) {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage || isLoading) return;
    inputRef.current.value = "";
    generateBotResponse(userMessage);
  };

  return (
    <div className="chat-footer">
      <form className="chat-form" onSubmit={handleFormSubmit}>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Type a message..." 
          className="message-input" 
          required 
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={isLoading}
          aria-label="Send message"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      </form>
    </div>
  );
}

function Chatbot({ onClose }) {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const generateBotResponse = async (userInput) => {
    try {
      setIsLoading(true);
      setChatHistory((prev) => [...prev, { role: "user", text: userInput }]);
      
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      
      setChatHistory((prev) => [...prev, { role: "assistant", text: data.response }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [...prev, { 
        role: "assistant", 
        text: "Sorry, I'm having trouble connecting. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <Icon />
            <h2 className="logo-text">Chat Assistant</h2>
          </div>
          <div className="header-buttons">
            <Link 
              to="/" 
              className="close-btn material-symbols-rounded"
              title="close chat"
              aria-label="close chat"
            >
              close
            </Link>
            
          </div>
        </div>
        
        <div className="chat-body" ref={chatRef}>
          <div className="message bot-message welcome-message">
            <Icon />
            <p className="message-text">
              Hello! I'm your virtual assistant. How can I help you today?
            </p>
          </div>
          
          {chatHistory.map((chat, index) => (
            <Message key={`msg-${index}`} chat={chat} />
          ))}
          
          {isLoading && (
            <div className="message bot-message">
              <Icon />
              <p className="message-text typing-indicator">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </p>
            </div>
          )}
        </div>
        
        <Form generateBotResponse={generateBotResponse} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Chatbot;