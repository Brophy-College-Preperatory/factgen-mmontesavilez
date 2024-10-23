var factList = [ //makes a variable list in order
 "Fact 1", //list term
 "Fact 2", //list term
 "Fact 3", //list term
 "Fact 4"]; //list term

var fact = document.getElementById("fact"); //creates variable fact
var myBtn = document.getElementById("myBtn"); //creates variable myBtn
var count = 0; //creates count variable 

myBtn.addEventListener("click", displayFact); //when variable myBtn is clicked it will display fact

function displayFact(){
  fact.innerHTML = factList[count]; //makes a function that works inside html using the factlist and count variable
  count++; //add one to count
  if (count == factList.length){ //if the count number equals the factlist length
    count = 0; //then the count will be reset
  }
}
