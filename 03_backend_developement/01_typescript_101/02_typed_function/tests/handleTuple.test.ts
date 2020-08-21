// @ts-nocheck
import { handleTuple } from "../src/index";

describe("handleTuple", () => {
  describe("should only accept tuples as props and", () => {
    it("shouldn't output console.log for any other types of arguments", () => {
      console.log = jest.fn();
      handleTuple([[], {}]);
      handleTuple([true, () => {}]);
      expect(console.log).not.toHaveBeenCalled();
    });
  });

  describe("should output", () => {
    test("two console.log", () => {
      console.log = jest.fn();
      handleTuple(["foo", 1]);
      expect(console.log).toHaveBeenCalledTimes(2);
    });

    test("the value of the first item at the start of the string", () => {
      console.log = jest.fn();
      handleTuple(["foo", 1]);
      expect(console.log.mock.calls[0][0]).toEqual(
        expect.stringMatching(/^foo(.*?)/)
      );
    });

    test("the value of the second item at the start of the string", () => {
      console.log = jest.fn();
      handleTuple(["foo", 1]);
      expect(console.log.mock.calls[1][0]).toEqual(
        expect.stringMatching(/^1(.*?)/)
      );
    });
  });
});
