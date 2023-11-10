const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URL,
  API_PREFIX: "/api/v1",
};
