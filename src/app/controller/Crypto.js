const status = require("http-status");
const Cryptocurrencies = require("../model/cryptoCurrencies");

exports.findCurrencies = async (req, res) => {
  try {
    const CryptocurrencyModel = await Cryptocurrencies.getModel(
      req.dbConnetion
    );
    const uniqueSymbols = await CryptocurrencyModel.distinct("Symbol");
    return res.status(status.OK).json({ uniqueSymbols });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};

exports.fetchStatsBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;

    const CryptocurrencyModel = await Cryptocurrencies.getModel(
      req.dbConnetion
    );

    const currentEntry = await CryptocurrencyModel.findOne({
      Symbol: symbol,
    }).sort({ SNo: -1 });

    if (!currentEntry) {
      return res
        .status(status.NOT_FOUND)
        .json({ message: "No data found for this symbol" });
    }

    const currentPrice = currentEntry.Close;
    const volume = currentEntry.Volume;
    const marketCap = currentEntry.Marketcap;

    const currentSNo = currentEntry.SNo;
    let SNo24hAgo = currentSNo - 1;
    const SNo7dAgo = currentSNo - 7;
    const SNo1mthAgo = currentSNo - 30;

    const entryStats24hAgo = await CryptocurrencyModel.findOne({
      Symbol: symbol,
      SNo: SNo24hAgo,
    });
    const price24hAgo = entryStats24hAgo.Close;
    const price24hChange = (currentPrice - price24hAgo) / price24hAgo;

    const entryStats7dAgo = await CryptocurrencyModel.findOne({
      Symbol: symbol,
      SNo: SNo7dAgo,
    });
    const price7dAgo = entryStats7dAgo.Close;
    const price7dChange = (currentPrice - price7dAgo) / price7dAgo;

    const entryStats1mthAgo = await CryptocurrencyModel.findOne({
      Symbol: symbol,
      SNo: SNo1mthAgo,
    });
    const price1mthAgo = entryStats1mthAgo.Close;
    const price1mthChange = (currentPrice - price1mthAgo) / price1mthAgo;

    return res.status(status.OK).json({
      name: currentEntry.Name,
      symbol: currentEntry.Symbol,
      date: currentEntry.Date,
      currentPrice,
      price24hChange,
      price7dChange,
      price1mthChange,
      volume,
      marketCap,
    });
  } catch (error) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
};
