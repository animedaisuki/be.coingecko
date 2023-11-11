const app = require("../../src/loaders/express");
const application = app();
const request = require("supertest");

jest.setTimeout(10000);

describe("fetch crypto test", () => {
  it("should return all unique crypto symbols", async () => {
    const uniqueSymbols = {
      uniqueSymbols: [
        "AAVE",
        "ADA",
        "ATOM",
        "BNB",
        "BTC",
        "CRO",
        "DOGE",
        "DOT",
        "EOS",
        "ETH",
        "LINK",
        "LTC",
        "MIOTA",
        "SOL",
        "TRX",
        "UNI",
        "USDC",
        "USDT",
        "WBTC",
        "XEM",
        "XLM",
        "XMR",
        "XRP",
      ],
    };
    const res = await request(application).get("/api/v1/currencies/all");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(uniqueSymbols);
  });

  it("should match crypto stats", async () => {
    const AAVEStats = {
      name: "Aave",
      symbol: "AAVE",
      date: "2021-07-06T13:59:59.000Z",
      currentPrice: 316.89850739,
      price24hChange: 0.029462545298092148,
      price7dChange: 0.338446737723888,
      price1mthChange: -0.13335208023857753,
      volume: 988705452.84,
      marketCap: 4066775915.02,
      image:
        "https://assets.coingecko.com/coins/images/12645/standard/AAVE.png?1696512452",
    };
    const res = await request(application).get("/api/v1/currencies/AAVE/stats");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(AAVEStats);
  });

  it("should match all crypto stats", async () => {
    const stats = [
      {
        name: "Aave",
        symbol: "AAVE",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 316.89850739,
        price24hChange: 0.029462545298092148,
        price7dChange: 0.338446737723888,
        price1mthChange: -0.13335208023857753,
        volume: 988705452.84,
        marketCap: 4066775915.02,
        image:
          "https://assets.coingecko.com/coins/images/12645/standard/AAVE.png?1696512452",
      },
      {
        name: "Cardano",
        symbol: "ADA",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 1.41805266,
        price24hChange: 0.00936335524975088,
        price7dChange: 0.03625680410144276,
        price1mthChange: -0.1550400039736671,
        volume: 1477699691.39,
        marketCap: 45301575642.27,
        image:
          "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
      },
      {
        name: "Cosmos",
        symbol: "ATOM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 13.15937136,
        price24hChange: -0.028719378083458695,
        price7dChange: 0.13641616130203504,
        price1mthChange: -0.12845402899457503,
        volume: 253782183.47,
        marketCap: 2865092626.61,
        image:
          "https://assets.coingecko.com/coins/images/1481/standard/cosmos_hub.png?1696502525",
      },
      {
        name: "Binance Coin",
        symbol: "BNB",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 320.93480178,
        price24hChange: 0.061369619712460244,
        price7dChange: 0.06902883601219188,
        price1mthChange: -0.18507280511189084,
        volume: 2203265497.94,
        marketCap: 49241956385.46,
        image:
          "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
      },
      {
        name: "Bitcoin",
        symbol: "BTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 34235.19345116,
        price24hChange: 0.01449626502148825,
        price7dChange: -0.04551673918494861,
        price1mthChange: -0.04537301705635661,
        volume: 26501259869.76,
        marketCap: 641899161593.76,
        image:
          "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
      },
      {
        name: "Crypto.com Coin",
        symbol: "CRO",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.12285622,
        price24hChange: 0.06080821636179942,
        price7dChange: 0.06502393993655776,
        price1mthChange: -0.011570356979219053,
        volume: 152076430.02,
        marketCap: 3103718258.1,
        image:
          "https://assets.coingecko.com/coins/images/7310/standard/cro_token_logo.png?1696507599",
      },
      {
        name: "Dogecoin",
        symbol: "DOGE",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.23442176,
        price24hChange: 0.01212074792234447,
        price7dChange: -0.10787839227817117,
        price1mthChange: -0.3695070034707247,
        volume: 1265920168.53,
        marketCap: 30552518423.82,
        image:
          "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
      },
      {
        name: "Polkadot",
        symbol: "DOT",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 16.14356433,
        price24hChange: 0.05959614394444712,
        price7dChange: -0.006755840381282252,
        price1mthChange: -0.3329546516120671,
        volume: 1001573398.32,
        marketCap: 15467724813.64,
        image:
          "https://assets.coingecko.com/coins/images/12171/standard/polkadot.png?1696512008",
      },
      {
        name: "EOS",
        symbol: "EOS",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 3.88232464,
        price24hChange: 0.016510579359071416,
        price7dChange: -0.05528824338367182,
        price1mthChange: -0.3368230197557362,
        volume: 696787461.88,
        marketCap: 3707456939.76,
        image:
          "https://assets.coingecko.com/coins/images/738/standard/eos-eos-logo.png?1696501893",
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 2324.67944917,
        price24hChange: 0.05735376651646764,
        price7dChange: 0.07585778297100071,
        price1mthChange: -0.14379369720990856,
        volume: 20891861314.44,
        marketCap: 271028619181.2,
        image:
          "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
      },
      {
        name: "Chainlink",
        symbol: "LINK",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 20.08046649,
        price24hChange: 0.09301739186832819,
        price7dChange: 0.031883618799120425,
        price1mthChange: -0.27116815909491726,
        volume: 1156986405.07,
        marketCap: 8775355704.93,
        image:
          "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009",
      },
      {
        name: "Litecoin",
        symbol: "LTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 138.98563599,
        price24hChange: 0.00660801696788433,
        price7dChange: -0.032826623899690884,
        price1mthChange: -0.2131675486350435,
        volume: 1504907480.34,
        marketCap: 9277626785.3,
        image:
          "https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400",
      },
      {
        name: "IOTA",
        symbol: "MIOTA",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.85173475,
        price24hChange: 0.03867356711912917,
        price7dChange: 0.013992369021686225,
        price1mthChange: -0.31930937422996375,
        volume: 38663873.89,
        marketCap: 2367422541.11,
        image:
          "https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png",
      },
      {
        name: "Solana",
        symbol: "SOL",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 34.26913971,
        price24hChange: 0.038944012854808634,
        price7dChange: 0.011880018256781567,
        price1mthChange: -0.19001528454710168,
        volume: 365336040.07,
        marketCap: 9343050096.63,
        image:
          "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
      },
      {
        name: "TRON",
        symbol: "TRX",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.06493519,
        price24hChange: 0.005589845980354817,
        price7dChange: -0.04071161601985489,
        price1mthChange: -0.1622032255371734,
        volume: 699504110.89,
        marketCap: 4653233598.79,
        image:
          "https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193",
      },
      {
        name: "Uniswap",
        symbol: "UNI",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 22.40018588,
        price24hChange: 0.11470435910509656,
        price7dChange: 0.20727539985254614,
        price1mthChange: -0.13554452671060602,
        volume: 815123868.59,
        marketCap: 13155007434.09,
        image:
          "https://assets.coingecko.com/coins/images/12504/standard/uni.jpg?1696512319",
      },
      {
        name: "USD Coin",
        symbol: "USDC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 1.00005854,
        price24hChange: -0.0004690024651889855,
        price7dChange: -0.000007419510609060447,
        price1mthChange: -0.0005181410429810297,
        volume: 2312601909.64,
        marketCap: 25673216975.57,
        image:
          "https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694",
      },
      {
        name: "Tether",
        symbol: "USDT",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 1.00009009,
        price24hChange: -0.0005769449354112503,
        price7dChange: 0.00006636842574103472,
        price1mthChange: -0.0007488712551828196,
        volume: 51054194252.83,
        marketCap: 62333837884.45,
        image:
          "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
      },
      {
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 34189.37282594,
        price24hChange: 0.011320581258139856,
        price7dChange: -0.047675657371885165,
        price1mthChange: -0.04635175091367899,
        volume: 203544812.43,
        marketCap: 6713947475.19,
        image:
          "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
      },
      {
        name: "NEM",
        symbol: "XEM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.13359061,
        price24hChange: 0.022880599009129563,
        price7dChange: 0.045203617785358204,
        price1mthChange: -0.2883425350115069,
        volume: 66353406.09,
        marketCap: 1202315485.08,
        image:
          "https://assets.coingecko.com/coins/images/242/standard/NEM_WC_Logo_200px.png?1696501595",
      },
      {
        name: "Stellar",
        symbol: "XLM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.26018954,
        price24hChange: 0.022530812052971055,
        price7dChange: -0.07345840177327685,
        price1mthChange: -0.31754519162931594,
        volume: 360426095.38,
        marketCap: 6049985280.38,
        image:
          "https://assets.coingecko.com/coins/images/100/standard/Stellar_symbol_black_RGB.png?1696501482",
      },
      {
        name: "Monero",
        symbol: "XMR",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 222.13713561,
        price24hChange: 0.035773405011523596,
        price7dChange: 0.022989963196501328,
        price1mthChange: -0.18510100160984497,
        volume: 167861959.49,
        marketCap: 3986737880.19,
        image:
          "https://assets.coingecko.com/coins/images/69/standard/monero_logo.png?1696501460",
      },
      {
        name: "XRP",
        symbol: "XRP",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: 0.66540248,
        price24hChange: 0.016967910319231602,
        price7dChange: -0.05176144772543797,
        price1mthChange: -0.29608364467022996,
        volume: 1938959238.79,
        marketCap: 30722840710.51,
        image:
          "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
      },
    ];
    const res = await request(application).get("/api/v1/currencies/stats");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(stats);
  });
});
