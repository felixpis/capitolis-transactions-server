const transactions = require('./transactions');
const auth = require('./auth');
const {authMidleware} = require('./midlewares');

function connect(app) {
    app.get('/api', function (req, res) {
        res.send('Capitolis transactions API is up and running');
    });

    app.use('/api/auth', auth);
    app.use('/api/transactions', authMidleware, transactions);
}

module.exports = connect;