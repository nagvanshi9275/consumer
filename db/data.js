


import mongoose from "mongoose";

import express from "express"

import { db_Name } from "../constant.js";


const connected_db = async () => {


    try {

     const connection_instance = mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`)


     console.log(`\n mongodbconnected ho gya ${connection_instance}`)




        
    } catch (error) {

        console.log(error.message)
        
    }







}


export default connected_db


