const { getPlanUsers } = require('../db/getPlanUsers');

exports.getPlanUser = async(req, res) => {
    try {
        const planId = req.params.planId;
        const result = await getPlanUsers(planId);
        
        res.status(200).send(result[0]);
    } catch (error) {
        res.status(400).send(error);
    }
}