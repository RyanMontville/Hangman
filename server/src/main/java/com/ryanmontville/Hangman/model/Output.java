package com.ryanmontville.Hangman.model;

import java.util.List;

public class Output {

    private String letters;
    private String wrongGuesses;
    private String message;
    private boolean isGameOver;

    public String getLetters() { return letters; }

    public void setLetters(String letters) { this.letters = letters; }

    public String getWrongGuesses() { return wrongGuesses; }

    public void setWrongGuesses(String wrongGuesses) { this.wrongGuesses = wrongGuesses; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }

    public boolean isGameOver() { return this.isGameOver; }

    public void setGameOver(boolean gameOver) { this.isGameOver = gameOver; }
}
