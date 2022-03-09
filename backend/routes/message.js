//Imports
const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/message');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//Routage
router.put("/update", auth, multer, messageCtrl.update)
router.post("/create", auth, multer, messageCtrl.create);
router.delete("/delete", messageCtrl.delete)
router.get("/", auth, messageCtrl.listMsg);

module.exports = router;