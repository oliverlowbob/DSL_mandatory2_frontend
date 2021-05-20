const router = require('express').Router();
const axios = require('axios');

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

    req.session.token = response.headers['x-auth-token'];
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
        
    }
});

router.get('/logout', (req, res) => {
    delete req.session.token;
    return res.redirect('/login');
});

module.exports = router;