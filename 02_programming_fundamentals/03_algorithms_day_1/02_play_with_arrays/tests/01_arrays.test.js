/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/01_arrays.js"));
  return studentCode;
});

test("digits exists", () => {
  return studentCode.then((code) => {
    const digits = eval(code + "; digits;");

    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("first", () => {
  test("first exists", () => {
    return studentCode.then((code) => {
      const first = eval(code + "; first;");

      expect(first).toEqual(0);
    });
  });

  test("first is linked to the first cell of digits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) first"),
        "digits[0] = true; $&"
      );
      const first = eval(changedStudentCode + "; first;");
      expect(first).toBe(true);
    });
  });
});

describe("last", () => {
  test("last exists", () => {
    return studentCode.then((code) => {
      const last = eval(code + "; last;");

      expect(last).toEqual(9);
    });
  });

  test("last is linked to the last cell of digits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) last"),
        "digits[9] = true; $&"
      );
      const last = eval(changedStudentCode + "; last;");
      expect(last).toBe(true);
    });
  });
});

describe("sixth", () => {
  test("sixth exists", () => {
    return studentCode.then((code) => {
      const sixth = eval(code + "; sixth;");

      expect(sixth).toEqual(6);
    });
  });

  test("sixth is linked to the sixth cell of digits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) sixth"),
        "digits[6] = true; $&"
      );
      const sixth = eval(changedStudentCode + "; sixth;");
      expect(sixth).toBe(true);
    });
  });
});
