require('dotenv').config();
const express = require('express');
const app = express();
const axios = requrie('axios');
const PORT = process.env.PORT || 3001;
app.use(express.json());

// Mount your movie routes.



app.listen(PORT, ()=>{
    console.log(`Server running on local host: ${PORT}`)
})