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
        url: process.env.BACKEND_SERVER + '/api/auth/authenticate',
        data: {
            email, password
        }
    });

    if (res.statusCode == 200) {
        req.session.token = response.data['access_token'];  
        return res.status(200).send(req.session.token); 
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

    if (response.statusCode == 200) {
        
    }
});

router.get('/logout', auth.tokenVerification, (req, res) => {
    delete req.session.token;
    return res.redirect('/login');
});

module.exports = router;