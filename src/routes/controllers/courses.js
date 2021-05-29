const router = require('express').Router();
const axios = require('axios');

const auth = require('../../helpers/authentication.js');

router.get('/courses', auth.tokenVerification, async (req, res) => {
    
});

router.get('/courses/:id', auth.tokenVerification, async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/courses/' + req.params.id,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    });

    res.render('pages/course', {
        classes: response.data.classes
    });
});

router.get('/courses/:id/attendance', auth.tokenVerification, async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/classes/' + req.params.id + '/attendance',
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    });

    res.render('pages/course', {
        classes: response.data.classes
    });
});

module.exports = router;