<template>
  <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">
      {{stocks.name}}
      <h5 class="card-title">
        <small>(Price: ${{stocks.price}} | Quantity: {{stocks.quantity}})</small>
      </h5>
    </div>
    <div class="card-body text-primary">
      <input type="number" class="form-control" v-model="quantity" placeholder="Quantity" />

      <div class="float-center mt-2">
        <button
          @click="sell"
          class="btn btn-primary"
          ref="btn"
          :disabled="quantity <= 0 || !parseInt(quantity)"
        >Sell stock</button>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "stock",
  props: ["stocks"], // this is coming from stock stocks component MapGetters

  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    // ...mapActions(["sellStock"]),
    sell() {
      if (this.quantity > this.stocks.quantity) {
        alert("sorry you can't buy more than your quantity limit");
      } else {
        const order = {
          stockId: this.stocks.id,
          stockPrices: this.stocks.price,
          quantity: Number(this.quantity)
        };
        this.$store.dispatch("sellStock", order);
        this.quantity = 0;
        // this.sellStock();
      }
    }
  }
};
</script>