import Header from "@/components/header";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(true); // Default dark mode is true
  const [notifications, setNotifications] = useState(3); // Example notification count

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-800 text-gray-300"}>
      {/* Background with dark tones and animations */}
      <div className="grid-background"></div>

      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      {/* Footer with dark theme */}
      <div className="p-10 text-center bg-gray-800 mt-10">
        <span>Made by Himanshu &copy; {new Date().getFullYear()}</span>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/himanshu2004/"
            target="_blank"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/himanshu02102004"
            target="_blank"
            className="text-gray-300 hover:text-gray-500 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 bg-gray-700 text-gray-100 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* Floating Action Button with Notification Badge */}
      <div className="fixed bottom-16 right-6">
        <Link to="/post-job">
          <button className="relative p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
            <i className="fa fa-plus"></i>
          </button>
        </Link>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-gray-300">
        <nav className="flex justify-center gap-6">
          <Link to="/" className="py-2 px-4 hover:bg-gray-700 rounded transition">Home</Link>
          <Link to="/about" className="py-2 px-4 hover:bg-gray-700 rounded transition">About</Link>
          <Link to="/contact" className="py-2 px-4 hover:bg-gray-700 rounded transition">Contact</Link>
          <Link to="/services" className="py-2 px-4 hover:bg-gray-700 rounded transition">Services</Link>
        </nav>
      </div>
    </div>
  );
};

export default AppLayout;
