const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staff = new Schema({

    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNo:{
        type: Number,
        required: true,
    }

});

const Staff = mongoose.model("Staff", staff);

module.exports = Staff;