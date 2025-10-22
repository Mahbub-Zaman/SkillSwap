import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic or Firebase auth
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div>
           <h1 className="text-4xl font-bold mb-6 text-center">Welcome Back!</h1> 
            <form 
                onSubmit={handleLogin} 
                className="bg-white shadow-md rounded-lg p-8 w-96"
            >
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

                {/* Password */}
                <div className="mb-2">
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

                {/* Forget Password */}
                <div className="mb-4 text-right">
                <Link to="/forgot-password" className="text-purple-500 text-sm hover:underline">
                    Forgot Password?
                </Link>
                </div>

                {/* Login Button */}
                <button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-md transition-colors duration-300"
                >
                Login
                </button>
            </form>
        </div>

        <div className='bg-white shadow-md rounded-lg p-4 w-96 mt-2 flex justify-center'>
            <h3>
                New Here?{' '}
                <Link to="/signup" className='text-[#c400fa] underline'>
                    Create an account
                </Link>
            </h3>
        </div>


        <div className='bg-white shadow-md rounded-lg p-4 w-96 mt-2'>
            <h3 className="text-center text-bold">Other ways to sign in</h3>
            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center py-2 mt-2">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                    </g>
                </svg>
                Login with Google
            </button>
        </div>


    </div>
  );
};

export default Login;
