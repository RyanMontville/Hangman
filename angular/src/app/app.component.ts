import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hangman-app';

  constructor(private gameService: GameService) {}

  startNewGame() {
    this.gameService.startNewGame();
  }
}
