const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  committee: {
    //Volunteer / Board of directors / Executive Committee
    type: String,
    required: true,
  },
  role: {
    //Volunteer - Gram Vikas, etc. / ECs: President, etc
    type: String,
    required: true,
  },
  hometown: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
