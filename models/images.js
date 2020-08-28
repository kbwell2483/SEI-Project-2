const mongoose = require('mongoose');
const Schema = mongoose.Schema

const imagesSchema = new Schema ({
    title: String,
    author: String,
    image: {type: String, required: true}
})

const Images = mongoose.model('Images', imagesSchema)

module.exports = Images;