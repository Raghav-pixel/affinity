const { getPlansFromDB } = require('../db/getPlans');


exports.getPlans = async(req, res) => {
    try {

       const result = await getPlansFromDB();
       console.log(result, "controllers");

       res.status(200).send(result[0]);
    } catch (error) {
        res.status(400).send(error);
    }
}