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



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
