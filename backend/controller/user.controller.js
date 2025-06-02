const User=require('../model/user.model.js')

const getCurrentUser=async(req,res)=>{
  try{
    let user=await User.findById(req.userId).select("-password");
    if(!user){
      return res.status(404).json({message:"User not found"});
    }
    else{
      return res.status(200).json({message:"User found",user});
    }
  }catch(error){
     return res.status(500).json({message:"Error in getting current user",error:error.message})
  }

}
module.exports={getCurrentUser};