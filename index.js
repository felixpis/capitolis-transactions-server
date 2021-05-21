const express = require('express');
require('./database');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (app.get('env') == 'development') {
    const logger = require('morgan');
    app.use(logger('dev'));
}

routes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Express server connected at port ' + port);
})
