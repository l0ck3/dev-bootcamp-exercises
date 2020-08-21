/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/02_arrays_methods.js")
  );
  return studentCode;
});

describe("digits", () => {
  test("digits exists", () => {
    return studentCode.then((code) => {
      const digits = eval(code + "; digits;");

      expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  test("digits has been defined with push", () => {
    return studentCode.then((code) => {
      const found = code.match(/digits(\s*?)\.push/g);

      if (/for\s*?\((.*?);(.*?);(.*?)\)/.test(code)) {
        console.warn(
          "Smart move to try a for loop here but no loops in this exercise"
        );
      }
      if (/while\s*?\((.*?)\)/.test(code)) {
        console.warn(
          "Smart move to try a while loop here but no loops in this exercise"
        );
      }

      if (found !== null) {
        expect(found.length).toBe(10);
      }
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
        new RegExp(/(let|const) last/m),
        "digits.push(true); $&"
      );
      const last = eval(changedStudentCode + "; last;");
      expect(last).toBe(true);
    });
  });
});

test("litteralDigits exists", () => {
  return studentCode.then((code) => {
    const litteralDigits = eval(code + "; litteralDigits;");

    expect(litteralDigits).toEqual([
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ]);
  });
});

describe("allDigits", () => {
  test("allDigits exists", () => {
    return studentCode.then((code) => {
      const allDigits = eval(code + "; allDigits;");

      expect(allDigits).toEqual(
        "zero - one - two - three - four - five - six - seven - eight - nine"
      );
    });
  });

  test("allDigits is linked to litteralDigits, changing it should change allDigits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const) allDigits/m),
        "litteralDigits[5] = 'cinq'; $&"
      );
      const allDigits = eval(changedStudentCode + "; allDigits;");
      expect(allDigits).toBe(
        "zero - one - two - three - four - cinq - six - seven - eight - nine"
      );
    });
  });
});
