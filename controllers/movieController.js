const axios = require("axios");
const { search } = require("../routes/movieRoutes");
const OMDB_BASE_URL = "http://www.omdbapi.com/"

const searchMovies = async (req,res) => {
    try{
    //    it should get the search term from a query parameter
        const {title} = req.query;
    
   //validation
   if (!title){
    return res.status(400).json({error: "Title query parameter is required"});
   }
   const response = await axios.get(OMDB_BASE_URL, {
    params:{
        s:title,
        apikey: process.env.OMDB_API_KEY,
    },
   } );

//    If the request is successful, send the list of movies back to the client as JSON.
//     Implement try...catch for error handling.


}}

//send back list of movies
res.json(response.data.Search);
} catch (error) {
    console.error("Error movie", error.message);
    res.status(500).json({error:"Failed to fetch"});
}};

const getMovie = async (req,res) => {
    //
}

//export
module.exports = {searchMovies, getMovie};