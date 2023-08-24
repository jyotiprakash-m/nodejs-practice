// fs.writeFileSync
// fs.writeFile

// I notice if we write the file in browser it shows [object, object] .
// In fs module also we can not write the JSON file directly
const fs = require("fs");
const customer = {
  name: "Newbie Co.",
  order_count: 0,
  address: "Po Box City",
};

// Using fs.writeFile
const jsonCustomer = JSON.stringify(customer);
fs.writeFile("./newCustomer.json", jsonCustomer, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});

// Using fs.writeFileSync

const writeFileFunc = () => {
  const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
  };

  // Using fs.writeFile
  const jsonCustomer = JSON.stringify(customer);
  try {
    const writeFileSynchronously = fs.writeFileSync(
      "./output.json",
      jsonCustomer
    );
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Successfully wrote the file");
  }
};

writeFileFunc();
