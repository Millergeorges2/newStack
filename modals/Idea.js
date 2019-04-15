const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating Schema

const IdeaSchema = new Schema({
    title: {
        type: String,
        requred: true
    },
    details: {
        type:String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('ideas', IdeaSchema);