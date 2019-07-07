const redis = require('redis');
const bluebird = require('bluebird')
bluebird.promisifyAll(redis);
let config = require("../../config");
class Redis {

    constructor(){
        this.redisClient
        this._connect()
    }
    getRedisClient(){
        return this.redisClient
    }
    _connect() {
        console.log(`### TRING TO CONNECT TO ` +config.redisUrl+":"+config.redisPort + "########")
        this.redisClient = redis.createClient(config.redisUrl+":"+config.redisPort);

        this.redisClient.on('connect', function() {
                console.log('Redis client connected .....');
        });
            
        this.redisClient.on('error', function (err) {
            console.log('Something went wrong !' + err);
        });
    }
   
}

module.exports = new Redis() 