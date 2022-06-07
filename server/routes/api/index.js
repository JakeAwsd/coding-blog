const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./user-routes.js');

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);

module.exports = router;
