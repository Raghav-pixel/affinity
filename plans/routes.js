const express = require('express');
const router = express.Router();

const auth = require('../auth');
const { getPlans } = require('./controllers/getPlan');
const { getPlanUser } = require('./controllers/getPlanUsers');

router.get('/getPlans',
    auth.authenticate,
    getPlans
);

router.get('/getPlanUsers/:planId',
            auth.authenticate,
            getPlanUser
);

module.exports = router;