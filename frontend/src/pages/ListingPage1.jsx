import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, MoveLeft, ArrowRight } from "lucide-react";
import { ListingDataContext } from "../Context/ListingContext";
const ListingPage1 = () => {
  let {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landmark,
    setLandmark,
    category,
    setCategory,
  } = useContext(ListingDataContext);
  let navigate = useNavigate();
  const handleImage1 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage1(file); // Stores the file object (for backend upload)
    setFrontEndImage1(URL.createObjectURL(file)); // Creates a temporary URL for previewing the image in the frontend
  };
  const handleImage2 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage2(file); // Stores the file object (for backend upload)
    setFrontEndImage2(URL.createObjectURL(file)); // Creates a temporary URL for previewing the image in the frontend
  };
  const handleImage3 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage3(file); // Stores the file object (for backend upload)
    setFrontEndImage3(URL.createObjectURL(file)); // Creates a temporary URL for previewing the image in the frontend
  };

  return (
    <div className="min-h-full flex items-center justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative overflow-auto ">
      <form
        action=""
        className="w-13/14 max-w-lg p-8 bg-white rounded-lg h-[80vh] shadow-lg my-18 overflow-auto"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/listingpages2");
        }}
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
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
              onChange={handleImage1}
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
              onChange={handleImage2}
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
              onChange={handleImage3}
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
              onChange={(e) => setRent(e.target.value)}
              value={rent}
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
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="landmark"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Landmark
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <input
              type="text"
              name="landmark"
              id="landamark"
              required
              placeholder="Enter your Landmark"
              className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
        >
          <span className="flex items-center justify-center gap-2">
            Next
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ListingPage1;
