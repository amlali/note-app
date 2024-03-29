const mongoose = require("mongoose");
let config = require('../../config');

const serverURI = process.env.DATABASE_URL || config.dbURI;

class DBConnection {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(serverURI, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connection successful....");
        
      })
      .catch(err => {
        console.error("Database connection error!");
        console.log( err);
      });
  }
}

module.exports = new DBConnection();