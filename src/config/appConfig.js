const appConfig = {
	sessionConfig: {
		secret: process.env.SESSiON_SECRET,
		resave: false,
		saveUninitialized: true
	},
	rateLimitConfig: {
		windowMs: 15 * 60 * 1000,
		max: 10
	}
}

module.exports = appConfig;