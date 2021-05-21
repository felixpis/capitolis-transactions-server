function connect(app) {
    app.get('/api', function (req, res) {
        res.send('Capitolis transactions API is up and running');
    });
}

module.exports = connect;