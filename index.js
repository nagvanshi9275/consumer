


import express from "express";

import cors from "cors";

const app = express()

app.use(cors())

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



