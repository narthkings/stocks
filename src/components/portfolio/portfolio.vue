<template >
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4" v-for="stock in getStocks" :key="stock.id">
          <stock :stocks="stock" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import stock from "./stock.vue";
export default {
  name: "portfolio",
  computed: {
    ...mapGetters(["getStocks"])
  },
  components: { stock }
};
</script>