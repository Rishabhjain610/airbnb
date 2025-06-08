import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListingDataContext } from "../Context/ListingContext";
import { userDataContext } from "../Context/UserContext";
import { AuthContext } from "../Context/AuthContext";
import {
  MoveLeft,
  Pencil,
  CalendarCheck,
  ArrowRight,
  X,
  Trash2,
  CalendarDays,
} from "lucide-react";
import axios from "axios";

const ViewCard = () => {
  const { cardDetails } = useContext(ListingDataContext);
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();
  const [pop, setPop] = useState(false);
  const [bookpop, setBookPop] = useState(false);
  const handlePop = () => {
    setPop(!pop);
  };
  const handleBookPop = () => {
    setBookPop(!bookpop);
  };

  if (!cardDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-gray-100">
        <div className="text-gray-500 text-xl">No details found.</div>
      </div>
    );
  }

  const isHost = userData.userToSend._id === cardDetails.host;
  const { serverUrl } = useContext(AuthContext);
  const [title, setTitle] = useState(cardDetails.title || "");
  const [description, setDescription] = useState(cardDetails.description || "");
  const { update, setUpdate, Delete, setDelete } =
    useContext(ListingDataContext);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState(cardDetails.rent || "");
  const [city, setCity] = useState(cardDetails.city || "");
  const [landmark, setLandmark] = useState(cardDetails.landmark || "");

  const handleUpdate = async () => {
    setUpdate(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);

      if (backEndImage1) formData.append("image1", backEndImage1);
      if (backEndImage2) formData.append("image2", backEndImage2);
      if (backEndImage3) formData.append("image3", backEndImage3);

      let result = await axios.put(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(result);
      navigate("/");
      setTitle("");
      setDescription("");

      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
    } catch (error) {
      setUpdate(false);
      console.log("Error adding listing:", error);
    }
  };
  const handleDelete = async () => {
    setDelete(true);
    if (window.confirm("Are you sure you want to delete this listing?")) {
      try {
        await axios.delete(
          serverUrl + `/api/listing/delete/${cardDetails._id}`,
          { withCredentials: true }
        );
        navigate("/");
      } catch (error) {
        setDelete(false);
        alert("Error deleting listing");
        console.log("Error deleting listing:", error);
      }
    }
  };

  const handleImage1 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage1(file); // Stores the file object (for backend upload)
    // Creates a temporary URL for previewing the image in the frontend
  };
  const handleImage2 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage2(file); // Stores the file object (for backend upload)
    // Creates a temporary URL for previewing the image in the frontend
  };
  const handleImage3 = (e) => {
    let file = e.target.files[0]; // Gets the first selected file
    setBackEndImage3(file); // Stores the file object (for backend upload)
    // Creates a temporary URL for previewing the image in the frontend
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-red-100 via-white to-gray-100 relative overflow-auto py-1">
      <Link to="/">
        <MoveLeft className="absolute w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full p-2 top-4 left-4 hover:bg-red-700 text-white z-20" />
      </Link>
      <div className="w-full flex justify-center mt-14 md:mt-1">
        <h1 className="text-center text-[22px] md:text-[32px] font-bold text-[#272727] max-w-2xl px-2 truncate">
          {`In ${cardDetails.landmark?.toUpperCase()} , ${cardDetails.city?.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center  md:mt-6 px-2 md:px-0">
        <div className="flex flex-col md:flex-row w-full max-w-5xl h-[320px] md:h-[420px] rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white">
          <div className="w-full md:w-1/2 h-2/3 md:h-full">
            <img
              src={cardDetails.image1}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-row md:flex-col w-full md:w-1/2 h-1/3 md:h-full">
            <div className="w-1/2 md:w-full h-full md:h-1/2">
              <img
                src={cardDetails.image2}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 md:w-full h-full md:h-1/2">
              <img
                src={cardDetails.image3}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-1 gap-2 px-2">
        <div className="text-center text-[18px] md:text-[25px] font-semibold text-[#613b3b]">
          {`${cardDetails.title?.toUpperCase()} ${cardDetails.category?.toUpperCase()} , ${cardDetails.landmark?.toUpperCase()}`}
        </div>
        <div className="text-center text-[16px] md:text-[20px] text-gray-800">
          {`${cardDetails.description?.toUpperCase()}`}
        </div>
        <div className="text-center text-[18px] md:text-[25px] text-red-600 font-bold">
          {`Rs.${cardDetails.rent}/day`}
        </div>
      </div>
      <button
        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 max-w-[400px] w-4/5 justify-center text-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed mt-2 shadow"
        onClick={isHost ? handlePop : handleBookPop}
      >
        {isHost ? (
          <>
            <Pencil className="w-5 h-5" />
            Edit
          </>
        ) : (
          <>
            <CalendarCheck className="w-5 h-5" />
            Book Now
          </>
        )}
      </button>
      {/* updateListing */}
      {pop && (
        <div className="w-full h-full flex items-center justify-center bg-[#000000a9] absolute top-0 left-0 z-50 backdrop-blur-sm ">
          <button
            className="absolute top-6 left-8 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
            onClick={handlePop}
            aria-label="Close"
          >
            <X className="h-7 w-7 text-red-600" />
          </button>
          <form
            action=""
            className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg  overflow-y-auto h-[80vh] "
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div className="w-[200px] h-10 text-xl bg-red-600 text-white flex items-center justify-center rounded-full absolute top-5 right-3 shadow-xl ">
              Update Your Home
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
                  id="landmark"
                  required
                  placeholder="Enter your Landmark"
                  className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none "
                  onChange={(e) => setLandmark(e.target.value)}
                  value={landmark}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
                disabled={update}
              >
                <span className="flex items-center justify-center gap-2">
                  {update ? "Updating Listing.." : "Update Listing"}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button
                type="button"
                className="flex-1 px-4 py-2 text-white bg-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
                onClick={handleDelete}
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Delete Listing
              </button>
            </div>
          </form>
        </div>
      )}
      {bookpop ? (
        <div className="w-full h-full flex items-center justify-center bg-[#ffffffb3] absolute top-0 left-0 z-50 backdrop-blur-sm ">
          <button
            className="absolute top-6 left-8 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
            onClick={handleBookPop}
            aria-label="Close"
          >
            <X className="h-7 w-7 text-red-600" />
          </button>

         
          <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg overflow-y-auto h-[60vh] flex items-center md:mt-0 mx-4 justify-start flex-col gap-4">
            <h1 className="border-b-2 border-red-300 text-3xl py-3 w-full text-center font-bold text-[#d32f2f] mb-2 flex items-center justify-center gap-2">
              <CalendarDays className="w-7 h-7 text-red-400" />
              Confirm &amp; Book
            </h1>
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-red-400" />
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-red-400" />
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg font-semibold transition"
            >
              Book Now
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewCard;
