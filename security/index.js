

 class Security {
     constructor(){
        this.ticket = require('./ticket');
        this.session = require('./session');
        
     }
     async generateTicketData (user,cb){  


        let data = await this.session.createSeesion(user)
        cb(this.ticket._encode(data))     

    }
 }

 module.exports = new Security() 