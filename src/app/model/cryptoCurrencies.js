const mongoose = require("mongoose");

const cryptoCurrenciesSchema = new mongoose.Schema({
  SNo: { type: Number },
  Name: { type: String },
  Symbol: { type: String },
  Date: { type: Date },
  High: { type: Number },
  Low: { type: Number },
  Open: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
  Marketcap: { type: Number },
});

exports.getModel = async (connection) => {
  if (!connection) {
    throw new Error("No connection");
  }
  return connection.model("cryptoCurrencies", cryptoCurrenciesSchema);
};
