let User = require('../db/models/user')
class UserService {
    constructor(){}

    
    createUser (userobj){
        console.log('in side createUser',userobj);
        return new Promise (function(resolve, reject) {

            User.findOne({email:userobj.email},function(err,user){
                if(err) {
                    console.log(err);
                     return reject();
                }
                if(user){
                    return reject();
                } 
                else {
                    user=new User();
                    user.createUser(userobj);
                    user.save();
                    return resolve();
                }
            })

        })

    }


}

module.exports = new UserService();