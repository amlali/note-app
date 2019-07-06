var loginSchema = {
    "type": "object",
    "required": ["email" , "password"],
    "properties": {

        "email": {
            "type": "string",
            "minLength": 3,
            "maxLength": 20,
            "pattern": "^[-a-zA-Z0-9}{\\_]+(\\.[-a-zA-Z0-9}{\\_]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\\.[-a-zA-Z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$"
        },
        "password": {
            "type": "string",
            "minLength": 3,
            "maxLength": 20,
            "pattern": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{3,15}$"

        }
    }
};

module.exports = {
    loginSchema

}