// middleware route for verifying user is logged in
tokenVerification = (req, res, next) => {
	// check that jsonwebtoken is stored in session
	if (!req.session.token) {
		// redirect the user to index page
        return res.redirect('/');
    }
    next();
};

module.exports = { tokenVerification };