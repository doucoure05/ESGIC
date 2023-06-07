import {Sequelize} from "sequelize";

const db = new Sequelize('diplome_bd', 'root', '',  {
    host: 'localhost',
    dialect: 'mysql',   
});

export default db;
