const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const storeService = require('../services/storeService');
const storeRepository = require('../repositories/storeRepository');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get(
  '/',
  catchErrors(storeRepository.getStores),
  storeService.getStores,
  storeController.getStores
);
router.get(
  '/stores',
  catchErrors(storeRepository.getStores),
  storeService.getStores,
  storeController.getStores
);
router.get('/add', storeController.addStore);
router.post(
  '/stores',
  catchErrors(storeRepository.createStore),
  storeService.createStore,
  storeController.createStore
);

module.exports = router;
