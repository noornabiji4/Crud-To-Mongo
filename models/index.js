const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud', (err) => { //enter ur api name
    if (err) {
        console.log(err);
    } else {
        console.log("Database is connceted ");
    }
});

module.exports.Crud = require('./crud');

mongoose.Promise = Promise;