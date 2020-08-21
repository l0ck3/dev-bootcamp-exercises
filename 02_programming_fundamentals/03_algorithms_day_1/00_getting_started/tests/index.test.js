const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});
describe("#booleanVariable", () => {
  test("checks that the booleanVariable has a value true", () => {
    return studentCode.then((code) => {
      const boooleanVariable = eval(code + "; boooleanVariable;");

      expect(boooleanVariable).not.toBe(undefined);
      expect(boooleanVariable).toBe(true);
    });
  });
});

describe("#nullVariable", () => {
  test("checks that the nullVariable is null", () => {
    return studentCode.then((code) => {
      const nullVariable = eval(code + "; nullVariable;");

      expect(nullVariable).not.toBe(undefined);
      expect(nullVariable).toBe(null);
    });
  });
});

describe("#greetingVariable", () => {
  test("checks that the greetingVariable has the string 'Hello World!'", () => {
    return studentCode.then((code) => {
      const greetingVariable = eval(code + "; greetingVariable;");

      expect(greetingVariable).toBe("Hello World!");
    });
  });
});
