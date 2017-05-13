const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const storeService = require('../services/storeService');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/stores', catchErrors(storeService.createStore), storeController.createStore);

module.exports = router;
