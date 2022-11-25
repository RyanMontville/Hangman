package com.ryanmontville.Hangman.model;

import java.util.ArrayList;
import java.util.List;

public class Word {
    private String wordToGuess;
    private List<Character> charatersOfCurrentWord;

    public Word() {
        String wordBank = "abruptly,absurd,avenue,awkward,bagpipes,bandwagon,banjo,beekeeper,blizzard,bookworm,boxcar,buckaroo,buffalo,buffoon,buzzard,buzzing,buzzwords,cobweb," +
                "crypt,cycle,dizzying,duplex,dwarves,embezzle,faking,fishhook,fixable,flapjack,flopping,fluffiness,flyby,frazzled,frizzled,funny,galaxy,gazebo,gizmo,glowworm," +
                "gossip,grogginess,haiku,haphazard,hyphen,icebox,injury,ivory,jackpot,jawbreaker,jaywalk,jazziest,jazzy,jelly,jigsaw,jockey,jogging,joking,joyful,juicy," +
                "jukebox,jumbo,kayak,kazoo,keyhole,kilobyte,kiwifruit,knapsack,lengths,lucky,luxury,matrix,megahertz,microwave,mystify,nightclub,nowadays,numbskull,oxidize," +
                "oxygen,pajama,peekaboo,pixel,pizazz,pumpkin,psyche,puppy,puzzling,quartz,quizzes,razzmatazz,rhubarb,rhythm,rickshaw,schnapps,scratch,snazzy,sphinx,squawk," +
                "strength,stretch,stronghold,subway,swivel,syndrome,thriftless,thumbscrew,transcript,transplant,twelfth,unknown,unworthy,uptown,vaporize,vixen,voodoo," +
                "vortex,walkway,wheezy,whizzing,witchcraft,wizard,wristwatch,xylophone,yachtsman,youthful,zigzag,zipper,zombie";
        String[] words = wordBank.split(",");
        int randomIndex = (int) (Math.random() * words.length);
        this.wordToGuess = words[randomIndex];
        this.charatersOfCurrentWord = new ArrayList<>();
        for (int i=0;i<this.wordToGuess.length();i++){
            this.charatersOfCurrentWord.add('_');
        }
    }

    public String getWordToGuess() { return this.wordToGuess; }

    public List<Character> getCharatersOfCurrentWord() { return charatersOfCurrentWord; }


}

