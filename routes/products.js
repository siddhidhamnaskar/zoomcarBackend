const express=require("express");
const router=express.Router();

const Product=require("../models/product");


router.post('/product',async(req,res)=>{
    const newProduct=new Product(req.body)
    try{
        const product= await newProduct.save();
        // console.log(user);
        
    }
    catch(err){
      

    }
});

router.get('/', async(req,res)=>{
 
    try{
       
        const product=await Product.find();
        res.status(200).json(product);
      

    }
    catch(err)
    {
        res.status(500).json(err);
       }
    
 
  
})


module.exports=router;