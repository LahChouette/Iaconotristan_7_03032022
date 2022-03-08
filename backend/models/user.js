/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const DB = require('../db.config')

/*******************************/
/*** Définition du modèle User */

const User = DB.define('User', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    
    username: {
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true        // Ici une validation de données //
        }
    },

    password: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i    // Ici une contrainte //
    }
})

/*******************************/
module.exports = User