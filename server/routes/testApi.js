const express = require('express');

const router = express.Router();

router.get('/notes', (req, res) => {
  // console.log(req.body);
  res.json({ id: 777, noteText: 'randon note', tags:[{id: Date.now(), text: 'hachtag!'}] });
  console.log(res);
});

router.get('/tree', (req, res) => {
  // console.log(req.body);
  res.json({ id: 777, noteText: 'randon note', tags:[{id: Date.now(), text: 'hachtag!'}] });
  console.log(res);
});

module.exports = router;
