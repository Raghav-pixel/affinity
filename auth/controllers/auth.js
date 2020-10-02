const jwt = require('jsonwebtoken');
const findByCredentials = require('../db/user');
var md5 = require('md5');


const generateAuthToken = ({ id, name, email, phone })=>{

const tokenPayload = { id, name, email, phone }
// console.log({ tokenPayload }, 'tokenPayload');
    return token = jwt.sign(tokenPayload, 'secret', {expiresIn: '17days'});
}

exports.login = async(req, res)=> {
    try {
       const phone = req.body.phone;
       const password = await md5(req.body.password);

        const userInfo = await findByCredentials(phone, password);
        // console.log(userInfo, "user")
            const authToken =  generateAuthToken(userInfo[0][0]);
        // console.log(authToken, "auth token");
        const AUTH_PREFIX = 'JWT'
        res.set({
            Authorization: AUTH_PREFIX + authToken,
            'Access-Control-Expose-Headers': 'Authorization'
        })
        res.status(200).send(authToken);
    } catch (e) {
        res.status(500).send({
            errorMessage: 'internal server error'
        });
    }

}
