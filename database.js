const mongoose = require("mongoose");
const config = require('config');
const url = config.get('database.url');
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
const db = mongoose.connection;

db.on("error", err => {
    console.error(err);
});

db.on("open", () => {
    console.log("Connected to MongoDB");
});
