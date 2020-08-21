/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/01_play_with_variables.js")
  );
  return studentCode;
});

test("hello sparta", () => {
  return studentCode.then((code) => {
    const hello = eval(code + "; hello;");

    expect(hello).toBe("Sparta");
  });
});

test("currentYear", () => {
  return studentCode.then((code) => {
    const currentYear = eval(code + "; currentYear;");

    expect(currentYear).toBe(2017);
  });
});

test("foo", () => {
  return studentCode.then((code) => {
    const foo = eval(code + "; foo;");

    expect(foo).toBe(12);
  });
});

test("bar", () => {
  return studentCode.then((code) => {
    const bar = eval(code + "; bar;");

    expect(bar).toBe(28);
  });
});

describe("sumResult", () => {
  test("sumResult", () => {
    return studentCode.then((code) => {
      const sumResult = eval(code + "; sumResult;");

      expect(sumResult).toBe(40);
    });
  });

  test("sumResult should be linked to foor and bar, changing foo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const foo = 10;"
      );
      const sumResult = eval(changedStudentCode + "; sumResult;");
      expect(sumResult).toBe(38);
    });
  });

  test("sumResult should be linked to foor and bar, changing bar should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const bar = 10;"
      );
      const sumResult = eval(changedStudentCode + "; sumResult;");
      expect(sumResult).toBe(22);
    });
  });
});

describe("prodResult", () => {
  test("prodResult", () => {
    return studentCode.then((code) => {
      const prodResult = eval(code + "; prodResult;");

      expect(prodResult).toBe(336);
    });
  });

  test("prodResult should be linked to foor and bar, changing foo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const foo = 10;"
      );
      const prodResult = eval(changedStudentCode + "; prodResult;");
      expect(prodResult).toBe(280);
    });
  });

  test("prodResult should be linked to foor and bar, changing bar should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const bar = 10;"
      );
      const prodResult = eval(changedStudentCode + "; prodResult;");
      expect(prodResult).toBe(120);
    });
  });
});

test("promo", () => {
  return studentCode.then((code) => {
    const promo = eval(code + "; promo;");
    const expected = {
      year: 2017,
      kind: "Sparta",
    };
    expect(promo).toEqual(expected);
  });
});

describe("promoYear", () => {
  test("promoYear should be linked to currentYear, changing currentYear should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          /(let|const)(\s*?)currentYear(\s*?)=(\s*?)([0-9]{4})(\s*?);/
        ),
        "const currentYear = 2000;"
      );
      const promo = eval(changedStudentCode + "; promo;");
      const expected = {
        year: 2000,
        kind: "Sparta",
      };
      expect(promo).toEqual(expected);
    });
  });

  test("promoYear", () => {
    return studentCode.then((code) => {
      const promoYear = eval(code + "; promoYear;");

      expect(promoYear).toEqual(2017);
    });
  });

  test("promoYear should be linked to promo, changing the year inside promo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) promoYear"),
        "promo.year = 2000; $&"
      );
      const promoChanged = eval(changedStudentCode + "; promoYear;");
      expect(promoChanged).toEqual(2000);
    });
  });
});

test("digits", () => {
  return studentCode.then((code) => {
    const digits = eval(code + "; digits;");

    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
