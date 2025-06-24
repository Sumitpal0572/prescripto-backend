const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
