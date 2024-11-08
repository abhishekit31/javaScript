// const cart = ["jeans", "kurta", "shirt"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(orderID);
// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

const GITHUB_API = "https://api.github.com/users/abhishekit31";
const user = fetch(GITHUB_API);
console.log(user);
