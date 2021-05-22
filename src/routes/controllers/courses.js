const router = require('express').Router();
const axios = require('axios');

router.get('/courses', (req, res) => {
    
});

router.get('/courses/:id', async (req, res) => {
    const response = await axios({
        method: 'get',
        url: process.env.BACKEND_SERVER + '/courses/' + req.params.id,
        headers: {
            'Authorization': 'Bearer ' + req.session.token
        }
    });

    res.render('pages/classes', {
        classes: response.data.classes
    });
});

router.get('/courses/:id/attendance', (req, res) => {
    
});

module.exports = router;