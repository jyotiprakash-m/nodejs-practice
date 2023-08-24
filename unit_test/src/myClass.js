class MyClass {
  constructor() {
    console.log("initiate");
  }

  // Add method

  add(arg1, arg2) {
    var result;
    result = arg1 + arg2;
    return result;
  }
}

// Export the class
module.exports = MyClass;
