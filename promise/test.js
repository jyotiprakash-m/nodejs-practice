const fetchData = async () => {
  const response = await fetch("https://jsonplacehlder.typicode.com/todos/1");
  return await response.json();
};

const fun1 = async () => {
  try {
    const data = await fetchData();
    console.log("JSON Data", data);
  } catch (error) {
    console.log("My Error:", error);
  }
};

// Second approach

const fun2 = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((res2) => {
      console.log("Data: ", res2);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Custom promise
const promiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random();

      if (number > 0.5) {
        resolve(number);
      } else {
        reject(new Error("Number is less then 5"));
      }
    }, 2000);
  });
};

const fun3 = () => {
  const data = promiseFunction()
    .then((res) => {
      console.log("Promise data", res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Work is done successfully");
    });
};

fun3();
