What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer :  The above all are to select HTML element in Javascript.

 * getELementById : If there is specefic id of an element to get that element we can use getElementByID .
        By this we can get only one element .

 *  getElementsByClassname : If in a HTML there are some elements having the same class name to get all the elements having the same class name we use it .

 Returns a live HTMLCollection, which is an array-like object of all matching elements. It automatically updates if elements with that class are added or removed from the document.
          ### Can't use forEach Loop.
  
 * querySelector : Uses CSS selectors to select elements.
        Returns the first element that matches the specified CSS selector

 * querySelectorAll : 1. Uses CSS selectors  
                      2. Returns a  **Static NodeList** that matches  the specified CSS selector
                      3. it does not update if elements are added or removed from the document after the initial selection.


How do you create and insert a new element into the DOM?

Answer:   // Create element 
      const newChild = document.createElement("h1").

      // find the parent where you will add the child 

      const playerList = document.getELementById("players")

      // append the child to the parent 

      playerList.appendChild(newChild);

 What is Event Bubbling and how does it work?

Answer : Event bubbling is a concept in JavaScript where an event starts from the  innermost element that triggered it, and then bubbles up  through   parent → grandparent → document, etc. until it reaches the root (document).
             /// three phase in Event Bubbling 
             1. Capturing .
             2. Target .
             3. Bubbling.

<div class="container">
  <p class="number">999</p>
  <div class="buttons">
    <button class="btn-cp">Copy</button>
    <button class="btn-cl">Call</button>
  </div>
</div>


// 1. EVENT BUBBLING
document.querySelector(".btn-cp").addEventListener("click", function () {
  console.log("Button  clicked!");
});

document.querySelector(".buttons").addEventListener("click", function () {
  console.log("Buttons div clicked!");
});

document.querySelector(".container").addEventListener("click", function () {
  console.log("Container clicked!");
});

// "Button  clicked!" → "Buttons div clicked!" → "Container clicked!"
//  This is event bubbling: the event travels UP from child → parent → grandparent.


What is Event Delegation in JavaScript? Why is it useful?

Answer :   Event Delegation 
        1. Instead to adding event listener to every child element .
        2. Adding a event lister to its parent and let the event buble up.


  <div class="buttons">
    <button class="btn-cp">Copy</button>
    <button class="btn-cl">Call</button>
  </div>

document.querySelector(".buttons").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-cp")) {
    console.log("Delegation: Copy button clicked!");
  }
  if (event.target.classList.contains("btn-cl")) {
    console.log("Delegation: Call button clicked!");
  }
});


What is the difference between preventDefault() and stopPropagation() methods?

Answer :

  **preventDefault() → Stops browser’s default behavior.
stopPropagation() → Stops event from bubbling up.**

  **preventDefault() → Affects the element’s action (e.g., link, form).
stopPropagation() → Affects event flow (child → parent).**


preventDefault() →   don’t want the browser’s auto action.
stopPropagation() →  don’t want parents to get the event.










