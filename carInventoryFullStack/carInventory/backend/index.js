//import packages
const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose'); 
const router = require ('./routes/routes')

//Create express app
const app = express();

app.use(cors());
app.use(express.json ())

//MongoDB connection
const uri =
  "mongodb+srv://manjinderchung:YC24kb1hB8bXgh2Y@cluster0.oh4mph4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose.connect(uri, clientOptions)
.then (() => {
    console.log('Connected to MongoDB')
})
.catch ((error) =>{
    console.log('Error in connecting to MongoDB', error);
});

//Node and Express server
app.use ('/', router.routes)
app.listen (8000, () => {
   console.log('Server is running')
   
})
