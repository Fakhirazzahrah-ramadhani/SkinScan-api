const express = require('express');
const router = express.Router();

const firebaseAuthController = require('../controllers/firebase-auth-controller');
const article = require('../controllers/article');

router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);
router.get('/api/article', article.getArticle);
// router.get('/api/username', firebaseAuthController.getUsername);

module.exports = router;

