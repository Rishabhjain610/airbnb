import React, { useContext, createContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ListingDataContext } from "./ListingContext";
import { userDataContext } from "../Context/UserContext";
import axios from "axios";
export const bookingDataContext = createContext();
const BookingContext = ({ children }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalRent, setTotalRent] = useState(0);
  const [nights, setNights] = useState(0);
  const { serverUrl } = useContext(AuthContext);
  const { getCurrentUser } = useContext(userDataContext);
  
  const {getListing}= useContext(ListingDataContext);

  const [bookingData, setBookingData] = useState([]);
  const [booking,setBooking] = useState(false);
  const handleBooking = async (id) => {
    setBooking(true);
    try {
      const result = await axios.post(serverUrl + `/api/booking/create/${id}`, {
        checkIn,checkOut,totalRent
      }, {
        withCredentials: true,
      });
      await getCurrentUser();
      await getListing();
      console.log("Booking created successfully:", result.data.booking);
      setBookingData(result.data.booking);
      setBooking(false);
    } catch (error) {
      setBooking(false);
      console.log("Error creating booking:", error);
    }
  };
  const cancelBooking=async(id)=>{
    try {
      const result = await axios.delete(serverUrl + `/api/booking/cancel/${id}`, {
        withCredentials: true,
      });
      await getCurrentUser();
      await getListing();
      console.log("Booking cancelled successfully:", result.data);
    } catch (error) {
      console.log("Error cancelling booking:", error);
    }
  }
  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    totalRent,
    setTotalRent,
    nights,
    setNights,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBooking,
    booking,
    setBooking,
  }
  return (
    
      <bookingDataContext.Provider value={value}>
        {children}
      </bookingDataContext.Provider>
    
  );
};

export default BookingContext;
