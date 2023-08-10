import express from "express";
import mysql from 'mysql';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';
import DiplomeRoute from './routes/DiplomeRoute.js';
import * as path from 'path';

const app = express();
const PORT = 5000;
app.use(cors({}));
app.use(express.json());
app.use(UserRoute);
app.use(DiplomeRoute);


// let port = process.env.PORT;
// if (port == null || port == "") {
//     port = 5000;
// }
app.get('/', function (req, res) {
    res.send('Hello from the back-end.');
});
app.listen(PORT, () => console.log('Server up and running!!!, listening to port ' + PORT));