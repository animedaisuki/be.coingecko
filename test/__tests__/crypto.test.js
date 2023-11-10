const app = require("../../src/loaders/express");
const application = app();
const request = require("supertest");

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
    };
    const res = await request(application).get("/api/v1/currencies/AAVE/stats");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject(AAVEStats);
  });
});
