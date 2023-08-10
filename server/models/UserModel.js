var Sequelize = required("sequelize");
const db = required("../config/Database.js");

const {DataTypes} = Sequelize;

const User = db.define('users', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    profil: DataTypes.STRING,
},{
    freezeTableName: true
});


(async()=>{
     await db.sync();
})();