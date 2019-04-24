var express = require('express');


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
    res.status(200).send('hello')
});

app.get('/about', (req, res) => {
    res.status(200).send('hello')
});

app.get('/ideas/add', (req, res) => {
    res.status(200).send('connected');
});

app.post('/ideas', (req,res)=>{
    res.send('ok');
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
