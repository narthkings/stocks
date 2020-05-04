<template>
  <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header">
      {{stocks.name}}
      <h5 class="card-title">
        <small>(Price: ${{stocks.price}})</small>
      </h5>
    </div>
    <div class="card-body text-success">
      <input type="number" class="form-control" v-model="quantity" placeholder="Quantity" />

      <div class="float-center mt-2">
        <button
          @click="buyStock"
          class="btn btn-success"
          ref="btn"
          :disabled="quantity <= 0 || !parseInt(quantity)"
        >Buy</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "stock",
  props: ["stocks"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapGetters(["getFunds"]),
    buyStock() {
      if (this.stocks.price * this.quantity > this.getFunds()) {
        alert("Sorry you'd run bankrupt");
        this.quantity = 0;
      } else {
        const order = {
          stockId: this.stocks.id,
          stockPrices: this.stocks.price,
          quantity: Number(this.quantity)
        };
        console.log(order);
        this.$store.dispatch("buyStock", order);
        this.quantity = 0;
      }
    }
  }
};
</script>