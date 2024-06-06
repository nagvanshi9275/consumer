

import User from "../models/user.models.js";



export default async function Getuserdetail(req,  res) {


     try {

      const user = await User.find({})

      res.status(200).json(user)





        
     } catch (error) {

       // console.log(error.message)

        res.status(500).json({ message: error.message });
        
     }



    
}















