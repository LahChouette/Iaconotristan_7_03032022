/***********************************/
/*** Import des module nécessaires */
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

/**********************************/
/*** Routage de la ressource User */

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get('/me', auth, userCtrl.userProfil);
router.put('/update',auth, userCtrl.changePwd);
router.delete('/delete', auth, userCtrl.deleteProfile)

module.exports = router;