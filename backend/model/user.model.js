const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const userSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  listing:{
    type:Schema.Types.ObjectId,
    ref:'Listing'
  },
  booking:{
    type:Schema.Types.ObjectId,
    ref:'Booking'
  }
},{timestamps:true});
module.exports=model('User',userSchema);