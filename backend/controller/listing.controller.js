const Listing = require("../model/listing.model");
const uploadOnCloudinary = require("../utils/Cloudinary");
const User = require("../model/user.model");
const addListing = async (req, res) => {
  try {
    let host = req.userId;
    const { title, description, rent, city, landmark, category } = req.body;
    const image1 = await uploadOnCloudinary(req.files.image1[0].path);
    const image2 = await uploadOnCloudinary(req.files.image2[0].path);
    const image3 = await uploadOnCloudinary(req.files.image3[0].path);
    if (!title || !description || !rent || !city || !landmark || !category) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }
    const newListing = await Listing.create({
      title,
      description,
      rent,
      city,
      landmark,
      category,
      host,
      image1,
      image2,
      image3,
    });

    let user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: newListing._id } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(201)
      .json({ message: "Listing added successfully", newListing });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in adding listing", error: error.message });
  }
};

const getListing = async (req, res) => {
  try {
    const listing = await Listing.find().sort({ createdAt: -1 });
    
    return res.status(200).json({
      message: "Listing fetched successfully",
      listing: listing,// Return the listing array
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting listing",
      error: error.message,
    });
  }
};
module.exports = { addListing, getListing };
