
import React,{useState} from 'react';
import { User, Mail, Lock,EyeOff ,Eye} from 'lucide-react';
import { Link } from 'react-router-dom';
const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const togglepass=()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Create an Account</h2>
        
      
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <User className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your username"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>

        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <Mail className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>

       
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <Lock className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type={!showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
            />
            <button
              type="button"
              onClick={togglepass}
              className="mr-3 focus:outline-none"
            >
              {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
            </button>
          </div>
        </div>

        
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;