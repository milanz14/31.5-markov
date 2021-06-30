/** Textual markov chain generator */

class MarkovMachine {
    /** build markov machine; read in text.*/

    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter((c) => c !== "");
        this.makeChains();
        this.makeText();
    }

    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

    makeChains() {
        let wordObject = {};
        // for each word in the phrase
        // check the word after it
        // if words[word] does not exist, add it to the
        // words object and set the value as the word after
        for (let i = 0; i < this.words.length - 1; i++) {
            let firstWord = this.words[i].toLowerCase();
            let secondWord = this.words[i + 1].toLowerCase();
            if (!wordObject[firstWord]) {
                wordObject[firstWord] = new Array(secondWord);
            } else {
                wordObject[firstWord].push(secondWord);
            }
        }
        let lastWord = this.words[this.words.length];
        if (lastWord in wordObject) {
            wordObject[lastWord].push(null);
        } else {
            wordObject[lastWord] = new Array(null);
        }
    }

    /** return random text from chains */

    makeText(numWords = 100) {
        let phrase = this.words[0];
        for (let i = 0; i < this.words.length; i++) {
            let word = this.words[i];
            const idx = Math.floor(
                Math.random() * this.wordObject[word].length
            );

            let newWord = this.wordObject[word][idx];

            if (newWord !== null && numWords > 0) {
                phrase += `${newWord}`;
            } else {
                return phrase;
            }
            numWords--;
        }
        return phrase;
    }
}

module.exports = { MarkovMachine };
