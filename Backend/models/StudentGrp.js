const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentGrp = new Schema({

    grpname:{
        type: String,
        required: true,
    },
    name:[
        {
            type: String,
            required: true,
        }
    ],        
    email:{
        type: String,
        required: true,
    },
    assignpanel:{
        type: String,
        default: "Not Assigned",
    }

});

const StudentGrp = mongoose.model("StudentGrp", studentGrp);

module.exports = StudentGrp;