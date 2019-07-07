
let envs = {
    production: 'production',
    development: 'development',
    staging: 'staging',
    test: 'test'
}
let currentEnv = process.env.NODE_ENV || envs.development;
let config = require(`./env/${currentEnv}.js`);

config.jwtSecret = 'no more data'
module.exports = config