const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('reviews');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

router.get('/', ensureGuest, (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  Review.find({user:req.user.id})
  .then(reviews => {
    res.render('index/dashboard', {
      reviews: reviews
    });
  }); 
});

router.get('/about', (req, res) => {
  res.render('index/about');
});

module.exports = router;