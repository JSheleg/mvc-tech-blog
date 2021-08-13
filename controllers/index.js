//collecting packaged group of API endpoints and prefixing them with the path /api
//router instance collects everything and packages them for server.js to use

const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);

//bad request, error thrown indicating incorrect path
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;