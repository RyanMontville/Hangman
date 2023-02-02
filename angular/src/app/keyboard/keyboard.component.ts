import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  rowOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  rowTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  rowThree = ["Z", "X", "C", "V", "B", "N", "M"];
  keyboard = [this.rowOne, this.rowTwo, this.rowThree];
  wrongGuesses: string[] = [];
  gameOver = false;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.gameOverStatus.subscribe(gameOver => {
      this.gameOver = gameOver;
    });
    this.gameService.wrongGuessesUpdated.subscribe((wrongGuesses: string[]) => {
      this.wrongGuesses = wrongGuesses;
    })
  }

  keyClick(letter: string) {
    this.gameService.addLetterToWrongGuesses(letter);
  }

  checkIfGuessed(letter: string) {
    if(this.wrongGuesses.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

}
