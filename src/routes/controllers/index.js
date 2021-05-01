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

router.get('/test', (req, res) => {
    return res.render('pages/attendance', {
        students: [
            { firstName: 'Hans', lastName: 'Hansen', email: 'hanshansen@stud.kea.dk', active: 1, key: '84hOl4k5b8' },
            { firstName: 'Peter', lastName: 'Petersen', email: 'peterpetersen@stud.kea.dk', active: 1, key: 'XbxcK6cqGX' },
            { firstName: 'Jens', lastName: 'Jensen', email: 'jensjensen@stud.kea.dk', active: 1, key: 'EDQUuuNV7o' },
            { firstName: 'Mark', lastName: 'Marksen', email: 'markmarksen@stud.kea.dk', active: 1, key: 'n7CHFF8qn1' },
            { firstName: 'Karl', lastName: 'Karlsen', email: 'karlkarlsen@stud.kea.dk', active: 1, key: '5GYwj0ac4H' }
        ]
    })
});

module.exports = router;