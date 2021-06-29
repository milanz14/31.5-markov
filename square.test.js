const { sqrd } = require("./square");

describe("squaring of numbers", () => {
    test("square returns square", () => {
        let square = sqrd(5);
        expect(square).toEqual(25);
    });

    test("negative number squared is positive", () => {
        let square = sqrd(-3);
        expect(square).toEqual(9);
    });
});
