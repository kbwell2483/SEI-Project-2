const GratitudesRouter = require('express').Router()
const Gratitudes = require('../models/gratitudes.js')

// INDEX //
GratitudesRouter.get('/', (req, res) => {
  Gratitudes.find({}, (bad, good) => {
    if (bad) {
      res.status(500).send({
        error: bad.message
      })
    } else {
      res.render('gratitudes/Index', {
        gratitudes: good
      })
    }
  })
})

// NEW //
GratitudesRouter.get('/new', (req, res) => {
  res.render('gratitudes/New')
})


// DELETE //
GratitudesRouter.delete('/:id', (req, res) => {
  Gratitudes.findByIdAndDelete(req.params.id, (error, deletedGratitudes) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(deletedGratitudes)
      res.redirect('/gratitudes')
    }
  })
})


// UPDATE //
GratitudesRouter.put('/:id', (req, res) => {
  if (req.body.isDone === 'on') {
    req.body.isDone = true
  } else {
    req.body.isDone = false
  }
  
  Gratitudes.findByIdAndUpdate(req.params.id, req.body, (error, foundGratitudes) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.redirect('/gratitudes')
    }
  })
})


// CREATE //
GratitudesRouter.post('/', (req, res) => {
  if (req.body.author === '') {
    req.body.author = 'Anonymous'
  }

  Gratitudes.create(req.body, (error, createdGratitudes) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(createdGratitudes)
      res.redirect('/gratitudes')
    }
  })
})



// EDIT //
GratitudesRouter.get('/:id/edit', (req, res) => {
  Gratitudes.findById(req.params.id, (error, foundGratitudes) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.render('gratitudes/Edit', {
        gratitudes: foundGratitudes
      })
    }
  })
})


// SHOW //
GratitudesRouter.get('/:id', (req, res) => {
  Gratitudes.findById(req.params.id, (error, showGratitudes) => {
    res.render('gratitudes/Show', {
      gratitudes: showGratitudes
    })
  })
})

module.exports = GratitudesRouter;
