/************************************/
/*** Import des modules nécessaires */
const jwt = require('jsonwebtoken');

// Exportation de la fonction d'authentification //
module.exports = (req, res, next) => {
    // Récupération du token dans les paramètres //
    const authHeader = req.headers.authorization;

    // Si l'utilisateur possède une autorisation,
    // on déclare le token et on le vérifie, s'il n'y a pas 
    // d'erreur, on le next, sinon on renvoie un statut 403 //
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            console.log('dans le verify')
            if (err) {
                return res.status(401).json({message: 'Session expirée'});
            }
            next();
        });
    }
    // Sinon, on renvoie le statut 401 Unauthorized //
    else {
        res.status(403).json({error:"accès non authorisé"});
    }
};