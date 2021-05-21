const express = require('express');
const router = express.Router();
const transactions = require('../services/transactions');

router.get('/', (req, res) => {
  transactions.getAll().then(data => {
    res.send(data);
  });
})

router.post('/', (req, res) => {
  const {tradingParty, counterParty, amount} = req.body;
  transactions.create(tradingParty, counterParty, amount).then(data => {
    res.send(data)
  }).catch(e => res.status(400).send(e.message));
})

module.exports = router;