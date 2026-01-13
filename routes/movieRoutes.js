const express = require("express");
const router = express.Router();


//import the controller functions

// Define two routes and associate them with the controller functions:
//api search
router.get("/search", searchMovies);

//this function will handle the GET /api/movies/:id route.
router.get("/movies/id",getMovie);

//export the router

