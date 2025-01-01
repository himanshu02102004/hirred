import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Chatbot from '../components/Chatbot';  // Correct path to the Chatbot component

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">You can reach us at:</p>
      <p className="text-lg">Email: <a href="mailto:himanshu2104mishra@gmail.com" className="text-blue-400">himanshu2104mishra@gmail.com</a></p>
      
      {/* Links to LinkedIn and GitHub */}
      <div className="mt-6">
        <a href="https://www.linkedin.com/in/himanshu2004/" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-500">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/himanshu" target="_blank" rel="noopener noreferrer" className="text-gray-400">
          <FaGithub size={30} />
        </a>
      </div>

      {/* Add the Chatbot */}
      <div className="mt-8">
        <Chatbot />
      </div>
    </div>
  );
};

export default Contact;
