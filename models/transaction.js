const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  tradingParty: {type: String, required: true},
  counterParty: {type: String, required: true},
  amount: {type: Number, required: true}
});

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;