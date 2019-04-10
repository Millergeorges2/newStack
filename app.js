var express = require('express');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('about');
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
