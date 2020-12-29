const player = document.querySelector('.player');
const playerHand = player.querySelectorAll('.card');

const dealer = document.querySelector('.dealer');
const dealerHand = dealer.querySelectorAll('.card');

const cards = document.querySelectorAll('.card');



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
    clearCards();
}

function clearCards() {
    // var cards = document.getElementsByClassName('.card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].parentNode.removeChild(cards[i]);
    }

    // while (elements.length > 0) {
    //     console.log(elements[0])//.parentNode.removeChild(elements[0]);
    // }
}