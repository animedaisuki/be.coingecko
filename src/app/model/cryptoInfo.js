const mongoose = require("mongoose");

const cryptoInfoSchema = new mongoose.Schema({
  Name: { type: String },
  Symbol: { type: String },
  Image: { type: String },
});

exports.getModel = async (connection) => {
  if (!connection) {
    throw new Error("No connection");
  }
  return connection.model("cryptoInfos", cryptoInfoSchema);
};
