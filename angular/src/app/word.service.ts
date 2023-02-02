import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class WordService {
    private wordToGuess = '';
    wordUpdated = new Subject<string>();


    constructor(private http: HttpClient) {}

    getAnyWord() {
        this.http.get<string>('https://random-word-api.herokuapp.com/word').subscribe(word =>{
            this.wordToGuess = word;
            this.wordUpdated.next(word);
        })
    }

}