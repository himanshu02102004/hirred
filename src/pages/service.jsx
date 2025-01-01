const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build responsive, dynamic, and modern websites tailored to your needs.",
      icon: "🌐",
    },
    {
      title: "App Development",
      description: "Create high-quality, user-friendly mobile applications for all platforms.",
      icon: "📱",
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud technologies for scalability, reliability, and security.",
      icon: "☁️",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-extrabold gradient-title mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-6xl mb-4 text-purple-500 text-center">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-center">{service.title}</h2>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Want to know more about our services?
        </h3>
        <a
          href="/contact"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Service;
