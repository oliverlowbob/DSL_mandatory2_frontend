const router = require('express').Router();
const axios = require('axios');

const auth = require('../../helpers/authentication.js');

router.get('/login', (req, res) => {
    return res.render('pages/index');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!(email && password)) {
        res.redirect('/');
    }

    const response = await axios({
        method: 'post',
        url: process.env.BACKEND_SERVER + '/authenticate',
        data: {
            email, password
        }
    });

    if (response.status == 200) {
        req.session.token = response.data.access_token;  
        return res.redirect('/classes');
    }
});

router.get('/', (req, res) => {
    return res.render('pages/register');
});

router.post('/register', async (req, res) => {
    const { key } = req.body;

    const response = await axios({
        method: 'post',
        url: process.env.BACKEND_SERVER + '/attendancekey/validate/' + key
    });

    if (response.status == 200) {
        res.render('pages/200');
    } else {
        res.render('pages/400');
    }
});

router.get('/logout', auth.tokenVerification, (req, res) => {
    delete req.session.token;
    return res.redirect('/login');
});

module.exports = router;