package com.ryanmontville.Hangman.model;

import java.util.ArrayList;
import java.util.List;

public class Game {

    private Word word;
    private String wordToGuess;
    private List<Character> letters;
    private List<Character> wrongGuesses;
    private int wrongGuessCount;
    private boolean isGameOver;
    private String[] gallows = new String[]{"+---+","|   |","|   ","|  ","|  ","|    ","======"};

    public Game(){
        this.word = new Word();
        this.wordToGuess = this.word.getWordToGuess();
        this.letters = this.word.getCharatersOfCurrentWord();
        wrongGuesses = new ArrayList<>();
        this.wrongGuessCount = 7;
    }

    public String getWordToGuess() { return this.wordToGuess; }

    public int getWrongGuessCount() { return this.wrongGuessCount; }

    public boolean isGameOver() { return this.isGameOver; }

    public String  getLetters() {
        String wordAsLetters = "";
        for(Character character : this.letters) {
            wordAsLetters += character;
        }
        return wordAsLetters;
    }

    public String  getWrongGuesses(){
        String wrongLetters = "";
        if(this.wrongGuesses!=null) {
            for(Character character : this.wrongGuesses){
                wrongLetters = wrongLetters + character + " ";
            }
        }
        return wrongLetters;
    }

    public boolean guessALetter(Character guess) {
        boolean isCorrect = false;
        for(int i=0;i<this.wordToGuess.length();i++) {
            if(Character.toLowerCase(guess) == this.wordToGuess.charAt(i)){
                this.letters.set(i,guess);
                isCorrect = true;
            }
        }
        if(isCorrect) {
            if(!letters.contains('_')){
                isGameOver = true;
            }
        }
        if(!isCorrect){
            this.wrongGuesses.add(guess);
            this.wrongGuessCount--;
            addBodyPart(this.wrongGuessCount);
        }
        if(this.wrongGuessCount==0){
            this.isGameOver = true;
        }
        return isCorrect;
    }

    private void addBodyPart(int wrongGuesses) {
        char right = '\\';
        switch (wrongGuesses){
            case 6: gallows[2] += "0 "; break;
            case 5: gallows[3] += "/"; break;
            case 4: gallows[3] += "|"; break;
            case 3: gallows[3] += right; break;
            case 2: gallows[4] += "/"; break;
            default: gallows[4] = gallows[4] + " " + right;
        }
    }

    public String[] getGallows() { return this.gallows; }
}
