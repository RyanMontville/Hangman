import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { WordService } from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hangman-app';
  word = '';
  loading = false;
  gameOver = false;
  showMenu: boolean = false;

  constructor(private gameService: GameService, private wordService: WordService) {}

  ngOnInit() {
    this.gameService.wordUpdated.subscribe(word => {
      this.word = word;
    });
    this.gameService.gameOverStatus.subscribe(state => {
      this.gameOver = state;
    });
  }

  startNewGame() {
    this.showMenu = false;
    this.loading = false;
    this.gameService.startNewGame();
    this.word = '';
  }

  getWord() {
    this.loading = true;
    this.gameService.getAnyWord();
  }

  getWordLengthN(num: number) {
    this.loading = true;
    this.gameService.getWordWithLengthN(num);
  }

  getWordFromCategory(category: string) {
    this.loading = true;
    this.gameService.getWordByCategory(category);
  }
}
