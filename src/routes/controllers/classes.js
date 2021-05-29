const router = require('express').Router();
const axios = require('axios');

const auth = require('../../helpers/authentication.js');

router.get('/classes', auth.tokenVerification, async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/classes',
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    });

    res.render('pages/course', {
        classes: response.data
    });
});

router.get('/classes/:id', auth.tokenVerification, async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/attendancekey/generate/' + req.params.id,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    });

    res.render('pages/attendance', {
        students: response.data
    });
});

module.exports = router;