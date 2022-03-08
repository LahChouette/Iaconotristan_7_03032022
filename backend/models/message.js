/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const DB = require('../db.config')

/*******************************/
/*** Définition du modèle Message */

const Message = DB.define('Message', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.TEXT,
        defaultValue: '',
        allowNull: false,
    },

    attachement: {
        type: DataTypes.TEXT,
        defaultValue: '',
        allowNull: true,
      },
})

/*******************************/
module.exports = Message