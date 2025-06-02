const uploadOnCloudinary = require("../utils/Cloudinary");

const addListing=async(req,res)=>{
try {
  let host=req.userId;
  const {title,description,rent,city,landmark,category}=req.body;
  const image1=await uploadOnCloudinary(req.files.image1[0].path);
  const image2=await uploadOnCloudinary(req.files.image2[0].path);
  const image3=await uploadOnCloudinary(req.files.image3[0].path);
  if(!title || !description || !rent || !city || !landmark || !category){
    return res.status(400).json({message:"All fields are mandatory"});
  }

} catch (error) {
  
}
}
module.exports = {addListing}