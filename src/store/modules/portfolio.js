const state = {
  funds: 5000,
  stocks: []
};
const mutations = {
  // buystock  takes in the the state from which it would mutate and also the  order details as object
  // the records matches the stock.id chosen with what we have in the state.stock.id
  // if the record exist, add the quantity  from the supposed stock to the records quantity
  buyStock: (state, { stockId, quantity, stockPrices }) => {
    const records = state.stocks.find(el => el.id == stockId);
    if (records) {
      records.quantity += quantity; //amount of QTY to purchase for our stock
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrices * quantity;
  },

  sellStock: (state, { stockId, quantity, stockPrices }) => {
    const records = state.stocks.find(el => el.id === stockId);

    if (records.quantity > quantity) {
      records.quantity -= quantity; //amount of QTY to deduct from our stock's qty
    } else {
      state.stocks.splice(state.stocks.indexOf(records), 1);
    }
    state.funds += stockPrices * quantity;
  },
  setPortfolio: (state, portfolio) => {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit('sellStock', order);
  }
};

const getters = {
  getStocks: (state, getters) => {
    return state.stocks.map(stock => {
      const records = getters.stocks.find(el => el.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: records.name,
        price: records.price
      };
    });
  },
  getFunds: state => state.funds
};

export default { state, mutations, actions, getters };
