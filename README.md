# Hangman
While thinking about what side projects I wanted to create, I wanted to start coding something even though I couldn't think of anything. Hangman was one of the recommended programs to try working on when we first started discussing side projects at Tech Elevator. I first wrote the program as a Java CLI, then I added an API in preparation of building a front end for the app. I am using Angular for the front end. After exploring the available options for deploying Java and APIs, I decided to rewrite the game within the Angular app using Typescript, so I am no longer using the Java back end. You can still view the code for the api in the server folder.

When a new game is started, a work is picked at random from the word bank, converts the word into an array list of underscores to represent each letter in the word and prints out an ascii gallows. The ascii output is stored in 7 arrays, one for each line of the ascii gallows. It asks the user to guess a letter. If the guess isn't in the word, it adds the guess to a list of wrong guesses and adds a body part to the proper gallows array and prints the gallows again. If the guess is correct, it replaces every underscore in the list were that letter should be. When a game ends, a reset method is called which resets the gallows, clears the list of underscores, picks a new word and random and starts the game over. 

## V 1.0 - Initial upload, Working command line code
I started coding this over a weekend before creating my GitHub, so I had a working command line program with no commit history to show any of my progress while working on it. This is everything I have coded so far. 


One improvement I would like to implement for the next version is possibly adding a difficulty level which would choose a word from a certain word bank depending on the users choice. Another thing I would like to implement is a web interface so I could show off a working demo of the code for anyone interested without them having to download/run the code in a command line. 

## V 1.0 - Initial upload, Working command line code
While thinking about what side projects I wanted to create, I wanted to start coding something even though I couldn't think of anything. Hangman was one of the recommended programs to try working on when we first started discussing side projects at Tech Elevator. I started coding this over a weekend before creating my GitHub, so I had a working command line program with no commit history to show any of my progress while working on it. This is everything I have coded so far. 

The program picks a word at random from a word bank array, creates a list of underscores (one for each letter in the word), then displays a ascii gallows. The ascii output is stored in 7 arrays, one for each line of the ascii gallows. It asks the user to guess a letter. If the guess isn't in the word, it adds the guess to a list of wrong guesses and adds a body part to the proper gallows array and prints the gallows again. If the guess is correct, it replaces every underscore in the list were that letter should be. The game runs within a while loop, so that the user can play as many times as they want without having to restart the program. When a game ends, a reset method is called which resets the gallows, clears the list of underscores, picks a new word and random and starts the game over.

One improvement I would like to implement for the next version is possibly adding a difficulty level which would choose a word from a certain word bank depending on the users choice. Another thing I would like to implement is a web interface so I could show off a working demo of the code for anyone interested without them having to download/run the code in a command line. 

## V 1.0 - Initial upload, Working command line code
While thinking about what side projects I wanted to create, I wanted to start coding something even though I couldn't think of anything. Hangman was one of the recommended programs to try working on when we first started discussing side projects at Tech Elevator. I started coding this over a weekend before creating my GitHub, so I had a working command line program with no commit history to show any of my progress while working on it. This is everything I have coded so far. 

The program picks a word at random from a word bank array, creates a list of underscores (one for each letter in the word), then displays a ascii gallows. The ascii output is stored in 7 arrays, one for each line of the ascii gallows. It asks the user to guess a letter. If the guess isn't in the word, it adds the guess to a list of wrong guesses and adds a body part to the proper gallows array and prints the gallows again. If the guess is correct, it replaces every underscore in the list were that letter should be. The game runs within a while loop, so that the user can play as many times as they want without having to restart the program. When a game ends, a reset method is called which resets the gallows, clears the list of underscores, picks a new word and random and starts the game over.

One improvement I would like to implement for the next version is possibly adding a difficulty level which would choose a word from a certain word bank depending on the users choice. Another thing I would like to implement is a web interface so I could show off a working demo of the code for anyone interested without them having to download/run the code in a command line. 

## V 1.2 - API
-I have created an API to as the first step to making the game playable in a browser.

## V 2.0 - Angular
-I created a web app for the game using Angular. Since it costs extra money to deploy Java and APIs, I rewrote the game logic in Typescript to it can run within the angular app. I am using a random word API for the word to guess, but I also have a few categories of word banks stored within the app for easier words.
<br>-I still need to deploy the app.
<br>-I still need to work on making the app responsive and playable on mobile devices.
 
