const assert = require("chai").assert;
const challenge = require("../process.js");

describe("Challenge", function () {
  it("1/2 + 1/2 should return 1", function () {
    let result = challenge.process("1/2 + 1/2");
    assert.equal(result, "1");
  });

  it("3_3/4 - 5 should return -1_1/4", function () {
    let result = challenge.process("3_3/4 - 5");
    assert.equal(result, "-1_1/4");
  });

  it("2_3/8 + 9/8 should return 3_1/2", function () {
    let result = challenge.process("2_3/8 + 9/8");
    assert.equal(result, "3_1/2");
  });

  it("1/2           *           3_3/4 should return 1_7/8", function () {
    let result = challenge.process("1/2           *           3_3/4");
    assert.equal(result, "1_7/8");
  });

  it("1/3 - 1/6 should return 1/6", function () {
    let result = challenge.process("1/3 - 1/6");
    assert.equal(result, "1/6");
  });

  it("1/2 * 3_3/4 should return 1_7/8", function () {
    let result = challenge.process("1/2 * 3_3/4");
    assert.equal(result, "1_7/8");
  });

  it("1/2 / 3_3/4 should return 2/15", function () {
    let result = challenge.process("1/2 / 3_3/4");
    assert.equal(result, "2/15");
  });

  it("2_1/2 - 1/2 should return 2", function () {
    let result = challenge.process("2_1/2 - 1/2");
    assert.equal(result, "2");
  });

  it("2_1/2 - 0 should return 2_1/2", function () {
    try {
      let result = challenge.process("2_1/2 - 0");
    } catch (e) {
      assert.equal(result, "2_1/2");
    }
  });

  it("0 - 2_1/2 should return -2_1/2", function () {
    let result = challenge.process("0 - 2_1/2");
    assert.equal(result, "-2_1/2");
  });

  it("0 + 2_1/2 should return 2_1/2", function () {
    let result = challenge.process("0 + 2_1/2");
    assert.equal(result, "2_1/2");
  });

  it("1/2 + 0 should return 1/2", function () {
    let result = challenge.process("0 + 1/2");
    assert.equal(result, "1/2");
  });

  it("0 * 1/2 should return 0", function () {
    let result = challenge.process("0 * 1/2");
    assert.equal(result, "0");
  });

  it("1/4 * 0 should return 0", function () {
    let result = challenge.process("1/4 * 0");
    assert.equal(result, "0");
  });

  it("0 / 4 should return 0", function () {
    let result = challenge.process("0 / 4");
    assert.equal(result, "0");
  });

  it("4 / 0 should throw error (Can't divide by zero.)", function () {
    try {
      let result = challenge.process("4 / 0");
    } catch (e) {
      assert.equal(e, "Can't divide y zero.");
    }
  });

  it("2_1/2 - n should throw error", function () {
    try {
      let result = challenge.process("2_1/2 - n");
    } catch (e) {
      assert.equal(e, "Unable to do the operation given. Please verify.");
    }
  });

  it("2_1/2 n 4 should throw error", function () {
    try {
      let result = challenge.process("2_1/2 n 4");
    } catch (e) {
      assert.equal(e, "Unable to do the operation given. Please verify.");
    }
  });

  it("2_1/2 + sadasd should throw error", function () {
    try {
      let result = challenge.process("2_1/2 + sadasd");
    } catch (e) {
      assert.equal(e, "Unable to do the operation given. Please verify.");
    }
  });

  it("sadasd + 2_1/2 should throw error", function () {
    try {
      let result = challenge.process("sadasd + 2_1/2");
    } catch (e) {
      assert.equal(e, "Unable to do the operation given. Please verify.");
    }
  });
});
