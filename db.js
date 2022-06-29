const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/freshly', ()=> {
    console.log('db connected on localhost');
});
