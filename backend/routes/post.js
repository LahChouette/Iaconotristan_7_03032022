/************************************/
/*** Import des modules nécessaires */
const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');


/**************************************/
/*** Routage de la ressource post */
router.post("/create", auth, multer, postCtrl.create);
router.delete("/delete/:id", auth, postCtrl.delete)
router.get("/", auth, postCtrl.listMsg);

module.exports = router; 