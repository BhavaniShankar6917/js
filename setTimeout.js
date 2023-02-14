////********HTML**********////
<input type="text" class="movie-search" />


////***********JS******///////
// This code logs the word typed in the input text box only 2 seconds after the word is typed.
  
const input = document.querySelector("input");    
let timeoutID;                                    //Variable that stores the timeoutID returned by setTimeout(), which starts with 1 and goes on incrementally
const inputEvent = (e) => {
  if (timeoutID) {                                //If timeoutID has a value it is cleared and the setTimeout() in not executed.
    // timeoutID = 1;
    clearTimeout(timeoutID);                      //Clears the timeout function
    console.log("set to ZERO!");
  }
  timeoutID = setTimeout(() => {                  //setTimeout() function whose return value which is a timeoutID is set tot timeoutID variable declared previously
    console.log("Word typed!", e.target.value);   //Word in logged in the console after 2 seconds.
  }, 2000);
};
input.addEventListener("input", inputEvent);      //Listens for input event on the input element

// Can be used in auto suggest models.
