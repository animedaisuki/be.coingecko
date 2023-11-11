const CryptoInfo = require("../model/cryptoInfo");
const config = require("../config/app");

exports.fetchCurrencyStats = async (req, symbol, CryptoCurrencyModel) => {
  const currentEntry = await CryptoCurrencyModel.findOne({
    Symbol: symbol,
  }).sort({ SNo: -1 });

  if (!currentEntry) {
    return null;
  }

  const currentPrice = currentEntry.Close;
  const volume = currentEntry.Volume;
  const marketCap = currentEntry.Marketcap;

  const currentSNo = currentEntry.SNo;
  let SNo24hAgo = currentSNo - 1;
  const SNo7dAgo = currentSNo - 7;
  const SNo1mthAgo = currentSNo - 30;

  const entryStats24hAgo = await CryptoCurrencyModel.findOne({
    Symbol: symbol,
    SNo: SNo24hAgo,
  });
  const price24hAgo = entryStats24hAgo.Close;
  const price24hChange = (currentPrice - price24hAgo) / price24hAgo;

  const entryStats7dAgo = await CryptoCurrencyModel.findOne({
    Symbol: symbol,
    SNo: SNo7dAgo,
  });
  const price7dAgo = entryStats7dAgo.Close;
  const price7dChange = (currentPrice - price7dAgo) / price7dAgo;

  const entryStats1mthAgo = await CryptoCurrencyModel.findOne({
    Symbol: symbol,
    SNo: SNo1mthAgo,
  });
  const price1mthAgo = entryStats1mthAgo.Close;
  const price1mthChange = (currentPrice - price1mthAgo) / price1mthAgo;

  const CryptoInfoModel = await CryptoInfo.getModel(req.dbConnetion);
  const targetCrypto = await CryptoInfoModel.findOne({ Symbol: symbol });
  const image = targetCrypto ? targetCrypto.Image : config.DEFAULT_CRYPTO_IMG;

  return {
    name: currentEntry.Name,
    symbol: symbol,
    date: currentEntry.Date,
    currentPrice,
    price24hChange,
    price7dChange,
    price1mthChange,
    volume,
    marketCap,
    image,
  };
};
