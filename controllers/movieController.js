const axios = require("axios");
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

    s 
    apikey
   } )


}

const getMovie = async (req,res) => {
    //
}

//export
module.exports = {searchMovies, getMovie};