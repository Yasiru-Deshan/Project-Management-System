const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema({

    panel_name:{
        type: String,
        required: true,
    },
    supervisor_01_name:{
        type: String,
        required: true,
    },
    supervisor_02_name:{
        type: String,
        required: true,
    },
    supervisor_03_name:{
        type: String,
        required: true,
    },
    supervisor_04_name:{
        type: String,
        required: true,
    }

});

const Panel = mongoose.model("Panel", panelSchema);

module.exports = Panel;

