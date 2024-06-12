



import User from "../models/user.models.js";



import { Userdata } from "../models/userdata.model.js";


export default async function Getdata(req, res) {


   try {

   const { email } = await req.body

   const user = await User.findOne({email})

   if(!user) return res.status(404).json({message: "User not found"})

    let userdata = await Userdata.findOne({username: user.username})

    if(!userdata) return res.status(404).json({message: "userdata not found"})

     res.status(200).json(userdata)

    //  userdata.message.splice(index, 1)



    
   } catch (error) {

    console.log(error.message)
    
   }








    
}

















