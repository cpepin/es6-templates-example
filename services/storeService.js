const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.createStore = (req, res, next) => {
  next();
}

exports.getStores = (req, res, next) => {
  next();
}
