const portfolio = require('./portfolio.js');

test("Create A Portfolio with no shares", () => {
    const port = new portfolio.Portfolio();
    expect(port).not.toBe(undefined);
});

test("Empty portfolio returns true", () => {
    const port = new portfolio.Portfolio();
    const result = port.empty()
    expect(result).toBe(true);
});

test("Purchase 50 stock", () => {
    const port = new portfolio.Portfolio();
    port.purchase("stock", 50);
    expect(port.stocks).toEqual({"stock": 50})
})

test("Sell 20 stock", () => {
    const port = new portfolio.Portfolio();
    port.purchase("stock", 50);
    port.sell("stock", 20);
    expect(port.stocks).toEqual({"stock": 30})
});

test("Count unique tickers", () => {
    const port = new portfolio.Portfolio();
    port.purchase("GMR", 5);
    port.purchase("RBLX", 10);
    const result = port.tickerCount();
    expect(result).toBe(2);
});

test("No zero stock amount", () => {
    const port = new portfolio.Portfolio();
    port.purchase("GMR", 5);
    port.purchase("RBLX", 10);
    port.sell("GMR", 5);
    const result = port.tickerCount();
    expect(result).toBe(1);
});

test("Return 0 For No Stock", () => {
    const port = new portfolio.Portfolio();
    const result = port.count("stock");
    expect(result).toBe(0);
});

test("Sell more stock than owned", () => {
    const port = new portfolio.Portfolio();
    port.purchase("stock", 5);
    expect(() => port.sell("stock", 10)).toThrow("Not possible to sell this number of shares");
});

/**
 * I was able to generally follow the TDD approach with the red-green-blue cycle. I initially 
 * had some trouble as I always wanted to do a little bit more than the minimum for the result and would 
 * prematurely makes changes to account for this. I think TDD is a good method overall, but I 
 * think overly focusing on the semantics could hinder this method, so finding a good balance is the key
 * to this. I liked writing test first the most since it ensures we know what we want or expect from the code.
 */