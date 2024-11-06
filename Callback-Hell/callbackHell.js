console.log("Namaste");

setTimeout(() => {
  console.log("Javascript");
}, 5000);

console.log("Season-2");

/**
 * one callback is called inside the another another callback is called as callback Hell.
 *
 * it create a structures like pyramid of Doom
 */
const cart = ["Shoes", "Pants", "Kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.orderSummary(function () {
      api.updateWallet();
    });
  });
});
