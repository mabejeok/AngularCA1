export interface Card{
    value: number;
    colour: string;
    imageUrl: string;
}

export class UnoDeck {
 
    private static COLOURS: string[]= ["red", "yellow", "green", "blue"]

    private static VALUES: number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20]

    private cards: Card[] = [];

    private toDigit(n: number): string {
        if (n<10)
            return (`0${n}`);
        return(`${n}`);
    }
    constructor(){
        for (let t=0; t<2; t++){
            for (let ci in UnoDeck.COLOURS){
                for(let vi = 0; vi<UnoDeck.VALUES.length; vi++){
                    let id: string = this.toDigit(vi+1);
                    let c:Card = {
                        value:UnoDeck.VALUES[vi],
                        colour:UnoDeck.COLOURS[ci],
                        imageUrl: `/assets/uno_deck/uno_deck/c${ci}_${id}.png`
                    }
                    this.cards.push(c);
                }
            }
        }

        for (let ci in UnoDeck.COLOURS){
                let id: string = this.toDigit(0);
                let c:Card = {
                    value:0,
                    colour:UnoDeck.COLOURS[ci],
                    imageUrl: `/assets/uno_deck/uno_deck/c${ci}_${id}.png`
                }
                this.cards.push(c);
            }

        let i:number;
        for(i=0; i<4; i++)
            {
                let c:Card={
                    value:50,
                    colour:"Wild",
                    imageUrl:`/assets/uno_deck/uno_deck/c4_00.png`
                }
                this.cards.push(c);

                let c2:Card={
                    value:50,
                    colour:"plusFour",
                    imageUrl:`/assets/uno_deck/uno_deck/c4_01.png`
                }
                this.cards.push(c2);
            }
        

        for(let i=0; i<this.cards.length; i++)
            {
                let thisCard = this.cards[i];
                let randomCardNum = Math.round(Math.random()*(this.cards.length));
                this.cards[i]=this.cards[randomCardNum];
                this.cards[randomCardNum]=thisCard;
            }
    }
    take():Card{
        return(<Card>this.cards.pop());
    }
}