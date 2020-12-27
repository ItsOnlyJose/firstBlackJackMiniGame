const player = document.querySelector('.player');
const playerHand = player.querySelectorAll('.card');

const dealer = document.querySelector('.dealer');
const dealerHand = dealer.querySelectorAll('.card');




function playerHandValue() {
    let count = 0;
    for (let i = 0; i < playerHand.length; i++) {
        let cardValue = Number(playerHand[i].innerHTML);
        // console.log(i, cardValue);
        count = cardValue + count;
        // console.log(count);
    }
    return count;
}

function dealerHandValue() {
    let count = 0;
    for (let i = 0; i < dealerHand.length; i++) {
        let cardValue = Number(dealerHand[i].innerHTML);
        // console.log(i, cardValue);
        count = cardValue + count;
        // console.log(count);
    }
    return count;
}

function stand() {
    if (playerHandValue() > dealerHandValue() && playerHandValue() <= 21) {
        alert('You Win!');
    } else {
        alert('You Lose!');
    }
}

function removeCards() {
    // var cards = document.getElementsByClassName('.card');
    // while (cards.length > 0) {
    //     cards[0].parentNode.removeChild(cards[0]);
    // }

    var elements = document.querySelectorAll('.card');
    console.log(elements.length);
    // while (elements.length > 0) {
    //     console.log(elements[0])//.parentNode.removeChild(elements[0]);
    // }
}