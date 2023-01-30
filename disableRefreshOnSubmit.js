//*       <form onkeypress="return tableInputKeyPress(event)">
          .....
HTML      .....
          </form>
*//

function tableInputKeyPress(e){
  // e=e||window.event;
  var key = e.keyCode;
  if(key==13) //Enter
  {
     //do you task here...
     return false; //return true to submit, false to do nothing
  }
}

//Another HTML Method
/*
<form onsubmit="return false">
*/
