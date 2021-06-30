/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");
const path = process.argv[2];
const whatToRead = process.argv[3];

const newMarkov = (text) => {
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
};

const markovReadFile = (path) => {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log("There was an error", err);
            process.exit(1);
        }
        newMarkov(data);
    });
};

const markovReadLink = async (URL) => {
    try {
        let res = await axios.get(URL);
        console.log(res.data);
    } catch (e) {
        console.log(e, "Something went wrong, does this page exist?");
        process.exit(1);
    }
    newMarkov(res.data);
};

if (path.slice(0, 4) === "http") {
    markovReadLink(path);
} else {
    markovReadFile(path);
}

module.exports = {
    newMarkov,
    markovReadFile,
    markovReadLink,
};
