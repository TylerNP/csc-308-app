class Portfolio {
    constructor() {
        this.stocks = {};
    }

    empty() {
        return Object.keys(this.stocks).length === 0;
    }

    purchase(stock, amount) {
        if (this.stocks[stock]) {
            this.stocks[stock] += amount;
        } else {
            this.stocks[stock] = amount;
        }
    }

    sell(stock, amount) {
        if (amount > this.stocks[stock]) {
            throw new Error("Not possible to sell this number of shares");
        }
        this.stocks[stock] -= amount;
        if (this.stocks[stock] === 0) {
            delete this.stocks[stock];
        }
    }

    tickerCount() {
        return Object.keys(this.stocks).length;
    }

    count(stock) {
        if (this.stocks[stock]) {
            return this.stocks[stock];
        } else {
            return 0;
        }
    }

}

exports.Portfolio = Portfolio;