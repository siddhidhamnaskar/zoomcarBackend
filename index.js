// const bodyParser = require('body-parser');
const express =require('express');
const mongoose=require('mongoose')
const connection=require('./config/db')
 const authroute=require('./routes/auth.js')
 const userroute=require("./routes/User")
 const productroute=require("./routes/products")
const app=express();
mongoose.set('strictQuery', true);
app.use(express.json());



app.use('/auth',authroute);
app.use("/user",userroute);
app.use("/products",productroute);


const PORT=3035;
app.listen(PORT,()=>{
    try{
        connection();
       console.log("http://localhost:3035");


    }
    catch(err){
     console.log("error found");

    }
   
})