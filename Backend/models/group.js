const mongoose = require('mongoose');
const GroupSchema = mongoose.Schema({
    groupName:{
        type: String
    },
    groupId:{
        type: String
    },
    evaluatedBy:{
        type: String
    },
    status:{
        type: Boolean
    },
    students:{
        type: Array
    },
    marks:{
        type: Number
    },
    docName:{
        type: String
    },
    feedback:{
        type: String
    },
    presentationMarks:{
        type: Number
    },
    video:{
        type: String
    },
    presentationFeedback:{
        type: String
    },
    sent:{
        type: Boolean
    },
    topic:{
        type: String
    },
    final:{
        type: Number
    }
    
});

module.exports = mongoose.model('Group', GroupSchema)