const router = require('express').Router();
const axios = require('axios');

router.get('/courses/:id', async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/course?id=' + id,
        headers: {
            'x-auth-token': req.session.token
        }
    });

    res.render('pages/course', response);
});

router.get('/courses/:id/attendance', (req, res) => {
    
});

module.exports = router;