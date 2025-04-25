const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./db/db.js');
const authRouter = require('./routes/auth.routes.js');
const cookieParser = require('cookie-parser');
const app=express();
connectDB();
dotenv.config();
PORT=process.env.PORT || 3005;
app.use(express.json());
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.get('/',(req,res)=>{
    res.send('Welcome to the backend server')
})
app.listen(PORT,()=>{
  console.log('Server is running on port 3000');
})