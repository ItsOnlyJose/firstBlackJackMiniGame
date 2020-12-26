const player = document.querySelector('.player');
const playerHand = player.querySelectorAll('.card');

// console.log(playerHand.length);
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