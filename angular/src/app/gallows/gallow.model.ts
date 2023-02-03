export class Gallows {
    private lineOne: string[];
    private lineTwo: string[];
    private lineThree: string[];
    private lineFour: string[];
    private lineFive: string[];
    private lineSix: string[];

    constructor(lineOne: string[],lineTwo: string[],lineThree: string[],lineFour: string[],lineFive: string[],lineSix: string[]) {
        this.lineOne = lineOne;
        this.lineTwo = lineTwo;
        this.lineThree = lineThree;
        this.lineFour = lineFour;
        this.lineFive = lineFive;
        this.lineSix = lineSix;
    }

    public setLineOne(line: string[]) {
        this.lineOne = line;
    }

    public setLineTwo(line: string[]) {
        this.lineTwo = line;
    }

    public setLineThree(line: string[]) {
        this.lineThree = line;
    }

    public setLineFour(line: string[]) {
        this.lineFour = line;
    }

    public setLineFive(line: string[]) {
        this.lineFive = line;
    }

    public setLineSix(line: string[]) {
        this.lineSix = line;
    }

    public getLineOne() {
        return this.lineOne;
    }

    public getLineTwo() {
        return this.lineTwo;
    }

    public getLineThree() {
        return this.lineThree;
    }

    public getLineFour() {
        return this.lineFour;
    }

    public getLineFive() {
        return this.lineFive;
    }

    public getLineSix() {
        return this.lineSix;
    }

    public setGallows(gallows: Gallows) {
        this.lineOne = gallows.lineOne;
        this.lineTwo = gallows.lineTwo;
        this.lineThree = gallows.lineThree;
        this.lineFour = gallows.lineFour;
        this.lineFive = gallows.lineFive;
        this.lineSix = gallows.lineSix;
    }

}