/*
 * Create a list that holds all of your cards
 */

let cards = Array.from(document.getElementsByClassName("card"));
console.log(cards);

    
// deck of all cards in game
const deck = document.querySelector('.deck');


// array for opened cards
let openedCards = [];

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");
	
/* 
 * Display the cards on the page */
 

 /*   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
*/
 // @description function to start play or when the game restart 
 // @description shuffles cards when page loads
document.body.onload = startGame();
function startGame(){
    // @shuffle deck
    cards = shuffle(cards)};
    // @remove all exisiting classes from each card
	 for (var i = 0; i < cards.length; i++){
            [].forEach.call(cards, function(item) {
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {
            deck.appendChild(item);
            
        });
        });
        cards[i].classList.remove("show", "open", "match", "unmatched");
    };
    
 

 // Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// @description toggles open and show class to display cards
let displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
	this.classList.toggle("selected");
 };

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
	let number = openedCards.length;
	number === 2 ? openedCards[0].innerHTML === openedCards[1].innerHTML? matched():unmatched():"";
	};
	// @description when cards match
function matched(){
    openedCards[0].classList.add( "selected", "match");
    openedCards[1].classList.add("selected", "match");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
   	openedCards = [];
	// @Game over,open modal 
	matchedCard.length===16?openModal():"";
}


	// @description when cards don't match
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
	openedCards[0].classList.remove("show", "open", "no-event", "selected");
    openedCards[1].classList.remove("show", "open", "no-event", "selected");
   // @disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        openedCards[1].classList.remove("show", "open", "no-event","unmatched");
      //  enable();
        openedCards = [];
    },300);
}


	// @loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   card = cards[i];
   card.addEventListener("click", displayCard);
   card.addEventListener("click", cardOpen);
   };
 
 // Modal function
 
function openModal(){
   // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
    modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}


