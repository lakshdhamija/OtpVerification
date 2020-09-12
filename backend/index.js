const express = require('express');
const cors = require('cors');

const port = 8000;

const app = express();

app.use(express.urlencoded());
app.use(cors());

// use express router
app.use('/', require('./routes')); // redirect traffic to index.js in routes folder
app.listen(port, function (err) { // start server
    if (err) {
        console.log("Error in runnung the server", err);
        return;
    }
    console.log("Express server is running on port", port);
});

module.exports = app;