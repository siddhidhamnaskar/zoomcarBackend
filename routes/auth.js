const express=require("express")
const router=express.Router();

const User=require("../models/user.js");
const bcrypt=require("bcryptjs");



router.post("/register",async(req,res)=>{

   try{
      const salt=await bcrypt.genSalt(8);
      const hashPass=await bcrypt.hash(req.body.password,salt);
      const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:hashPass
        

          
      });
      const user= await newUser.save();
      console.log(user);
      res.status(200).json(user);

   }
   catch(err){
    res.status(500).json(err);
      
   }

})


router.post("/login",async(req,res)=>{
   try{
     const user=await User.findOne({email:req.body.email});
 
     !user && res.status(400).json("Wrong Credintials");
 
     const validate=await bcrypt.compare(req.body.password,user.password);
 
     !validate && res.status(400).json("Incorrect Password");
 
    const {password, ...other}=user._doc;

    res.status(200).json(other);
 
   }
   catch(err)
   {
     res.status(500).json("Error Found");

   }
 })
 

module.exports=router;