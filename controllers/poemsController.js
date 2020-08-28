const PoemsRouter = require('express').Router()
const Poems = require('../models/poems.js')

// INDEX //
PoemsRouter.get('/', (req, res) => {
  Poems.find({}, (bad, good) => {
    if (bad) {
      res.status(500).send({
        error: bad.message
      })
    } else {
      res.render('poems/Index', {
        poems: good
      })
    }
  })
})


// NEW //
PoemsRouter.get('/new', (req, res) => {
  res.render('poems/New')
})


// DELETE//
PoemsRouter.delete('/:id', (req, res) => {
  Poems.findByIdAndDelete(req.params.id, (error, deletedPoems) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(deletedPoems)
      res.redirect('/poems')
    }
  })
})


// UPDATE
PoemsRouter.put('/:id', (req, res) => {
  if (req.body.isDone === 'on') {
    req.body.isDone = true
  } else {
    req.body.isDone = false
  }
  Poems.findByIdAndUpdate(req.params.id, req.body, (error, foundPoems) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.redirect('/poems')
    }
  })
})


// CREATE  //
PoemsRouter.post('/', (req, res) => {
  if (req.body.author === '') {
    req.body.author = 'Anonymous'
  }

  Poems.create(req.body, (error, createdPoems) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(createdPoems)
      res.redirect('/poems')
    }
  })

})


// EDIT //
PoemsRouter.get('/:id/edit', (req, res) => {
  Poems.findById(req.params.id, (error, foundPoems) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.render('poems/Edit', {
        poems: foundPoems
      })
    }
  })
})


// SHOW //

PoemsRouter.get('/:id', (req, res) => {
  Poems.findById(req.params.id, (error, showPoems) => {
    res.render('poems/Show', {
      poems: showPoems
    })
  })
})


module.exports = PoemsRouter;

