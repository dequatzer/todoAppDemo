const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

routes(app);

module.exports = app;