let userValidation = require('../db/migration/userSchema')
let userService = require('../services/user') 
const Ajv = require('ajv');
let ajv = new Ajv();

module.exports = {

    createUser: function () {
        return function (req , res) {
           
            let validate = ajv.compile(userValidation.createUserSchema);
            let valid = validate(req.body);
            if (!valid){
                console.log(validate.errors);
                return res.status(400).send(validate.errors);
            } 
            else{
                 userService.createUser(req.body).then(()=>{
                     return res.status(200).json("success")
                 }).catch(()=>{
                    return res.status(400).json("exists")
                 })


            }

        }
    }
 
}