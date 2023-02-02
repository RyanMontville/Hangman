import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gallows',
  templateUrl: './gallows.component.html',
  styleUrls: ['./gallows.component.css']
})
export class GallowsComponent implements OnInit {
lineOne = ["╔","═","═","═","╗"];
lineTwo = ["║","W","W","║"];
lineThree = ["║","W","W","O"];
lineFour = ["║","W","w","/","|","\\"];
lineFive = ["║","W","W","/","\\"];
lineSix = ["╩","═","═","═","═","═"]
gallows = [this.lineOne,this.lineTwo,this.lineThree,this.lineFour,this.lineFive,this.lineSix];
lettersToGuess: string[] = [];
wrongGuesses: string[] = [];
wordToGuess: string = '';

constructor(private gameService: GameService) {}

ngOnInit() {
  this.gameService.lettersUpdated.subscribe((letters: string[]) => {
    this.lettersToGuess = letters;
  });
  this.gameService.wrongGuessesUpdated.subscribe((wrongGuesses: string[]) => {
    this.wrongGuesses = wrongGuesses;
  });
  this.gameService.wordUpdated.subscribe(word => {
    this.wordToGuess = word;
  });
}

isW(letter: string) {
    if(letter.toUpperCase() === 'W') {
      return 'white';
    } else {
      return '';
    }
}

}
