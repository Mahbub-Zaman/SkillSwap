import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 text-center px-6">
      {/* Error Image */}
      <img
        src="/error.gif" // Make sure the image name matches your file in public/
        alt="Error Illustration"
        className="w-[300px] sm:w-[400px] mb-8 animate-bounce-slow rounded-lg"
      />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-purple-600 mb-4">
        Oops! Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-lg max-w-md mb-8">
        The page you’re looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
