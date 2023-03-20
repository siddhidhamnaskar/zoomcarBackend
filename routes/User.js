const express=require("express");
const router=express.Router();

const User=require("../models/user.js");
const bcrypt=require("bcryptjs");

router.put("/:id",async(req,res)=>{
   if(req.body.id===req.params.id)
   {
   if(req.body.password)
   {
    const salt=await bcrypt.genSalt(8);
    req.body.password=await bcrypt.hash(req.body.password,salt);
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updateUser);

    }
    catch(err)
    {
        res.status(500).json("Error Found");
    }
   }
}
   else{
    res.status(400).json("you can update only your profile");

   }
})


module.exports=router;