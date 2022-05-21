const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(

    {
        groupId:{
           type: String
        },
        description:{
            type: String
        },
        status:{
            type: Boolean
        }
           
    
    },
     {
         timestamps: true
     }
);

module.exports = mongoose.model("Topic", topicSchema);