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
    if (
      !req.files ||
      !req.files.image1 ||
      !req.files.image2 ||
      !req.files.image3
    ) {
      return res.status(400).json({ message: "All images are required" });
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
      listing: listing, // Return the listing array
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in getting listing",
      error: error.message,
    });
  }
};
const findListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      res.status(404).json({ message: "Listing not found" });
    }
    return res.status(200).json({
      message: "Listing found successfully",
      listing: listing,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in finding listing",
      error: error.message,
    });
  }
};
const updateListing = async (req, res) => {
  try {
    let image1, image2, image3;
    const { id } = req.params;
    const { title, description, rent, city, landmark, category } = req.body;

    if (req.files.image1) {
      image1 = await uploadOnCloudinary(req.files.image1[0].path);
    }
    if (req.files.image2) {
      image2 = await uploadOnCloudinary(req.files.image2[0].path);
    }
    if (req.files.image3) {
      image3 = await uploadOnCloudinary(req.files.image3[0].path);
    }
    const listing = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        rent,
        city,
        landmark,
        category,
        image1,
        image2,
        image3,
      },
      { new: true }
    );
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    return res.status(200).json({
      message: "Listing updated successfully",
      listing: listing,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in updating listing",
      error: error.message,
    });
  }
};
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    let user = await User.findByIdAndUpdate(
      listing.host,
      { $pull: { listing: listing._id } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    return res.status(200).json({
      message: "Listing deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting listing",
      error: error.message,
    });
  }
};
const ratingListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    if (!rating) {
      return res.status(400).json({ message: "Rating is required" });
    }
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    listing.rating = Number(rating);
    await listing.save();
    return res.status(200).json({
      message: "Rating added successfully",
      ratingg: listing.rating,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error in rating listing",
      error: error.message,
    });
  }
};
const search = async (req, res) => {
  try {
    // Get the 'query' parameter from the request's query string (?query=...)
    const { query } = req.query;

    // If no query is provided, return a 400 Bad Request error
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    // Search for listings where title, city, landmark, or category matches the query (case-insensitive)
    const listings = await Listing.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Match title
        { city: { $regex: query, $options: "i" } }, // Match city
        { landmark: { $regex: query, $options: "i" } }, // Match landmark
        { category: { $regex: query, $options: "i" } }, // Match category
      ],
    });

    // Return the found listings with a success message
    return res.status(200).json({
      message: "Listings found successfully",
      listings: listings,
    });
  } catch (error) {
    // If any error occurs, return a 500 Internal Server Error with the error message
    return res.status(500).json({
      message: "Error in searching listing",
      error: error.message,
    });
  }
};
module.exports = {
  addListing,
  getListing,
  findListing,
  updateListing,
  deleteListing,
  ratingListing,
  search,
};
