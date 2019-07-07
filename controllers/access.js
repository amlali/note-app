let accessSchma = require('../validation/schema/access')
let AccessService = require('../services/access') 
let Security = require('../security')
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
                    Security.generateTicketData(data,(ticket)=>{

                        return res.status(200).json({user:data.user,ticket:ticket})
                    })

                     
                 }).catch((err)=>{
                    return res.status(err.status).json(err.error)
                 })


            }

        }
    }
 
}