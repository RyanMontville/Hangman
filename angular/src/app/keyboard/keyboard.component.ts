import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css', '../app.component.css']
})
export class KeyboardComponent implements OnInit {
  rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  rowThree = ["Z", "X", "C", "V", "B", "N", "M"];
  keyboard = [this.rowOne, this.rowTwo, this.rowThree];
  keyboardMobile = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  wrongGuesses: string[] = [];
  letterLeft = 0;
  gameOver = false;
  wordToGuess: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.gameOverStatus.subscribe(gameOver => {
      this.gameOver = gameOver;
    });
    this.gameService.wrongGuessesUpdated.subscribe((wrongGuesses: string[]) => {
      this.wrongGuesses = wrongGuesses;
    });
    this.gameService.lettersLeftToGuess.subscribe(letterLeft => {
      this.letterLeft = letterLeft;
    });
    this.gameService.wordUpdated.subscribe((word: string) => {
      this.wordToGuess = word;
    })
  }

  keyClick(letter: string) {
    this.gameService.nextGuess(letter);
  }

  checkIfGuessed(letter: string) {
    if(this.wrongGuesses.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

}
