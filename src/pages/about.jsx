const About = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      {/* Profile Section */}
      <div className="text-center mb-10">
        <img
          src="" // 
          alt="Himanshu Mishra"
          className="w-32 h-32 mx-auto rounded-full border-4 border-purple-600 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mt-4 gradient-title">
          Himanshu Mishra
        </h1>
        <p className="text-lg mt-2 text-gray-400">
          Student at Shree L.R. Tiwari College of Engineering
        </p>
      </div>

      {/* About Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">About Himanshu</h2>
        <p className="text-gray-300">
          Himanshu Mishra is an aspiring software engineer currently pursuing a degree in Computer Science at Shree L.R. Tiwari College of Engineering. Passionate about coding, problem-solving, and creating impactful applications, Himanshu is always eager to learn new technologies and contribute to meaningful projects.
        </p>
        <p className="text-gray-300 mt-4">
          Beyond academics, Himanshu enjoys collaborating on innovative projects, exploring web development, and mastering advanced frameworks to stay at the forefront of the tech industry.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Web Development Intern at Prodigy InfoTech</li>
          <li>Built advanced web and mobile applications using modern frameworks</li>
          <li>Actively learning TensorFlow for machine learning applications</li>
          <li>Proficient in creating dynamic and user-friendly web applications</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Want to connect with Himanshu?
        </h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/himanshu2004/"
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/himanshu02102004"
            target="_blank"
            className="px-6 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
