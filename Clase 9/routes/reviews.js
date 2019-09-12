const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('reviews');
const User = mongoose.model('users');
const {ensureAuthenticated, ensureGuest} = require('../helpers/auth');

// reviews Index
router.get('/', (req, res) => {
  Review.find({status:'public'})
    .populate('user')
    .sort({date:'desc'})
    .then(reviews => {
      res.render('reviews/index', {
        reviews: reviews
      });
    });
});

// Show Single Review
router.get('/show/:id', (req, res) => {
  Review.findOne({
    _id: req.params.id
  })
  .populate('user')
  .populate('comments.commentUser')
  .then(review => {
    if(review.status == 'public'){
      res.render('reviews/show', {
        review:review
      });
    } else {
      if(req.user){
        if(req.user.id == review.user._id){
          res.render('reviews/show', {
            review:review
          });
        } else {
          res.redirect('/reviews');
        }
      } else {
        res.redirect('/reviews');
      }
    }
  });
});

// Listamos críticas de un usuario
router.get('/user/:userId', (req, res) => {
  Review.find({user: req.params.userId, status: 'public'})
    .populate('user')
    .then(reviews => {
      res.render('reviews/index', {
        reviews:reviews
      });
    });
});

// Logged in users reviews
router.get('/my', ensureAuthenticated, (req, res) => {
  Review.find({user: req.user.id})
    .populate('user')
    .then(reviews => {
      res.render('reviews/index', {
        reviews: reviews
      });
    });
});

// Formulario de Agregar Crítica
router.get('/add', ensureAuthenticated, (req, res) => {
  res.render('reviews/add');
});

// Formulario de Editar Crítica
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Review.findOne({
    _id: req.params.id
  })
  .then(review => {
    if(review.user != req.user.id){
      res.redirect('/reviews');
    } else {
      res.render('reviews/edit', {
        review: review
      });
    }
  });
});

// Procesar Agregar Crítica
router.post('/', (req, res) => {
  let allowComments;

  if(req.body.allowComments){
    allowComments = true;
  } else {
    allowComments = false;
  }

  const newReview = {
    title: req.body.title,
    ranking: req.body.ranking,
    image: '',
    body: req.body.body,
    status: req.body.status,
    allowComments:allowComments,
    user: req.user.id
  }

  // Create Review
  new Review(newReview)
    .save()
    .then(review => {
      res.redirect(`/reviews/show/${review.id}`);
    });
});

// Procesar Formulario de Edición de Crítica
router.put('/:id', (req, res) => {
  Review.findOne({
    _id: req.params.id
  })
  .then(review => {
    let allowComments;
    
    if(req.body.allowComments){
      allowComments = true;
    } else {
      allowComments = false;
    }

    // New values
    review.title = req.body.title;
    review.body = req.body.body;
    review.ranking = req.body.ranking;
    review.status = req.body.status;
    review.allowComments = allowComments;

    review.save()
      .then(review => {
        res.redirect('/dashboard');
      });
  });
});

// Delete Review
router.delete('/:id', (req, res) => {
  Review.remove({_id: req.params.id})
    .then(() => {
      res.redirect('/dashboard');
    });
});

// Add Comment
router.post('/comment/:id', (req, res) => {
  Review.findOne({
    _id: req.params.id
  })
  .then(review => {
    const newComment = {
      commentBody: req.body.commentBody,
      commentUser: req.user.id
    }

    // Add to comments array
    review.comments.unshift(newComment);

    review.save()
      .then(review => {
        res.redirect(`/reviews/show/${review.id}`);
      });
  });
});

module.exports = router;