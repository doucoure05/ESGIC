import {Sequelize} from "sequelize";

const db = new Sequelize('diplome_bd', 'Boubacar', 'Doucoure05',  {
    host: '127.0.0.1',
    dialect: 'mysql',   
});

// db.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfuly');
//     })
//     .catch((error) => {
//         console.log('Unable to connect to the database: ', error);
//     });


export default db;
