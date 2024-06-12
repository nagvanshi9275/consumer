



    import express from "express"

    import Getuserdetail from "../controllors/user.controllor.js";

    import Getdata from "../controllors/getdata.controllor.js";

     import Delete from "../controllors/delete.controllor.js";

    const router = express.Router()


     router.get('/user', Getuserdetail)

     router.post('/getdata', Getdata)

     router.post('/delete', Delete)


     export default router;































































