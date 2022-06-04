const mongoose = require('mongoose')
const PresentationSchema = mongoose.Schema({
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
    supervisor:{
        type: String
    }
    
});

module.exports = mongoose.model('Presentation', PresentationSchema)