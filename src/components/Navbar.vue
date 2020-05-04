<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Trade Stock</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>-->
          <router-link class="nav-item" to="/" tag="li" active>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link class="nav-item" to="/portfolio" tag="li" active>
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link class="nav-item" to="/Stocks" tag="li" active>
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" @click="endDay" href="#">End Day</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="save" href="#">Save Data</a>
              <a class="dropdown-item" @click="load" href="#">Load Data</a>
            </div>
          </li>

          <li class="nav-item">
            <strong class="nav-link">Funds: {{getFunds | currency}}</strong>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",

  computed: {
    ...mapGetters(["getFunds"])
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    save() {
      const data = {
        funds: this.$store.getters.getFunds,
        stockPortfolio: this.$store.getters.getStocks,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    load() {
      this.loadData();
    }
  }
};
</script>