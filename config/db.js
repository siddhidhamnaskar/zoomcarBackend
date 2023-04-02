const mongoose=require("mongoose");

const connection=async()=>{
   await mongoose.connect("mongodb+srv://siddhidhamnaskar64:siddhi@cluster0.yoiiztx.mongodb.net/?retryWrites=true&w=majority");
}

module.exports=connection;