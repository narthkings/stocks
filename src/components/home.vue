<template>
  <div>
    <h1>Stock brokers</h1>Welcome to stock brokers, you can get good and affordable rates of stock from stockholders,
    <br />A little to tip on how to use this mini application,
    <ul class="list-group">
      <li class="list-group-item">
        firstly on the the navigation, the
        <strong>portfolio</strong> represents your dashboard where you could view your stocks which you bought, and are available for selling.
      </li>

      <li class="list-group-item">
        secondly the
        <strong>stocks</strong> link on the navigation represents where all stocks are available for purchase depending on the quantity you want to buy.
      </li>

      <li class="list-group-item">
        thirdly the
        <strong>End day</strong> link on the navigation allows you to close the stock and see which stock crashed or went high, which allows you to either sell or your stock or buy more stock.
      </li>
      <li class="list-group-item">
        furthermore the
        <strong>save and load</strong> dropdown links allows you to save every transaction you made to the server and also load them back from the server to your portfolio (after every purchase or sold stock you have to save and load)
      </li>
      <li
        class="list-group-item"
      >the funds account allows you to see how much you have in your wallet so you could purchase any stock</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
