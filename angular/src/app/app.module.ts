import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GallowsComponent } from './gallows/gallows.component';
import { GameService } from './game.service';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { WordService } from './word.service';

@NgModule({
  declarations: [
    AppComponent,
    GallowsComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameService, WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
