import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-6 sm:p-10 text-gray-800 dark:text-gray-100">
      <h1 className="pt-16 text-3xl font-bold mb-6 text-center" data-aos="fade-up" data-aos-delay="100">
        About Me
      </h1>

      {/* Profile */}
      <div data-aos="fade-up" data-aos-delay="300" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600 pb-1">Profile</h2>
        <p className="text-lg">
          I'm a passionate Web Developer with a focus on Frontend. Currently, I'm diving deep into technologies like HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL. My goal is to build beautiful, functional websites that provide seamless user experiences.
        </p>
      </div>

      {/* Skills */}
      <div data-aos="fade-up" data-aos-delay="500" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600 pb-1">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside">
          <li>HTML5 / CSS3</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap 5</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>GitHub</li>
          <li>Responsive Design</li>
          <li>Web Accessibility</li>
        </ul>
      </div>

      {/* Experience */}
      <div data-aos="fade-up" data-aos-delay="700" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600 pb-1">Experience</h2>
        <div>
          <h3 className="font-bold text-lg">Relieving Teller – Lipa Bank Inc.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">August 2023 – October 2024</p>
          <ul className="list-disc list-inside ml-4 mt-1 mb-4">
            <li>Process customer deposits, withdrawals, and bill payments accurately</li>
            <li>Help customers with account inquiries and balance checks</li>
            <li>Follow bank procedures to protect customer information and funds</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">IT Associate – Lipa Bank Inc.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2024 – Present</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Developed and maintained the bank's promotional website</li>
            <li>Created and managed the Employee Portal, including features like the Dashboard, IT Ticketing System, Website Inquiry Tracker, Account Creation, HR Filing, and more, aimed at reducing paper use</li>
            <li>Provided technical support for IT-related issues faced by employees</li>
            <li>Monitored the bank's network servers and infrastructure</li>
            <li>Handled inquiries about the Core Banking System and coordinated with developers to resolve issues</li>
            <li>Designed promotional materials for print ads and social media to promote the bank’s products and services</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div data-aos="fade-up" data-aos-delay="900" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-600 pb-1">Education</h2>
        <div>
          <h3 className="font-bold text-lg">Bachelor of Science in Information Technology</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Batangas State University - The National Engineering University, Graduated 2023</p>
        </div>
      </div>
    </section>
  );
}

export default About;
