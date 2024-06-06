




import mongoose from "mongoose"


const userSchema = new mongoose.Schema({


   message:[{
   
    type: String




   }],

   username:{

    type: String,

    required: true


   }









})






export const Userdata = mongoose.model("Userdata", userSchema)


















