const express = require("express");
const router = express.Router();


//api search
router.get("/search", searchMovies);

//this function will handle the GET /api/movies/:id route.
router.get("/movies/id",getMovie);

