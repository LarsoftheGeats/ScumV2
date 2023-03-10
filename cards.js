const SUITS = ["H","D","S","C"]
const VALUES = [ "A",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "J",
                "Q",
                "K"]

export default class Deck{
    constructor ( cards = freshDeck() )
    {
        this.cards=cards
    }

    shuffle()
}

class Card{
    constructor (suit, value){
        this.suit=suit
        this.value=value
    }
}

function freshDeck() {
    return SUITS.flatMap( suit => {
        return VALUES.map(value => {
           return new Card(suit, value) 
        })
    })
}