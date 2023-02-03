import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Gallows } from "./gallows/gallow.model";

@Injectable()
export class GameService {
    private wordToGuess: string = '';
    wordUpdated = new Subject<string>();
    private wrongGuesses: string[] = [];
    wrongGuessesUpdated = new Subject<string[]>();
    rightGuesses: string[] = [];
    private lettersToGuess: string[] = [];
    lettersUpdated = new Subject<string[]>();
    private guessesLeft = 6;
    gameOverStatus = new BehaviorSubject<boolean>(false);
    lettersLeftToGuess = new BehaviorSubject<number>(0);
    private gallows: Gallows = new Gallows(
        ["╔","═","═","═","╗"],
        ["║","W","W","║"],
        ["║","W","W"],
        ["║","W","w"],
        ["║","W","W"],
        ["╩","═","═","═","═","═"]
        );
    public gallowsUpdated = new BehaviorSubject<Gallows>(this.gallows);


    //word banks
    private animals: string[] = ["APE","BEAR","CHICKEN","DOG","ELEPHANT","FROG","GRASSHOPPER","HAMSTER","IGUANA","JELLYFISH","KOALA","LEOPARD","MEERKAT","NEWT","OYSTER","PEACOCK","QUAIL","RHINOCEROS","SPHYNX","TIGER","UNICORN","VULTURE","WOLF","YAK","ZEBRA"];
    private food: string[] = ["AVOCADO","BURRITO","CUPCAKE","DONUT","EGGPLANT","FAJITA","GRAPES","HAMBURGER","JALAPENO","KALE","LASAGNA","MEATBALLS","NACHOS","OMELET","PANCAKES","QUESADILLA","RASPBERRIES","SPAGHETTI","TOFU","WAFFLES","YOGURT","ZUCCHINI"];
    private dinos: string[] = ["VELOCIRAPTOR","TYRANNOSAURUS","TRICERATOP","STEGOSAURUS","PTERODACTYL","DILOPHOSAURUS","CARNOTAURUS","MASTODON"];
    private states: string[] = ["ALASKA","ALABAMA","ARIZONA","ARKANSAS","CALIFORNIA","COLORADO","CONNECTICUT","DELAWARE","FLORIDA","GEORGIA","HAWAII","IDAHO","ILLNOIS","INDIANA","IOWA","KANSAS","KENTUCKY","LOUISIANA","MAINE","MARYLAND","MASSACHUSETTS","MICHIGAN","MINNESOTA","MISSISSIPPI","MISSOURI","MONTANA","NEBRASKA","NEVADA","OHIO","OKLAHOMA","OREGON","PENNSYLVANIA","TENNESSEE","TEXAS","UTAH","VERMONT","WASHINGTON","WISCONSIN","WYOMING"];

    constructor(private http: HttpClient) { }

    resetGallows() {
        this.gallows.setLineOne(["╔","═","═","═","╗"]);
        this.gallows.setLineTwo(["║","W","W","║"]);
        this.gallows.setLineThree(["║","W","W"]);
        this.gallows.setLineFour(["║","W","w"]);
        this.gallows.setLineFive(["║","W","W"]);
        this.gallows.setLineSix(["╩","═","═","═","═","═"]);
        this.gallowsUpdated.next(this.gallows);
    }

    addToGallows(numWrong: number) {
        if(numWrong === 1){
            this.gallows.setLineThree(["║","W","W","O"]);
            this.gallowsUpdated.next(this.gallows);
        } else if(numWrong === 2) {
            this.gallows.setLineFour(["║","W","w","/"],);
            this.gallowsUpdated.next(this.gallows);
        } else if(numWrong === 3) {
            this.gallows.setLineFour(["║","W","w","/","|"],);
            this.gallowsUpdated.next(this.gallows);
        } else if(numWrong === 4) {
            this.gallows.setLineFour(["║","W","w","/","|","\\"],);
            this.gallowsUpdated.next(this.gallows);
        } else if(numWrong === 5) {
            this.gallows.setLineFive(["║","W","W","/"])
        } else if(numWrong === 6) {
            this.gallows.setLineFive(["║","W","W","/","\\"])
        }
    }

    setWord(wordToSet: string) {
        this.wordToGuess = wordToSet;
            this.lettersToGuess = [];
            for (let i = 0; i < wordToSet.length; i++) {
                this.lettersToGuess.push('_');
            }
            this.wordUpdated.next(this.wordToGuess);
            this.lettersUpdated.next(this.lettersToGuess);

            this.lettersLeftToGuess.next(this.wordToGuess.length);
    }

    getAnyWord() {
        this.http.get<string>('https://random-word-api.herokuapp.com/word').subscribe(word => {
            this.setWord(word[0]);
        })
    }

    getWordWithLengthN(num: number) {
        this.http.get<string>(`https://random-word-api.herokuapp.com/word?length=${num}`).subscribe(word => {
            this.setWord(word[0]);
        })
    }

    getWordByCategory(category: string) {
        if(category==='animal'){
            let num = Math.floor(Math.random() * 26);
            this.setWord(this.animals[num]);
        }
        if(category==='food'){
            let num = Math.floor(Math.random() * 23);
            this.setWord(this.food[num]);
        }
        if(category==='dinos'){
            let num = Math.floor(Math.random() * 9);
            this.setWord(this.dinos[num]);
        }
        if(category==='states'){
            let num = Math.floor(Math.random() * 40);
            this.setWord(this.states[num]);
        }
        return;
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
                this.addToGallows(this.wrongGuesses.length);
            } else if (this.guessesLeft === 1) {
                this.wrongGuesses.push(letter);
                this.wrongGuessesUpdated.next(this.wrongGuesses);
                this.guessesLeft--;
                this.addToGallows(this.wrongGuesses.length);
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
        this.guessesLeft = 6;
        this.resetGallows();
    }
}