import { wordsGerman } from './words-german';

export default class WordsServiceGerman {

    getWords() {
        return new Promise((resolve) => {
            resolve(wordsGerman);
        })
    }
}