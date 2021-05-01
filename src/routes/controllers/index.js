const router = require('express').Router();

router.get('/login', (req, res) => {
    return res.render('pages/index');
});

router.post('/login', (req, res) => {
    //TODO authenticate
});

router.get('/', (req, res) => {
    return res.render('pages/register');
});

router.post('/register', (req, res) => {
    //TODO make register
});

router.get('/logout', (req, res) => {
    // TODO: clear session
    return res.redirect('/login');
});

module.exports = router;