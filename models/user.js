const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
       
        cart:{
            type:Array
           
        }
    }
)

const User = mongoose.model("UserData", userSchema);

module.exports=User;