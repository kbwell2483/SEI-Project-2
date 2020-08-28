require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const Poems = require('./models/poems.js');
const Gratitudes = require('./models/gratitudes.js');
const Images = require('./models/images.js');
const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true });
db.once('open', ()=>{
    console.log('Connected to Mongo')
});


app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

app.get('/', (req, res)=> {
    res.render('static/Home')
})

app.get('/about', (req, res)=> {
    res.render('static/About')
})

app.get('/contact-us', (req, res)=> {
    res.render('static/ContactUs')
})
 
const poemsController = require("./controllers/poemsController.js");
app.use("/poems", poemsController);

const imagesController = require("./controllers/imagesController.js");
app.use("/images", imagesController);

const gratitudesController = require("./controllers/gratitudesController.js");
app.use("/gratitudes", gratitudesController);

// Poems.create({
//       title: 'Trouble But Not Defeat',
//       author: 'Dr. Dale Turner',
//       body: 'Dreams are renewable. No matter what our age or condition, there are still untapped possibilities within us and new beauty waiting to be born.'   
// })
  
app.listen(PORT, ()=>{
    console.log('Listening...')
})
  