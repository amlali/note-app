let User = require('../db/models/user')
class AccessService {
    constructor(){}

    
    loginWithEmailAndPassword (userData){
        console.log('in side loign',userData);
        return new Promise (function(resolve, reject) {

            User.findOne({ email : userData.email },function (err , user){
                if(err) {
                    console.log(err);
                     return reject();
                }
                if(!user){
                    return reject({status:404,error:'User not exist'});
                } 
                else {
                    if(!user.isValidPassword(userData.password))
                        return reject({status:400,error:'invalid password'});
                    else
                        return resolve({status:200 , message: 'login successfully'})

                }
            })

        })

    }


}

module.exports = new AccessService();