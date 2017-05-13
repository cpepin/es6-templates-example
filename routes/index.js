const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const storeService = require('../services/storeService');

// Do work here
router.get('/', storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name];
  reverse.reverse();
  res.send(reverse.join(''));
});

module.exports = router;
