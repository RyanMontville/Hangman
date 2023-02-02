import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gallows',
  templateUrl: './gallows.component.html',
  styleUrls: ['./gallows.component.css']
})
export class GallowsComponent implements OnInit {
gallows = ["+---+","|   |","|   ","|  ","|  ","|    ","======"];
lettersToGuess: string[] = [];
wrongGuesses: string[] = [];

constructor(private gameService: GameService) {}

ngOnInit() {
  this.gameService.lettersUpdated.subscribe((letters: string[]) => {
    this.lettersToGuess = letters;
  });
  this.gameService.wrongGuessesUpdated.subscribe((wrongGuesses: string[]) => {
    this.wrongGuesses = wrongGuesses;
  });
  
}

}
