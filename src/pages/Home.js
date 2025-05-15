import React from 'react';
import { useNavigate } from 'react-router-dom';
import Welcome from '../components/Welcome';

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/about');
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Welcome Animation */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in">
          <Welcome />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Hi, I'm <strong>Joseph Gerard Diaz</strong>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Let's create something awespiring together!
          </p>
          <button
            onClick={handleRedirect}
            className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-500 transition-all duration-300"
          >
            Learn More About Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
