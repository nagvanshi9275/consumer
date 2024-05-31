


import express from "express";

import cors from "cors";

import connected_db from "./db/data.js";

import dotenv from 'dotenv';

const app = express()

app.use(cors())

dotenv.config();

connected_db()

const fruit = ["apple", "banana", "mango"]


app.get('/', (req, res) => {
 
   res.send('HELLO SERVER')


})


app.get('/jokes', (req, res) => {

     const jokes = ["app", "build", "natively"]

     res.send(jokes)



})



app.listen(3000, () => {

    console.log(`Server is running at http://localhost:3000`);


})












