const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const transactions = require('../services/transactions');

router.get('/', (req, res) => {
  transactions.getAll().then(data => {
    res.send(data);
  });
})

router.post('/', 
  body('tradingParty').notEmpty().withMessage('Trading party is mandatory'), 
  body('counterParty').notEmpty().withMessage('Counter party is mandatory'), 
  body('amount').notEmpty().withMessage('Amount is mandatory'),
  body('amount').not().equals("0").withMessage('Amount should not be zero'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {tradingParty, counterParty, amount} = req.body;
    transactions.create(tradingParty, counterParty, amount).then(data => {
      res.send(data)
    }).catch(e => res.status(400).send(e.message));
})

module.exports = router;