const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(

    {
        groupId:{
           type: String
        },
        title:{
            type: String
        },
        description:{
            type: String
        },
        status:{
            type: Boolean
        },
        approvedBy:{
            type: String
        },
        feedback:{
            type: String
        },

           
    
    },
     {
         timestamps: true
     }
);

module.exports = mongoose.model("Topic", topicSchema);