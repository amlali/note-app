module.exports = {
  apps : [{
    name: 'API',
    script: 'index.js',
    args: 'one two',
    instances: 4,
  
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  
};
