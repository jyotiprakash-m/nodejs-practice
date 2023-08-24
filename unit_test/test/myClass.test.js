var MyClass = require("../src/myClass.js");

var myObj = new MyClass();
// Create the object
var chai = require("chai");

var expect = chai.expect;

describe("Test suit", () => {
  it("Test the add method", () => {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });
});
