import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http
    .get('data.json')
    .then(res => res.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          stockPortfolio,
          funds
        };
        commit('setStock', stocks);
        commit('setPortfolio', portfolio);
      }
    });
};
// so basically we are trying to load the data from firebase to our portfolio component
