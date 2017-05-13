const mongoose = require('mongoose');
const slug = require('slugs');
mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name'
  },
  slug: String,
  description: {
    type: String,
    trime: true
  },
  tags: [String]
});

storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();

  // TODO: Make more resilient
});

module.exports = mongoose.model('Store', storeSchema);
