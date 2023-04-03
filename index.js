// const bodyParser = require('body-parser');
const express =require('express');
const mongoose=require('mongoose')
const connection=require('./config/db')
 const authroute=require('./routes/auth.js')
 const userroute=require("./routes/User")
 const productroute=require("./routes/products")
const app=express();
const cors=require("cors");

mongoose.set('strictQuery', false);
app.use(express.json());


app.use(cors());

app.use('/',authroute);
app.use("/user",userroute);
app.use("/BookingCars",productroute);

const PORT=3036;

app.listen(PORT,()=>{
    

    try{
        connection();
       console.log("http://localhost:3036");



    }
    catch(err){

     console.log("error found");

    }
   
})

