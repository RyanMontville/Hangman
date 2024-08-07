import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Gallows } from './gallows.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallows.component.html',
  styleUrl: './gallows.component.css'
})
export class GallowsComponent implements OnInit {
  gallows: Gallows = new Gallows([],[],[],[],[],[]);
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
    this.gameService.gallowsUpdated.subscribe(gallows => {
      this.gallows = gallows;
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
