const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],  // Array of numbers
    index: "2dsphere" // Mongo accepts 2 types of index 2d - straight line distance and 2dsphere - cured line distance which is more accurate
  }
});


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
  },
  geometry: GeoSchema
});

// creating a ninja collection which will beautomatically pluralised to 'ninjas '
// passing the second parameter define ninja collection's data structure to look like NinjaSchema
const NinjaModel = mongoose.model('ninja', NinjaSchema);

// export module to its accessible in all other files
module.exports = NinjaModel;
