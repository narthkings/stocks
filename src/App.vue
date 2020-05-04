<template>
  <div id="app">
    <navbar />
    <div class="container mt-4 mx-auto">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { navbar },
  created() {
    return this.$store.dispatch("initStock");
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter-active {
  animation: slide-in 200ms ease-in-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
