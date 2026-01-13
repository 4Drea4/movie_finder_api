require('dotenv').config();
const express = require('express');
const app = express();
const axios = requrie('axios');
const PORT = process.env.PORT || 3001;
app.use(express.json());

// Mount my routes.
const movieRoutes = require("./routes/movieRoutes");
//has to start with api
app.use("/api",movieRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running on local host: ${PORT}`)
})