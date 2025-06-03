import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, MoveLeft } from "lucide-react";
const ListingPage1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full relative overflow-auto ">
      <form
        action=""
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg my-20 overflow-auto"
      >
        <Link to="/">
          <MoveLeft className="absolute w-10 h-10 bg-red-600 rounded-full p-1 top-3 left-5 hover:bg-red-700 text-white" />
        </Link>
        <div className="w-[200px] h-10 text-xl bg-red-600 text-white flex items-center justify-center rounded-full absolute top-5 right-3 shadow-xl ">
          SetUp Your Home
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Enter your Title"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <textarea
              type="text"
              name="description"
              id="description"
              required
              placeholder="Enter your Description"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="image1"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Image1
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black px-3 py-1">
            <input
              type="file"
              name="image1"
              id="image1"
              required
              accept="image/*"
              className="w-full text-gray-700 bg-transparent border-none focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="image2"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Image2
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black px-3 py-1">
            <input
              type="file"
              name="image2"
              id="image2"
              required
              accept="image/*"
              className="w-full text-gray-700 bg-transparent border-none focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="image3"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Image3
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black px-3 py-1">
            <input
              type="file"
              name="image3"
              id="image3"
              required
              accept="image/*"
              className="w-full text-gray-700 bg-transparent border-none focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="rent"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Rent
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <input
              type="number"
              name="rent"
              id="rent"
              required
              placeholder="Enter your Rent"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>



        <div className="mb-6">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            City
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <input
              type="text"
              name="city"
              id="city"
              required
              placeholder="Enter your city"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingPage1;
