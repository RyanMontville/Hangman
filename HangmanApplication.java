import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class HangmanApplication {
    private static int numberOfWrongGuesses;
    private static String[] gallows = new String[7];
    private static String[] gallowsReset = new String[]{"+---+","|   |","|   ","|  ","|  ","|    ","====="};
    private static String[] bodyParts = new String[]{"0 ","/","|","\\","/"," \\"};
    private static String wordToGuess;
    private static List<Character> wrongLetters = new ArrayList<>();
    private static List<Character> charatersOfCurrentWord = new ArrayList<>();
    private static char guess;
    private static boolean keepPlaying = true;

    public static void main(String[] args) {
        System.out.println("Welcome to Hangman!");
        resetGame();
        while (keepPlaying) {
            printGallows();
            if (numberOfWrongGuesses != 5) {
                printWordToGuess();
                printWrongGuesses();
                if (charatersOfCurrentWord.contains('_')) {
                    guessALetter();
                } else {
                    gameOverWin();
                }
            } else {
                gameOverLose();
            }
        }
    }

    public static void printGallows() {
        System.out.println("");
        for (int i=0;i<gallows.length;i++) {
            System.out.println(gallows[i]);
        }
    }

    public static void printWordToGuess() {
        System.out.println("Your word to guess:");
        //System.out.println("testing: " + wordToGuess);
        for (Character letter : charatersOfCurrentWord) {
            System.out.print(letter + " ");
        }
        System.out.println("");
    }

    public static void printWrongGuesses() {
        if (numberOfWrongGuesses > -1) {
            System.out.print("Wrong letters:" );
            for (Character letter : wrongLetters) {
                System.out.print(letter + " ");
            }
            System.out.println(" ");
        }
    }

    public static void guessALetter() {
        boolean containsUnderscore = false;
        System.out.print("Guess a letter: ");
        Scanner in = new Scanner(System.in);
        guess = in.next().charAt(0);
        int correctLetterCount = 0;
        for (int i=0;i<wordToGuess.length();i++){
            if (Character.toLowerCase(guess) == Character.toLowerCase(wordToGuess.charAt(i))) {
                charatersOfCurrentWord.set(i,guess);
                correctLetterCount++;
            }
        }
        if (correctLetterCount==0) {
            wrongLetters.add(guess);
            numberOfWrongGuesses++;
            addBodyPart(numberOfWrongGuesses);
        }
    }

    public static void addBodyPart(int wrongGuesses) {
        if (wrongGuesses == 0) {
            gallows[2] += bodyParts[wrongGuesses]; //adds the head
        } else if (wrongGuesses > 0 && wrongGuesses < 4) {
            gallows[3] += bodyParts[wrongGuesses]; //adds the right arm, then torso, then left arm
        } else if (wrongGuesses > 3) {
            gallows[4] += bodyParts[wrongGuesses]; //adds the right leg, then left leg
        }
    }

    public static void gameOverWin() {
        System.out.println("");
        System.out.println("congratulations! You Win!");
        System.out.print("Would you like to play again? (Y / N): ");
        Scanner in = new Scanner(System.in);
        String response = in.nextLine();
        if (response.charAt(0)=='Y' || response.charAt(0)=='y'){
            //reset code
            resetGame();

        } else if (response.charAt(0)=='N' || response.charAt(0)=='n') {
            System.out.println("Goodbye");
            keepPlaying = false;
        } else {
            System.out.println("Invalid response, interpreting as no. Goodbye");
            keepPlaying = false;
        }
    }

    public static void gameOverLose() {
        System.out.println("");
        System.out.println("GAME OVER. The word was " + wordToGuess);
        System.out.print("Would you like to play again? (Y / N): ");
        Scanner in = new Scanner(System.in);
        String response = in.nextLine();
        if (response.charAt(0)=='Y' || response.charAt(0)=='y'){
            //reset code
            resetGame();

        } else if (response.charAt(0)=='N' || response.charAt(0)=='n') {
            System.out.println("Goodbye");
            keepPlaying = false;
        } else {
            System.out.println("Invalid response, interpreting as no. Goodbye");
            keepPlaying = false;
        }
    }

    public static void resetGame() {
        numberOfWrongGuesses = -1;
        wrongLetters.removeAll(wrongLetters);
        charatersOfCurrentWord.removeAll(charatersOfCurrentWord);
        getNewWord();
        for (int i=0;i<gallows.length;i++){
            gallows[i] = gallowsReset[i];
        }
    }

    public static void getNewWord() {
        String wordBank = "abruptly,absurd,avenue,awkward,bagpipes,bandwagon,banjo,beekeeper,blizzard,bookworm,boxcar,buckaroo,buffalo,buffoon,buzzard,buzzing,buzzwords,cobweb," +
                "crypt,cycle,dizzying,duplex,dwarves,embezzle,faking,fishhook,fixable,flapjack,flopping,fluffiness,flyby,frazzled,frizzled,funny,galaxy,gazebo,gizmo,glowworm," +
                "gossip,grogginess,haiku,haphazard,hyphen,icebox,injury,ivory,jackpot,jawbreaker,jaywalk,jazziest,jazzy,jelly,jigsaw,jockey,jogging,joking,joyful,juicy," +
                "jukebox,jumbo,kayak,kazoo,keyhole,kilobyte,kiwifruit,knapsack,lengths,lucky,luxury,matrix,megahertz,microwave,mystify,nightclub,nowadays,numbskull,oxidize," +
                "oxygen,pajama,peekaboo,pixel,pizazz,pumpkin,psyche,puppy,puzzling,quartz,quizzes,razzmatazz,rhubarb,rhythm,rickshaw,schnapps,scratch,snazzy,sphinx,squawk," +
                "strength,stretch,stronghold,subway,swivel,syndrome,thriftless,thumbscrew,transcript,transplant,twelfth,unknown,unworthy,uptown,vaporize,vixen,voodoo," +
                "vortex,walkway,wheezy,whizzing,witchcraft,wizard,wristwatch,xylophone,yachtsman,youthful,zigzag,zipper,zombie";
        String[] words = wordBank.split(",");
        int randomIndex = (int) (Math.random() * words.length);
        wordToGuess = words[randomIndex];
        for (int i=0;i<wordToGuess.length();i++) {
            charatersOfCurrentWord.add('_');
        }
    }
}
