// const cart = ["jeans", "kurta", "shirt"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(orderID);
// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

// const GITHUB_API = "https://api.github.com/users/abhishekit31";
// const user = fetch(GITHUB_API);
// console.log(user);

// =========Creating the promise by literal=========

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

// =========Creating the promise=========

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async2 task is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise two is resolved");
});

// =========Creating the promise and pass some data inside the resolved function=========

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ usernName: "Abhsihek", emali: "abhi@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user); // { usernName: 'Abhsihek', emali: 'abhi@gmail.com' }
});

// =========Creating new promise=========
const promiseFour = new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ userName: "Abhishek", password: "1234" });
    } else {
      rej("ERROR :  Something went wrong");
    }
  }, 1000);
});

// =========Promise chaining=========

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((username) => {
    console.log(username);
  })
  // =========cathcing the error=========
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("the promise is either resolve or rejectd");
  });

// =========handling promise by async await=========

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Goldu", password: "1234" });
    } else {
      reject("ERROR :  Something went wrong Goldu");
    }
  }, 1000);
});

async function consumePrmoiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePrmoiseFive();

//=========Fetching data from Api's=========

async function getData() {
  try {
    const response = await fetch("https://api.github.com/users/abhishekit31");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERR: ", error);
  }
}
getData();

// =========Fetching data from Api's by .then(), .catch()=========

fetch("https://api.github.com/users/abhishekit31")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR : ", error);
  });
