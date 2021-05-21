const Transaction = require('../models/transaction');

function getAll() {
  return Transaction.find();
}

function create(tradingParty, counterParty, amount) {
  const transaction = new Transaction({tradingParty, counterParty, amount})
  return transaction.save();
}

module.exports = {
  getAll,
  create
}