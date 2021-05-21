const transactions = require('./transactions');

function connect(app) {
    app.get('/api', function (req, res) {
        res.send('Capitolis transactions API is up and running');
    });

    app.use('/api/transactions', transactions);
}

module.exports = connect;