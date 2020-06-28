const express = require('express');
const passport = require('passport');
const router = express.Router();

// @des     Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}));

// @des     Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}),
    (req, res) => {
        res.redirect('/dashboard')
    }
);

// @des     Logout user
// @route   GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;
