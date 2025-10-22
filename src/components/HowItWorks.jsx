import React from 'react';
import { FaUserPlus, FaBookOpen, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-purple-500 mb-4" />,
      title: 'Sign Up',
      description: 'Create your free account and join the SkillSwap community to start learning or teaching.',
    },
    {
      icon: <FaBookOpen className="text-4xl text-purple-500 mb-4" />,
      title: 'Browse Skills',
      description: 'Explore hundreds of skills offered by our expert providers across various categories.',
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-purple-500 mb-4" />,
      title: 'Enroll & Learn',
      description: 'Enroll in the courses you like and start learning with interactive sessions and materials.',
    },
    {
      icon: <FaCheckCircle className="text-4xl text-purple-500 mb-4" />,
      title: 'Achieve Goals',
      description: 'Complete courses, improve your skills, and achieve your personal or professional goals.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">🛠️ How It Works</h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
