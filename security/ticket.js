const jwt = require('jsonwebtoken');
let config = require('../config')

class Ticket {

    constructor(){}
    _encode(data){

        return jwt.sign({data: data},config.jwtSecret);
    }
    _decode(ticket){
        try {
              return jwt.verify(token, 'wrong-secret');
          } catch(err) {
              console.log(err);
              return false
          }


    }

}

module.exports = new Ticket()
