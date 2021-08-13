//collecting packaged group of API endpoints and prefixing them with the path /api
//router instance collects everything and packages them for server.js to use

const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard_routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

//bad request, error thrown indicating incorrect path
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;