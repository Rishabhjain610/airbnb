import React, { useState, useContext } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const togglepass = () => {
    setshow(!show);
  };
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  let { serverUrl } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + "/api/auth/login", input, {
        withCredentials: true,
      });
      alert(result.data.message);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Log in to Your Account
        </h2>


        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <Mail className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setinput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <Lock className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type={!show ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) =>
                setinput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
            />
            <button
              type="button"
              onClick={togglepass}
              className="mr-3 focus:outline-none"
            >
              {show ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Log In
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
