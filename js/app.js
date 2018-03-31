/*
 * Create a list that holds all of your cards
 */

let cards = Array.from(document.getElementsByClassName("card"));
console.log(cards);

    
// deck of all cards in game
const deck = document.querySelector('.deck');


// array for opened cards
let openedCards = [];
let moves=0;
let rank=3;
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
   	started = false;
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
		stars();
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

// @description toggles open  show and selected class to display cards
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
    if (!started) { // if started is false
    second = 0; // reset the timer
    minute = 0;
    startTimer(); // start the timer
    started = true; // started becomes true hence the timer isn't started at every click
  }
	openedCards.push(this);
	let number = openedCards.length;
	//temp=document.querySelectorAll(".card");
	//console.log(temp);
//	number > 2? console.log(openedCards[0]):"";
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
	matchedCard.length===16? openModal()|| stop():"";
	moves++;
	stars();
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
moves++;
stars();

}
	// @loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   card = cards[i];
   card.addEventListener("click", displayCard);
   card.addEventListener("click", cardOpen);
   };
   // @manage stars in game
 function stars(){
document.querySelector(".moves").textContent = `${moves}`;
console.log(rank);	
if (moves < 26) {
document.querySelector(".star1").classList.add("fas", "fa-star"); 
document.querySelector(".star2").classList.add("fas", "fa-star");  
document.querySelector(".star3").classList.add("fas", "fa-star");
} else if (moves == 26){
--rank;
document.querySelector(".star3").classList.remove("fas", "fa-star");  
document.querySelector(".star3").classList.add("far", "fa-star");
} else if (moves == 35){
--rank; 
document.querySelector(".star2").classList.remove("fas", "fa-star"); 
document.querySelector(".star2").classList.add("far", "fa-star");
} else if (moves == 46){
--rank;  
document.querySelector(".star1").classList.remove("fas", "fa-star");  
document.querySelector(".star1").classList.add("far", "fa-star");
}
	 }  ;
   
     
  // Modal function
 
function openModal(){
   // Get the modal
 const modal = document.getElementById('myModal');
document.getElementById("moves").textContent = `You finished the game in ${moves+1} moves` 
document.getElementById("time").textContent = `Your time was ${h4.textContent} minutes`
document.getElementById("ranking").textContent = `Your rankimg is ${rank} stars`;

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

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


// @Timer script


var h4 = document.getElementsByTagName('h4')[0],
    seconds = 0, minutes = 0,  t;
function startTimer(){
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
       }
    
    h4.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
 timer();
    
}
function timer() {
t = setTimeout(add, 1000);
}

 timer();
}
/* Stop timer function */
function stop() {
    clearTimeout(t);
}


