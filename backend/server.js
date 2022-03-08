/************************************/
/*** Import des modules nécessaires */
const express = require('express')
const cors = require('cors')
//const checkTokenMiddleware = require('./jsonwebtoken/check')

/************************************/
/*** Import de la connexion à la DB */
let DB = require('./db.config')

/*****************************/
/*** Initialisation de l'API */
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/***********************************/
/*** Import des modules de routage */


/******************************/
/*** Mise en place du routage */
app.get('/', (req, res) => res.send(`je suis en ligne ! c'est OK`))



app.get('*', (req, res) => res.status(501).send('hein !?!'))

/********************************/
/*** Start serveur avec test DB */
DB.authenticate()
    .then(() => console.log('Database connection OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Le serveur en ligne sur le port: ${process.env.SERVER_PORT}.`)
        })
    })
    .catch(err => console.log('Database Error', err))
