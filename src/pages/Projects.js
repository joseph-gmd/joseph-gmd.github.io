import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectList from '../data/projectData';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100" data-aos="fade-up">
        My Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border p-6 transform transition duration-300 hover:scale-105 dark:bg-gray-700 dark:border-gray-700"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>

            {/* Tech Stack */}
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-100 dark:bg-gray-400 dark:text-gray-900 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              {project.buttonLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
