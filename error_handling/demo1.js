// Using Error object

const errorUsingErrorObj = (num) => {
  if (typeof num != "number") {
    throw new Error("Please pass a number");
  } else if (num < 5) {
    throw new Error("Please enter a value greater then 5");
  } else {
    return "You number is" + num;
  }
};

// console.log(errorUsingErrorObj(6));
// errorUsingErrorObj(6);
// errorUsingErrorObj(4);
// errorUsingErrorObj("hello world!");

// Handling error using try...catch

const errorHandlingUsingTryCatch = () => {
  const a = 56;

  try {
    console.log("Value of b: ", b);
  } catch (error) {
    console.log("Error is: ", error);
  } finally {
    console.log("Value of a is: ", a);
  }

  console.log("Success handle the error.");
};

// errorHandlingUsingTryCatch();

// Handling error using promise

//  https://jsonplaceholder.typicode.com/posts
const customPromiseFunction = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      resolve(data.json());
    } catch (error) {
      reject(error);
    }
  });
};

customPromiseFunction()
  .then((res) => {
    console.log("First response: ", res);
    return res.find((item) => item.id === 1);
  })
  .then((res) => console.log("Second response: ", res))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Successfully executed");
  });
