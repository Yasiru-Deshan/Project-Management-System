const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  topic: { //handle
    type: String,
    required: true,
    max: 40
  },
  regsupervisor: { //company
    type: String
  },
  regcosupervisor: { //company
    type: String
  },
  website: { 
    type: String
  },
  area: { //location
    type: String
  },
  category: { //status
    type: String,
    required: true
  },
  members: { //skills
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  leader: { //githubusername
    type: String
  },
  supervisor: [ //experience
    {
      supervisortwo: { //title
        type: String,
        required: true
      },
      supervisorone: { //company
        type: String,
        required: true
      },
      contact: { //location
        type: String
      },
      email:{
          type: String,
      },
      day: { //from
        type: Date,
        required: true
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  alttopic: [  //education 
    {
      main: { //school
        type: String,
        required: true
      },
      topicone: { //degree
        type: String,
        required: true
      },
      topictwo: { //fieldofstudy
        type: String,
        required: true
      },
      from: { //from
        type: Date,
        required: true
      },

      checkbox: { //current
        type: Boolean,
        default: false
      },
      description: { //description
        type: String
      }
    }
  ],
  githublink: { //social
    memberone: { //youtube
      type: String
    },
    membertwo: { //twitter
      type: String
    },
    memberthree: { //facebook
      type: String
    },
    memberfour: { //linkdin
      type: String
    }
   
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
