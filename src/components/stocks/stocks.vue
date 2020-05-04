<template>
  <main>
    <h1>Buy stocks from the big companies</h1>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4" v-for="stock in stocks" :key="stock.id">
          <stock :stocks="stock" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import stock from "./stock";
import { mapGetters } from "vuex";
export default {
  name: "stocks",
  components: { stock },
  computed: {
    ...mapGetters(["stocks"])
  }
};
</script>
