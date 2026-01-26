// express
const express = require("express");
const app = express();
// environment
require('dotenv').config();
// mongoose for database connection
const mongoose = require("mongoose");

app.use(express.json());

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
    .then(() => {
        console.log("Successfully Connected with DB");
    })
    .catch((err) => {
        console.error("Database connection failed");
        console.error(err);
        // Exit process with failure
        process.exit(1);
    });


// get route for testing
app.get("/addHoldings", (req,res) => {
    const tempHoldings = new HoldingsModel(
        
    )
})

app.listen(PORT, ()=> {
    console.log("App is listening");
    
})