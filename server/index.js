const express = require('express');
const app = express();
const UserRoute = require('./routes/UserRoute.js');
const DiplomeRoute = require('./routes/DiplomeRoute.js');
app.use(cors({}));
app.use(express.json());
app.use(UserRoute);
app.use(DiplomeRoute);

const morgan = require('morgan');
const cors = require('cors');

const APP_PORT = 5000;

app.use(morgan('combined'));
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello from the back-end.');
});

app.listen(APP_PORT, () =>console.log('Webserver listening to port' + APP_PORT));

// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 5000;
// }
// app.listen(port, () => console.log('Server up and running!!!, listening to port ' + port));