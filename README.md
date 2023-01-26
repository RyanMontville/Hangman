# Hangman
## V1.0 - Initial upload, Working comand line code
While thinking about what side projects I wanted to create, I wanted to start coding something even though I couldn't think of anything. Hangman was one of the recemonded programs to try working on when we first started discussing side projects at Tech Elevator. I started coding this over a weekend before creating my GitHub, so I had a working comand line program with no commit history to show any of my progress while working on it. This is everything I have coded so far. 

The program picks a word at random from a word bank array, creates a list of underscores (one for each letter in the word), then displays a ascii gallows. The ascii output is stored in 7 arrays, one for each line of the ascii gallows. It asks the user to guess a letter. If the guess isn't in the word, it adds the guess to a list of wrong guesses and adds a body part to the porper gallows array and prints the gallows again. If the guess is correct, it replaces every underscore in the list were that letter should be. The game runs within a while loop, so that the user can play as many times as they want without having to resart the program. When a game ends, a reset method is called which resets the gallows, clears the list of underscores, picks a new word and random and starts the game over.

One improvement I would like to implement for the next version is possibly adding a difficulty level which would choose a word from a certain wordbank depending on the users choice. Another thing I would like to implement is a web interface so I could show off a working demo of the code for anyone interested without them having to download/run the code in a comand line. 

## V1.2
-I have created an API to as the first step to making the game playable in a browser.
 
