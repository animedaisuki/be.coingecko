const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URL,
  API_PREFIX: "/api/v1",
  DEFAULT_CRYPTO_IMG:
    "https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png",
};
