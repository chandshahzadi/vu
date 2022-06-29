const mongoose = require('mongoose');

const data = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    semester: String,
    date_Of_Birth: String,
    address: String,
    phoneNumber: String

});

module.exports = mongoose.model('user',  data);
