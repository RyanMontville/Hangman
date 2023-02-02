import { BehaviorSubject, Subject } from "rxjs";

export class GameService {
    private wordToGuess: string = '';
    private wrongGuesses: string[] = [];
    wrongGuessesUpdated = new Subject<string[]>();
    private guessesLeft = 7;
    gameOverStatus = new BehaviorSubject<boolean>(false);

    getWordToGuess() {
        return this.wordToGuess;
    }

    setWordToGuess(word: string) {
        this.wordToGuess = word;
    }

    addLetterToWrongGuesses(letter: string) {
        if(this.guessesLeft > 1) {
            if(!this.wrongGuesses.includes(letter)){
                this.wrongGuesses.push(letter);
                this.guessesLeft--;
            }
            
        } else if (this.guessesLeft === 1) {
            if(!this.wrongGuesses.includes(letter)){
                this.wrongGuesses.push(letter);
                this.gameOverStatus.next(true);
            }
        }
        this.wrongGuessesUpdated.next(this.wrongGuesses.slice());
    }

    startNewGame() {
        this.gameOverStatus.next(false);
        this.wrongGuesses = [];
        this.wrongGuessesUpdated.next(this.wrongGuesses.slice());
        this.guessesLeft = 7;
    }
}