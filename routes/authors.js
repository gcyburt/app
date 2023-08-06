const express = require('express')
const router = express.Router()
const Author = require('../models/authors')

// get all authors
router.get('/', (req, res) => {
   res.render('authors/index')
})

// new author
router.get('/new', (req, res) => {
   res.render('authors/new', { author: new Author() })
})

// create author
router.post('/', (req, res) => {
   const author = new Author({ name: req.body.name })
   author.save().then(newAuthor => {
      res.redirect('authors')
   }).catch(err => {
      res.render('authors/new', {
         author: author,
         errorMessage: 'Error creating author'
      })
   })
})

module.exports = router