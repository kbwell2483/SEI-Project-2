const mongoose = require('mongoose');
const Schema = mongoose.Schema

const poemsSchema = new Schema ({
    title: String,
    author: String,
    body: {type: String, required: true}
})

const Poems = mongoose.model('Poems', poemsSchema)

module.exports = Poems;
