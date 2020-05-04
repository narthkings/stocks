import stocks from '../../data/stocks';

const state = {
  stocks: []
};
const mutations = {
  setStock: (state, stocks) => (state.stocks = stocks),
  randomStocks: state => {
    state.stocks.forEach(element => {
      element.price = Math.round(element.price * (1 + Math.random() - 0.5));
    });
  }
};
const actions = {
  buyStock: ({ commit }, order) => {
    commit('buyStock', order);
  },
  initStock: ({ commit }) => {
    commit('setStock', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('randomStocks');
  }
};
const getters = {
  stocks: state => state.stocks
};

export default { state, mutations, actions, getters };
