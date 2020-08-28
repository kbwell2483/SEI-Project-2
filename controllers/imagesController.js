const ImagesRouter = require('express').Router()
const Images = require('../models/images.js')

// INDEX //
ImagesRouter.get('/', (req, res) => {
  Images.find({}, (bad, good) => {
    if (bad) {
      res.status(500).send({
        error: bad.message
      })
    } else {
      res.render('images/Index', {
        images: good
      })
    }
  })
})



// NEW //
ImagesRouter.get('/new', (req, res) => {
  res.render('images/New')
})


// DELETE //
ImagesRouter.delete('/:id', (req, res) => {
  Images.findByIdAndDelete(req.params.id, (error, deletedImages) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(deletedImages)
      res.redirect('/images')
    }
  })
})
// UPDATE //
ImagesRouter.put('/:id', (req, res) => {
  if (req.body.isDone === 'on') {
    req.body.isDone = true
  } else {
    req.body.isDone = false
  }
  Images.findByIdAndUpdate(req.params.id, req.body, (error, foundImages) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.redirect('/images')
    }
  })
})

// CREATE //
ImagesRouter.post('/', (req, res) => {
  if (req.body.author === '') {
    req.body.author = 'Anonymous'
  }

  Images.create(req.body, (error, createdImages) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      console.log(createdImages)
      res.redirect('/images')
    }
  })
})




// EDIT //
ImagesRouter.get('/:id/edit', (req, res) => {
  Images.findById(req.params.id, (error, foundImages) => {
    if (error) {
      res.status(500).send({
        error: error.message
      })
    } else {
      res.render('images/Edit', {
        images: foundImages
      })
    }
  })
})


// SHOW //

ImagesRouter.get('/:id', (req, res) => {
  Images.findById(req.params.id, (error, showImages) => {
    res.render('images/Show', {
      images: showImages
    })
  })
})

module.exports = ImagesRouter;