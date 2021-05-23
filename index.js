const express = require('express');
require('./database');
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



routes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Express server connected at port ' + port);
})
