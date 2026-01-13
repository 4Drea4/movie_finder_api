require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded)({extended:true});

// Mount my routes.
const movieRoutes = require("./routes/movieRoutes");
//has to start with api
app.use("/api",movieRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on local host: ${PORT}`)
})