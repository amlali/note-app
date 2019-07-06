let accessSchma = require('../db/migration/access')
let AccessService = require('../services/access') 
const Ajv = require('ajv');
let ajv = new Ajv();

module.exports = {

    loginWithEmailPassword: function () {
        return function (req , res) {
           
            let validate = ajv.compile(accessSchma.loginSchema);
            let valid = validate(req.body);
            if (!valid){
                console.log(validate.errors);
                return res.status(400).send(validate.errors);
            } 
            else{
                AccessService.loginWithEmailAndPassword(req.body).then((data)=>{
                     return res.status(200).json(data.message)
                 }).catch((err)=>{
                    return res.status(err.status).json(err.error)
                 })


            }

        }
    }
 
}