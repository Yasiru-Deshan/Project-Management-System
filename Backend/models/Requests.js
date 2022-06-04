const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        groupId:{
            type: String,
        },
        supervisorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status:{
            type: Boolean
        }
    }
)
module.exports = mongoose.model("Request", requestSchema);