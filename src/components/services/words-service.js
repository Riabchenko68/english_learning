import { words } from './words';

export default class WordsService {

    getWords() {
        return new Promise((resolve) => {
            resolve(words);
        })
    }
}