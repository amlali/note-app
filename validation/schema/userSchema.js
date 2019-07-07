

let length = require('../length')
let regex = require('../regex')

let createUserSchema = {
    "type": "object",
    "required": ["fullname" , "email" , "password"],
    "properties": {
        "fullname": {
            "type": "string",
            "minLength": length.fullname.min,
            "maxLength": length.fullname.max,
            "pattern"  : regex.fullname        },
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
    createUserSchema

}