import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Here you can add your signup logic, e.g., Firebase authentication
    console.log('Name:', name, 'Email:', email, 'Photo:', photoURL, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Create Your Account</h1>

      <form 
        onSubmit={handleRegister} 
        className="bg-white shadow-md rounded-lg p-8 w-96"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
          <input
            type="text"
            placeholder="Enter your photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Register Button */}
        <button 
          type="submit" 
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
