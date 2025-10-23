import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQPage = () => {
  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can sign up using your email or Google account. Fill out the registration form and verify your email to start.',
    },
    {
      question: 'Can I enroll in multiple courses?',
      answer: 'Yes! You can browse and enroll in as many courses as you like without any restrictions.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click on "Forgot Password". Enter your email to receive a reset link.',
    },
    {
      question: 'Are the courses free or paid?',
      answer: 'We offer both free and paid courses. Paid courses are clearly labeled with the price.',
    },
    {
      question: 'Can I become an instructor?',
      answer: 'Absolutely! Sign up as an instructor and submit your course content to share your skills with students.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <title>SkillSwap | Help</title>
      <h1 className="text-4xl font-bold text-center mb-12">❓ Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
