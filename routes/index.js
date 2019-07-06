
'use strict'
let user = require('./user')
let access = require('./access')

module.exports = function (app) {
    app.use(user)
    app.use(access)

}
