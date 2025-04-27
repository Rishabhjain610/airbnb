const jwt = require("jsonwebtoken");
const dotenv=require("dotenv").config();

const authCheck=async(req,res,next)=>{
try {
  let {token}=req.cookies;
  if(!token){
    return res.status(401).json({message:"Unauthorized"})
  }
  else{
    let verifyToke=await jwt.verify(token,process.env.JWT_SECRET);
    if(!verifyToke){
      return res.status(401).json({message:"User token does not match"});
    }
    else{
      req.userId=verifyToke.userId;
      next();
    }
  }
} catch (error) {
  console.log(error);
  return res.status(500).json({message:"Token verification error"})
  
}
}
module.exports={authCheck}