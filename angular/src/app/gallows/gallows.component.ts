import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gallows',
  templateUrl: './gallows.component.html',
  styleUrls: ['./gallows.component.css']
})
export class GallowsComponent implements OnInit {
gallows = ["+---+","|   |","|   ","|  ","|  ","|    ","======"];
lettersToGuess = ["_","_","_","_","_","_","_",];
wrongGuesses: string[] = [];

constructor(private gameService: GameService) {}

ngOnInit() {
  this.gameService.wrongGuessesUpdated.subscribe((wrongGuesses: string[]) => {
    this.wrongGuesses = wrongGuesses;
  })
}

}
