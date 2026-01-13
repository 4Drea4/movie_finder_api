const axios = require("axios");
const omdbClient = require("../services/omdb-client");


async function searchMovies (req,res) {
    try{
    //    it should get the search term from a query parameter
        const {title} = req.query;
    
   //validation
   if (!title){
    return res.status(400).json({error: "Title query parameter is required"});
   }
   const response = await omdbClient.get("/", {
    params:{
        s:title,
        apikey: process.env.OMDB_API_KEY,
    },
   } );

//    If the request is successful, send the list of movies back to the client as JSON.
//     Implement try...catch for error handling.
if (response.data.Response === "False"){
    return res.status(404).json({error:response.data.Error})
}

//send back list of movies
res.json(response.data.Search);
} catch (error) {
    if (error.response) {
        console.error("Error movie", error.response.status);
        res.status(500).json({error:"Failed to fetch"});
    } else {
        console.error("Network Error:" , error.message);
        res.status(502).json({message: "Network error"})
    }
   
}};

async function getMovie  (req,res)  {
    try{
        console.log(req.body)

        //It should make a GET request to the OMDb API. This time, you will need to include two query parameters:
        const {id} = req.params;
        const response =await axios.get(OMDB_BASE_URL, {
            params:{
                i: id,
                apikey: process.env.OMDB_API_KEY,
            },
        });
        if (response.data.Response === "False") {
            return res.status(404).json({error:response.data.Error})
        }
        res.json(response.data);
    } catch (error) {
        if (error.response){

        }
    }
}

//export
module.exports = {searchMovies, getMovie};