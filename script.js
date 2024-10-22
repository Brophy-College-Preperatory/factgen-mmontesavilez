var factList = [
 "Fact 1",
 "Fact 2", 
 "Fact 3", 
 "Fact 4"];

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
