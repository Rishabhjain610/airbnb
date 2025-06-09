import React, { useState, useContext } from "react";
import { User, Mail, Lock, EyeOff, Eye, MoveLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/UserContext";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglepass = () => {
    setShowPassword(!showPassword);
  };
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  let { serverUrl } = useContext(AuthContext);
  let { userData, setUserData } = useContext(userDataContext);
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(serverUrl + "/api/auth/signup", input, {
        withCredentials: true, //used for passing cookies in axios

        //this is needed when res.cookie is used in the backend
      });
      toast.success(result.data.message);
      setUserData(result.data);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 relative">
      <Link to="/">
        <MoveLeft className="absolute w-10 h-10 bg-red-600 rounded-full p-1 top-3 left-5 hover:bg-red-700 text-white" />
      </Link>
      <form
        className="w-full max-w-lg p-8 mx-3 bg-white rounded-lg shadow-lg"
        onSubmit={handleSignup}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Create an Account
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
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
              onChange={(e) =>
                setinput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>

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
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
              onChange={(e) =>
                setinput({ ...input, [e.target.name]: e.target.value })
              }
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
              type={!showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none"
              onChange={(e) =>
                setinput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <button
              type="button"
              onClick={togglepass}
              className="mr-3 focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
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
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
