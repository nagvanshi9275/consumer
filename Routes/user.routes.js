



    import express from "express"

    import Getuserdetail from "../controllors/user.controllor.js";

    import Getdata from "../controllors/getdata.controllor.js";

    const router = express.Router()


     router.get('/user', Getuserdetail)

     router.post('/getdata', Getdata)




     export default router;






























































