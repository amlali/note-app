const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
var Helmet = require("helmet");
const DBConnection = require('./db/connections')

const PORT = 3000
const errorApp = require('./middelware/error')
let app = express();


app.use(Helmet({ hidePoweredBy: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req,res,next)=>{
    console.log("*** in server");
  
    next()

})
require('./routes')(app)

let server = http.createServer(app);
function runServer() {
    server.listen(PORT, () => {
        console.log(`server running on port ${PORT} ......`)
    })
}

runServer();

