var express = require('express');

const exphbs = require('express-handlebars');

const mongoose = require('mongoose');

const app = express();

mongoose.Promose = global.Promise;

mongoose.connect('mongodb://localhost/vidjot-dev', {
     useNewUrlParser: true 
})
.then(() =>{
    console.log(`MongoDB Connected`);
});

//load idea model

require('./modals/Idea');
const Idea = mongoose.model('ideas')
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    const title = 'welcome';
    res.render('index', {
        title: title
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
