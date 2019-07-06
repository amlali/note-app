const mongoose = require("mongoose");

const serverURI = process.env.DATABASE_URL || "mongodb://localhost:27017/structure";

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