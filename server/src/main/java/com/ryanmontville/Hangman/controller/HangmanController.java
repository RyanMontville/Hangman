package com.ryanmontville.Hangman.controller;

import com.ryanmontville.Hangman.model.Game;
import com.ryanmontville.Hangman.model.Output;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class HangmanController {
    Game game;

    @RequestMapping(path = "/startGame",method = RequestMethod.GET)
    public Output startGame() {
        game = new Game();
        Output output = new Output();
        output.setMessage("A new game has started");
        output.setLetters(game.getLetters());
        output.setWrongGuesses(game.getWrongGuesses());
        output.setGameOver(false);
        return output;
    }

    @RequestMapping(path = "/getNewWord", method = RequestMethod.GET)
    public String getNewWord() {
        return game.getWordToGuess();
    }

    @RequestMapping(path = "/getLetters", method = RequestMethod.GET)
    public String  getLetters(){
        return game.getLetters();
    }

    @RequestMapping(path = "/getGallows", method = RequestMethod.GET)
    public String[] getGallows(){
        return game.getGallows();
    }

    @RequestMapping(path = "/guessALetter/{guess}", method = RequestMethod.GET)
    public Output guessALetter(@PathVariable char guess) {
        Output output = new Output();
        if(game.getWrongGuessCount()!=1){
            boolean isCorrect = game.guessALetter(guess);
            if(isCorrect && game.isGameOver()){
                output.setMessage("You Win!");
            } else if (isCorrect){
                output.setMessage("The word contains " + guess);
            } else {
                output.setMessage("The word does not contain " + guess +". " + game.getWrongGuessCount() + " guesses left.");
            }
        } else {
            output.setMessage("Game Over. The word was " + game.getWordToGuess());
        }
        output.setLetters(game.getLetters());
        output.setWrongGuesses(game.getWrongGuesses());
        output.setGameOver(game.isGameOver());
        return output;
    }
}
