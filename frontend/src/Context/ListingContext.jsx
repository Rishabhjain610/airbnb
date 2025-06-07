import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
export const ListingDataContext = createContext();

const ListingContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] = useState("");
  const [adding, setAdding] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [newListData, setNewListingData] = useState([]);
  const [cardDetails, setCardDetails] = useState(null);
  let { serverUrl } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddListing = async () => {
    setAdding(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);
      formData.append("category", category);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);

      let result = await axios.post(serverUrl + "/api/listing/add", formData, {
        withCredentials: true,
      });
      console.log(result);
      navigate("/");
      setTitle("");
      setDescription("");
      setFrontEndImage1(null);
      setFrontEndImage2(null);
      setFrontEndImage3(null);
      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
      setCategory("");
    } catch (error) {
      setAdding(false);
      console.log("Error adding listing:", error);
    }
  };

  useEffect(() => {
    getListing();
  }, [adding]);
  const getListing = async (req, res) => {
    try {
      const result = await axios.get(serverUrl + "/api/listing/get", {
        withCredentials: true,
      });
      setListingData(result.data.listing);

      setNewListingData(result.data.listing);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const handleViewCard = async (id) => {
    try {
      const result=await axios.get(serverUrl + `/api/listing/find/${id}`, {
        withCredentials: true,  
      });
      console.log(result.data.listing)
      setCardDetails(result.data.listing);
      navigate('/viewcard')
    } catch (error) {
      console.log("Error viewing card:", error);
      return res.status(500).json({ error: error.message });
      
    }
  };
  let value = {
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
    handleAddListing,
    adding,
    setAdding,
    listingData,
    getListing,
    setListingData,
    newListData,
    setNewListingData,
    handleViewCard,
    cardDetails,
    setCardDetails,
  };
  return (
    <div>
      <ListingDataContext.Provider value={value}>
        {children}
      </ListingDataContext.Provider>
    </div>
  );
};

export default ListingContext;
