const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOO_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;