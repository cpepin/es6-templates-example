const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const cam = { name: 'Cam', age: 23, cool: true };
  // res.send('Hey! It works!');
  // res.send(req.query);
  res.render('hello', {
    name: 'Cam',
    cat: 'Chaplin'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name];
  reverse.reverse();
  res.send(reverse.join(''));
});

module.exports = router;
