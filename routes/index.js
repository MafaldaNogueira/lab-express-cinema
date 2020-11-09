const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




router.get('/movies', (req,res) => {
    Movie.find()
    .then(movieToFind => {
        res.render('movies', {movies: movieToFind});
    });
});
module.exports = router;

router.get('/movies/:id', (req, res) => {
    const id = req.params.id
    Movie.findById(id)
    .then(movie => {
        res.render("movieDetails", movie)
    });
       
})