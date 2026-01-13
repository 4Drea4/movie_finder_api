require('dotenv').config();
const express = require('express');
const app = express();
const axios = requrie('axios');
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.get('./routes/movieRoutes.js',(req,res) => {

})
app.use('/api/posts', )





app.listen(PORT, ()=>{
    console.log(`Server running on local host: ${PORT}`)
})