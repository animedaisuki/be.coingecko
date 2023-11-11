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
      currentPrice: "316.90",
      price24hChangePercentage: "2.95",
      price7dChangePercentage: "33.85",
      price1mthChangePercentage: "-13.33",
      volume: "988705453",
      marketCap: "4066775915",
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
        name: "Bitcoin",
        symbol: "BTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "34235.19",
        price24hChangePercentage: "1.45",
        price7dChangePercentage: "-4.55",
        price1mthChangePercentage: "-4.54",
        volume: "26501259870",
        marketCap: "641899161594",
        image:
          "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
        rank: 1,
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "2324.68",
        price24hChangePercentage: "5.74",
        price7dChangePercentage: "7.59",
        price1mthChangePercentage: "-14.38",
        volume: "20891861314",
        marketCap: "271028619181",
        image:
          "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
        rank: 2,
      },
      {
        name: "Tether",
        symbol: "USDT",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "1.00",
        price24hChangePercentage: "-0.07",
        price7dChangePercentage: "-0.00",
        price1mthChangePercentage: "-0.08",
        volume: "51054194253",
        marketCap: "62333837884",
        image:
          "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
        rank: 3,
      },
      {
        name: "Binance Coin",
        symbol: "BNB",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "320.93",
        price24hChangePercentage: "6.14",
        price7dChangePercentage: "6.90",
        price1mthChangePercentage: "-18.51",
        volume: "2203265498",
        marketCap: "49241956385",
        image:
          "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
        rank: 4,
      },
      {
        name: "Cardano",
        symbol: "ADA",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "1.42",
        price24hChangePercentage: "1.07",
        price7dChangePercentage: "3.77",
        price1mthChangePercentage: "-15.39",
        volume: "1477699691",
        marketCap: "45301575642",
        image:
          "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
        rank: 5,
      },
      {
        name: "XRP",
        symbol: "XRP",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.67",
        price24hChangePercentage: "2.40",
        price7dChangePercentage: "-4.52",
        price1mthChangePercentage: "-29.12",
        volume: "1938959239",
        marketCap: "30722840711",
        image:
          "https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
        rank: 6,
      },
      {
        name: "Dogecoin",
        symbol: "DOGE",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.23",
        price24hChangePercentage: "-0.70",
        price7dChangePercentage: "-12.47",
        price1mthChangePercentage: "-38.14",
        volume: "1265920169",
        marketCap: "30552518424",
        image:
          "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
        rank: 7,
      },
      {
        name: "USD Coin",
        symbol: "USDC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "1.00",
        price24hChangePercentage: "-0.05",
        price7dChangePercentage: "-0.01",
        price1mthChangePercentage: "-0.06",
        volume: "2312601910",
        marketCap: "25673216976",
        image:
          "https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694",
        rank: 8,
      },
      {
        name: "Polkadot",
        symbol: "DOT",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "16.14",
        price24hChangePercentage: "5.94",
        price7dChangePercentage: "-0.70",
        price1mthChangePercentage: "-33.31",
        volume: "1001573398",
        marketCap: "15467724814",
        image:
          "https://assets.coingecko.com/coins/images/12171/standard/polkadot.png?1696512008",
        rank: 9,
      },
      {
        name: "Uniswap",
        symbol: "UNI",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "22.40",
        price24hChangePercentage: "11.47",
        price7dChangePercentage: "20.73",
        price1mthChangePercentage: "-13.56",
        volume: "815123869",
        marketCap: "13155007434",
        image:
          "https://assets.coingecko.com/coins/images/12504/standard/uni.jpg?1696512319",
        rank: 10,
      },
      {
        name: "Solana",
        symbol: "SOL",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "34.27",
        price24hChangePercentage: "3.90",
        price7dChangePercentage: "1.19",
        price1mthChangePercentage: "-19.00",
        volume: "365336040",
        marketCap: "9343050097",
        image:
          "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
        rank: 11,
      },
      {
        name: "Litecoin",
        symbol: "LTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "138.99",
        price24hChangePercentage: "0.66",
        price7dChangePercentage: "-3.28",
        price1mthChangePercentage: "-21.31",
        volume: "1504907480",
        marketCap: "9277626785",
        image:
          "https://assets.coingecko.com/coins/images/2/standard/litecoin.png?1696501400",
        rank: 12,
      },
      {
        name: "Chainlink",
        symbol: "LINK",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "20.08",
        price24hChangePercentage: "9.30",
        price7dChangePercentage: "3.19",
        price1mthChangePercentage: "-27.12",
        volume: "1156986405",
        marketCap: "8775355705",
        image:
          "https://assets.coingecko.com/coins/images/877/standard/chainlink-new-logo.png?1696502009",
        rank: 13,
      },
      {
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "34189.37",
        price24hChangePercentage: "1.13",
        price7dChangePercentage: "-4.77",
        price1mthChangePercentage: "-4.64",
        volume: "203544812",
        marketCap: "6713947475",
        image:
          "https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
        rank: 14,
      },
      {
        name: "Stellar",
        symbol: "XLM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.26",
        price24hChangePercentage: "2.18",
        price7dChangePercentage: "-7.41",
        price1mthChangePercentage: "-31.80",
        volume: "360426095",
        marketCap: "6049985280",
        image:
          "https://assets.coingecko.com/coins/images/100/standard/Stellar_symbol_black_RGB.png?1696501482",
        rank: 15,
      },
      {
        name: "TRON",
        symbol: "TRX",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.06",
        price24hChangePercentage: "-7.08",
        price7dChangePercentage: "-11.36",
        price1mthChangePercentage: "-22.59",
        volume: "699504111",
        marketCap: "4653233599",
        image:
          "https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193",
        rank: 16,
      },
      {
        name: "Aave",
        symbol: "AAVE",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "316.90",
        price24hChangePercentage: "2.95",
        price7dChangePercentage: "33.85",
        price1mthChangePercentage: "-13.33",
        volume: "988705453",
        marketCap: "4066775915",
        image:
          "https://assets.coingecko.com/coins/images/12645/standard/AAVE.png?1696512452",
        rank: 17,
      },
      {
        name: "Monero",
        symbol: "XMR",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "222.14",
        price24hChangePercentage: "3.58",
        price7dChangePercentage: "2.30",
        price1mthChangePercentage: "-18.51",
        volume: "167861959",
        marketCap: "3986737880",
        image:
          "https://assets.coingecko.com/coins/images/69/standard/monero_logo.png?1696501460",
        rank: 18,
      },
      {
        name: "EOS",
        symbol: "EOS",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "3.88",
        price24hChangePercentage: "1.59",
        price7dChangePercentage: "-5.59",
        price1mthChangePercentage: "-33.72",
        volume: "696787462",
        marketCap: "3707456940",
        image:
          "https://assets.coingecko.com/coins/images/738/standard/eos-eos-logo.png?1696501893",
        rank: 19,
      },
      {
        name: "Crypto.com Coin",
        symbol: "CRO",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.12",
        price24hChangePercentage: "3.61",
        price7dChangePercentage: "4.03",
        price1mthChangePercentage: "-3.45",
        volume: "152076430",
        marketCap: "3103718258",
        image:
          "https://assets.coingecko.com/coins/images/7310/standard/cro_token_logo.png?1696507599",
        rank: 20,
      },
      {
        name: "Cosmos",
        symbol: "ATOM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "13.16",
        price24hChangePercentage: "-2.87",
        price7dChangePercentage: "13.65",
        price1mthChangePercentage: "-12.84",
        volume: "253782183",
        marketCap: "2865092627",
        image:
          "https://assets.coingecko.com/coins/images/1481/standard/cosmos_hub.png?1696502525",
        rank: 21,
      },
      {
        name: "IOTA",
        symbol: "MIOTA",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.85",
        price24hChangePercentage: "3.66",
        price7dChangePercentage: "1.19",
        price1mthChangePercentage: "-32.07",
        volume: "38663874",
        marketCap: "2367422541",
        image:
          "https://assets.coingecko.com/coins/images/692/standard/IOTA_Swirl.png?1696501881",
        rank: 22,
      },
      {
        name: "NEM",
        symbol: "XEM",
        date: "2021-07-06T13:59:59.000Z",
        currentPrice: "0.13",
        price24hChangePercentage: "-0.46",
        price7dChangePercentage: "1.71",
        price1mthChangePercentage: "-30.75",
        volume: "66353406",
        marketCap: "1202315485",
        image:
          "https://assets.coingecko.com/coins/images/242/standard/NEM_WC_Logo_200px.png?1696501595",
        rank: 23,
      },
    ];
    const res = await request(application).get("/api/v1/currencies/stats");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(stats);
  });
});
