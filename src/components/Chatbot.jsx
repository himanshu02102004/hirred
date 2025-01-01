import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);  // Added state to toggle size

  // Load messages from localStorage on initial load
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    setMessages(savedMessages);
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Add bot response (you can customize this logic)
    const botResponse = {
      text: getBotResponse(input),
      sender: 'bot',
    };
    setMessages((prevMessages) => [...prevMessages, botResponse]);

    // Clear the input field
    setInput('');
  };

  const getBotResponse = (userInput) => {
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hi! How can I help you today?';
    } else if (userInput.toLowerCase().includes('services')) {
      return 'We offer Web Development, App Development, and Cloud Services.';
    } else if (userInput.toLowerCase().includes('contact')) {
      return 'You can reach me at himanshu2104mishra@gmail.com';
    } else {
      return 'Sorry, I didn\'t quite understand that. Could you ask something else?';
    }
  };

  return (
    <div
      className={`chatbot-container fixed top-2 left-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-96 h-72' : 'w-64 h-48'
      }`}
    >
      <div className="chatbot-header text-center font-bold text-lg mb-3">
        Chatbot
      </div>

      <div className="chatbot-messages h-24 overflow-y-scroll mb-3 p-1 border-2 border-gray-600 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'text-right' : 'text-left'} mb-2`}
          >
            <span
              className={`px-3 py-1 inline-block rounded-lg ${
                message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>

      <div className="chatbot-input flex justify-between items-center space-x-2">
        <input
          type="text"
          className="w-full p-2 rounded-l-lg bg-gray-700 text-white text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-600 text-white rounded-r-lg hover:scale-105 transition-all duration-300"
        >
          Send
        </button>
      </div>

      {/* Button to toggle size */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default Chatbot;
