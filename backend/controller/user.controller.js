const User=require('../model/user.model.js')

const getCurrentUser=async(req,res)=>{
  try{
    let user=await User.findById(req.userId).select("-password").populate("listing","title image1 image2 image3 rent city landmark category isBooked host rating").populate("booking",
      "title image1 image2 image3 rent city landmark category isBooked host rating"
    );
    if(!user){
      return res.status(404).json({message:"User not found"

      });
    }
    else{
      console.log("Current User:",user);
      return res.status(200).json(user);

    }
  }catch(error){
     return res.status(500).json({message:"Error in getting current user",error:error.message})
  }

}
module.exports={getCurrentUser};