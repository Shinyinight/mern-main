const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("Connected to mongodb");
  } catch (err) {
    console.log("error in connecting db", err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
