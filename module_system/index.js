/*
   In nodejs, These are basically js/ts file which include different methods in it and we export them 
    and import them where we require them


    three type
    1) Built in module
    2) Local module
    3) External Module

    Built in - provide by nodejs . Change with version and stable
    Local module - Module written by our self .reuse of code
    External - any external module . install by npm package . node part of your code base . basically these 
    are npm packages


    How to built your module system (Show the example)

    ->> Visible outside
    -->> Relative path

*/

// Import different module

// const localFunction = require("./modules/index");

// const myModule = require("./myModule");

import { add, div, mul, sub } from "./es6Format.js"; // import only available in es6

// console.log("Addition: ", localFunction.f1.add(120, 230));

// myModule.fun1();

console.log(add(23, 34));
// fun1();
