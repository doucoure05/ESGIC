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

// app.get('/', (req, res) => {
//     res.send('Hello, World!!');
// })
// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname, "../diplome/build");

// app.use(express.static(buildPath));

// app.get('/*', function(req, res) {

//     res.sendFile(
//         path.join(__dirname, "../diplome/build/index.html"),
//         function (err) {
//             if (err) {
//                 res.status(500).send(err);
//             }
//         }
//     );
// });
app.listen(PORT, () => console.log('Server up and running!!!, listening to port ' + PORT));
