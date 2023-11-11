const status = require("http-status");
const CryptoCurrencies = require("../model/cryptoCurrencies");
const { fetchCurrencyStats } = require("../helper/fetchCurrencyStats");

exports.findCurrencies = async (req, res) => {
  try {
    const CryptoCurrencyModel = await CryptoCurrencies.getModel(
      req.dbConnetion
    );
    const uniqueSymbols = await CryptoCurrencyModel.distinct("Symbol");
    return res.status(status.OK).json({ uniqueSymbols });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};

exports.fetchStatsBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;
    const CryptoCurrencyModel = await CryptoCurrencies.getModel(
      req.dbConnetion
    );
    const stats = await fetchCurrencyStats(req, symbol, CryptoCurrencyModel);
    if (!stats) {
      return res
        .status(status.NOT_FOUND)
        .json({ message: "No data found for this symbol" });
    }
    return res.status(status.OK).json(stats);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};

exports.fetchAllStats = async (req, res) => {
  try {
    const CryptoCurrencyModel = await CryptoCurrencies.getModel(
      req.dbConnetion
    );
    const uniqueSymbols = await CryptoCurrencyModel.distinct("Symbol");

    let statsPromises = uniqueSymbols.map((symbol) =>
      fetchCurrencyStats(req, symbol, CryptoCurrencyModel)
    );
    let stats = await Promise.all(statsPromises);

    return res.status(status.OK).json(stats);
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};
