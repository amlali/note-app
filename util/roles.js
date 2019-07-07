let roles = {
    user:{
        name:'user',
        ticketExpirIn:365,
    },
    admin:{
        name:'admin',
        ticketExpirInDays:2
    },
    superadmin:{
        name:'superadmin',
        ticketExpirInDays:1
    }
} 
module.exports = {
    roles

}