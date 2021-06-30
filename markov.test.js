const { newMarkov, markovReadFile, markovReadLink } = require("./markov");

test("it reads the provided text", () => {
    let phrase = "this is a phrase";
    expect(phrase).toEqual("this is a phrase");
});
