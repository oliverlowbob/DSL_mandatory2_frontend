const express = require('express');
const app = express();

app.use(express.json()); // json middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); // configures the static files
app.set("view engine", "ejs"); // sets up the ejs view engine

// retrieve app configuration object
const appConfig = require('./config/appConfig');

// setup & configure express-session
const session = require('express-session');
app.use(session(appConfig.sessionConfig));

// route configuration
app.use(require('./routes/controllers/index'));

// middleware route for verifying user is logged in
app.use((req, res, next) => {
	if (!req.session.user) {
		// redirect the user to index page
        return res.redirect('/');
    }
    next();
});


// starts the http server & listens for connections
app.listen(appConfig.port, (error) => {
	if (error) {
		console.error(error)
	}
	console.log('HTTP server started on port', appConfig.port);
});