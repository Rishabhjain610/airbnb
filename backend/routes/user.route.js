const express=require('express');
const { authCheck } = require('../middleware/auth.middleware');
let userRouter=express.Router();
userRouter.get('currentuser',authCheck)
module.exports=userRouter;