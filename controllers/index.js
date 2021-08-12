//collecting packaged group of API endpoints and prefixing them with the path /api
//router instance collects everything and packages them for server.js to use

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//bad request, error thrown indicating incorrect path
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;