const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema({

    panel:{
        type: String,
        required: true,
    },
    supervisor_01:{
        type: String,
        required: false,
    },
    supervisor_02:{
        type: String,
        required: false,
    },
    supervisor_03:{
        type: String,
        required: false,
    },
    supervisor_04:{
        type: String,
        required: false,
    }

});

const Panel = mongoose.model("Panel", panelSchema);

module.exports = Panel;

