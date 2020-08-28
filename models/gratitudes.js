const mongoose = require('mongoose');
const Schema = mongoose.Schema

const gratitudesSchema = new Schema ({
    date: String,
    title: String,
    text: {type: String, required: true}
})

const Gratitudes = mongoose.model('Gratitudes', gratitudesSchema)

module.exports = Gratitudes;