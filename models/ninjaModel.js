const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ninja schema model / your ninja data structure
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

// creating a ninja collection which will beautomatically pluralised to 'ninjas '
// passing the second parameter define ninja collection's data structure to look like NinjaSchema
const NinjaModel = mongoose.model('ninja', NinjaSchema);

// export module to its accessible in all other files
module.exports = NinjaModel;
