const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema({

    panel_name:{
        type: String,
        required: true,
    },
    supervisor_01_name:{
        type: String,
        required: false,
    },
    supervisor_02_name:{
        type: String,
        required: false,
    },
    supervisor_03_name:{
        type: String,
        required: false,
    },
    supervisor_04_name:{
        type: String,
        required: false,
    }

});

const Panel = mongoose.model("Panel", panelSchema);

module.exports = Panel;

