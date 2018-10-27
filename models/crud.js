const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({

    fullName: {
        type: String
    },
    emailId: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    image: {
        type: String
    }
});


const Crud = mongoose.model('Crud', crudSchema)

module.exports = Crud;