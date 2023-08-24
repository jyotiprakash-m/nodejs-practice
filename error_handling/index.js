// Import the custom error from another class

const CustomError = require("./errorHandling");

// Function for fetching data

//https://jsonplaceholder.typicode.com/posts
const fetchData = async (url) => {
  // Fetch data from json placeholder
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    throw new CustomError(errorData.error, response.status);
  }

  return response.json();
};

const url = "https://jsonplaceholder.typicode.com/posts";
const url1 = "http://localhost:8000/users/1";
const url2 = "http://localhost:8000/users/2";
const url3 = "http://localhost:8000/users/4";

fetchData(url2)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    if (err instanceof CustomError) {
      console.error(`Error is ${err.message} and status is: ${err.code}`);
    } else {
      console.log("Error is: ", err);
    }
  });
