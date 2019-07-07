
let length = require('../length')
let regex = require('../regex')

let loginSchema = {
    "type": "object",
    "required": ["email" , "password"],
    "properties": {

        "email": {
            "type": "string",
            "minLength": length.email.min,
            "maxLength": length.email.max,
            "pattern"  : regex.email
        },
        "password": {
            "type": "string",
            "minLength": length.password.min,
            "maxLength": length.password.max,
            "pattern"  : regex.password

        }
    }
};

module.exports = {
    loginSchema

}