import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class GameService {
    private wordToGuess: string = '';
    wordUpdated = new Subject<string>();

    private wrongGuesses: string[] = [];
    wrongGuessesUpdated = new Subject<string[]>();

    rightGuesses: string[] = [];

    private lettersToGuess: string[] = [];
    lettersUpdated = new Subject<string[]>();

    private guessesLeft = 7;
    gameOverStatus = new BehaviorSubject<boolean>(false);

    lettersLeftToGuess = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient) { }

    getAnyWord() {
        this.http.get<string>('https://random-word-api.herokuapp.com/word').subscribe(word => {
            this.wordToGuess = word[0];
            this.lettersToGuess = [];
            for (let i = 0; i < word[0].length; i++) {
                this.lettersToGuess.push('_');
            }
            this.wordUpdated.next(this.wordToGuess);
            this.lettersUpdated.next(this.lettersToGuess);

            this.lettersLeftToGuess.next(this.wordToGuess.length);
        })
    }

    getWordWithLengthN(num: number) {
        this.http.get<string>(`https://random-word-api.herokuapp.com/word?length=${num}`).subscribe(word => {
            this.wordToGuess = word[0];
            this.wordUpdated.next(this.wordToGuess);
            this.lettersToGuess = [];
            for (let i = 0; i < word[0].length; i++) {
                this.lettersToGuess.push('_');
            }
            this.lettersUpdated.next(this.lettersToGuess.slice());
            this.lettersLeftToGuess.next(this.wordToGuess.length);
        })
    }

    nextGuess(letter: string) {
        let isCorrect = false;
        for (let i = 0; i < this.wordToGuess.length; i++) {
            if (letter.charAt(0) === this.wordToGuess.charAt(i).toUpperCase()) {
                this.lettersToGuess[i] = letter;
                this.lettersLeftToGuess.next(this.lettersLeftToGuess.getValue() - 1);
                this.lettersUpdated.next(this.lettersToGuess);
                isCorrect = true;
            }
        }
        if (this.lettersLeftToGuess.getValue() === 0 || !this.lettersToGuess.includes('_')) {
            this.gameOverStatus.next(true);
        }
        if (!isCorrect) {
            if (this.guessesLeft > 1) {
                this.wrongGuesses.push(letter);
                this.wrongGuessesUpdated.next(this.wrongGuesses);
                this.guessesLeft--;
            } else if (this.guessesLeft === 1) {
                this.wrongGuesses.push(letter);
                this.wrongGuessesUpdated.next(this.wrongGuesses);
                this.guessesLeft--;
                this.gameOverStatus.next(true);
            }
        }
    }

    addLetterToWrongGuesses(letter: string) {
        if (this.guessesLeft > 1) {
            if (!this.wrongGuesses.includes(letter)) {
                this.wrongGuesses.push(letter);
                this.guessesLeft--;
            }

        } else if (this.guessesLeft === 1) {
            if (!this.wrongGuesses.includes(letter)) {
                this.wrongGuesses.push(letter);
                this.gameOverStatus.next(true);
            }
        }
        this.wrongGuessesUpdated.next(this.wrongGuesses.slice());
    }

    startNewGame() {
        this.gameOverStatus.next(false);
        this.wordToGuess = '';
        this.wordUpdated.next(this.wordToGuess);
        this.wrongGuesses = [];
        this.wrongGuessesUpdated.next(this.wrongGuesses.slice());
        this.guessesLeft = 7;
    }
}