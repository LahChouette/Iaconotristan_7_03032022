/************************************/
/*** Import des modules nécessaires */
let models = require('../models');
let utils = require('../utils/jwtUtils');
const fs = require('fs');
const { getUserId } = require('../utils/jwtUtils');

/**************************************/
/*** Routage de la ressource Post */

// Création d'un post // 
exports.create = (req, res) => {
    // Declaration de l'url de l'image //
    let attachmentURL
    // Identifier qui créé le post //
    let id = utils.getUserId(req.headers.authorization)
    models.User.findOne({
        attributes: ['id', 'email', 'username'],
        where: { id: id }
    })
        .then(user => {
            if (user !== null) {
                // Récupération du corps du post //
                let content = req.body.content;
                if (req.file != undefined) {
                    attachmentURL = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                }
                else {
                    attachmentURL == null
                };
                if ((content == 'null' && attachmentURL == null)) {
                    res.status(400).json({ error: 'Rien à publier' })
                } else {
                    models.Post.create({
                        content: content,
                        attachement: attachmentURL,
                        UserId: user.id
                    })
                        .then((newPost) => {
                            res.status(201).json(newPost)
                        })
                        .catch((err) => {
                            res.status(500).json(err)
                        })
                };
            } else {
                res.status(400).json(error);
            }
        })
        .catch(error => res.status(500).json(error));
}

// Afficher les posts sur le mur //
exports.listMsg = (req, res) => {
    models.Post.findAll({
        include: [{
            model: models.User,
            attributes: ['username']
        }],
        order: [['createdAt', 'DESC']]
    })
        .then(posts => {
            if (posts.length > null) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ error: 'Pas de post à afficher' })
            }
        })
        .catch(err => res.status(500).json(err))
}

// Supprimé un post //
exports.delete = (req, res) => {
    // ID du post + vérification //
    let postId = parseInt(req.params.id)
    if (!postId) {
        return res.status(400).json({ error: 'Paramètre manquant' })
    }
    // req => userId, postId, user.isAdmin //
    let userOrder = req.body.userIdOrder;
    // identification du demandeur //
    let id = utils.getUserId(req.headers.authorization)
    models.User.findOne({
        attributes: ['id', 'email', 'username', 'isAdmin'],
        where: { id: id }
    })
        .then(user => {
            // Vérification que le demandeur est soit l'admin soit le poster //
            if (user && (user.isAdmin == true || user.id == userOrder)) {
                console.log('Suppression du post id :', userOrder);
                models.Post
                    .findOne({
                        where: { id: postId }
                    })
                    .then((postFind) => {

                        if (postFind.attachement) {
                            const filename = postFind.attachement.split('/images/')[1];
                            console.log("testimg", filename);
                            fs.unlink(`images/${filename}`, () => {
                                models.Post
                                    .destroy({
                                        where: { id: postFind.id }
                                    })
                                    .then(() => res.end())
                                    .catch(err => res.status(500).json(err))
                            })
                        }
                        else {
                            models.Post
                                .destroy({
                                    where: { id: postFind.id }
                                })
                                .then(() => res.end())
                                .catch(err => res.status(500).json(err))
                        }
                    })
                    .catch(err => res.status(500).json(err))
            } else { res.status(403).json('Utilisateur non autorisé à supprimer ce post') }
        })
        .catch(error => res.status(500).json(error));
};