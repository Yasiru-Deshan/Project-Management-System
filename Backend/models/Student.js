const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const student = new Schema({

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
        type: String,
        required: true,
    }

});

const Student = mongoose.model("Student", student);

module.exports = Student;