const debounce = (func) => {          //This debounce function returns another function  
  let timeoutId;                      //timeoutID variable stores the timerID returned by the setTimeout();
  return (...args) => {               //return of the function with args of the func passed in the debounce
//    console.log("executed", args);    test to see what is stored in args and how many times this function is executed
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {    
      func.apply(null, args);         //same as func(arg1, arg2, arg3,...)
    }, 500);
  };
};
const onInput = (e) => {
  fetchData(e.target.value);          //fetches data from external api
};
input.addEventListener("input", debounce(onInput));   //debounce is passed with onInput
