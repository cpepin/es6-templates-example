const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.createStore = async (req, res, next) => {
  const store = new Store(req.body);
  console.log(`Saving store ${req.body.name}`);
  req.store = await store.save();
  console.log(`Successfully saved store ${store.name}`);
  next();
}

exports.getStores = async (req, res, next) => {
  console.log(`Getting all stores`);
  req.stores = await Store.find();
  console.log(`Successfully retrieved all stores`);
  next();
}
