require('dotenv').config();

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
app.use(require('./routes/controllers/classes'));
app.use(require('./routes/controllers/courses'));

// starts the http server & listens for connections
app.listen(process.env.SERVER_PORT, (error) => {
	if (error) {
		console.error(error)
	}
	console.log('HTTP server started on port', process.env.SERVER_PORT);
});