const router = require('express').Router();

// роуты
const mainRoute = require('./views/main.route');
const authRoute = require('./views/auth.route');
const searchRoute = require('./views/search.route');
const profileRoute = require('./views/profile.route');
const fileRoute = require('./views/file.route');

// api
const authApi = require('./api/api.auth.route');
const fileApi = require('./api/api.file.route');

router.use('/', mainRoute);
router.use('/auth', authRoute);
router.use('/search', searchRoute);
router.use('/profile', profileRoute);
router.use('/file', fileRoute);

router.use('/api/auth', authApi);
router.use('/api/file', fileApi);

module.exports = router;
