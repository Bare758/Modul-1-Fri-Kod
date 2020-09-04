
//Location
document.querySelector("#button1").addEventListener("click" , ()=>{
  var x = location.host;
  document.getElementById("id1").innerHTML = x;
});
  
document.querySelector("#button2").addEventListener("click" , ()=>{
  document.querySelector(".example").style.backgroundColor = "blue";


});


//Reduce
var numbers = [70, 60, 50];

document.getElementById("id2").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;

}

//queryselector
function myFunction2() {
  var x, i;
  x = document.querySelectorAll(".example");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }

}


//arrow function
document.querySelector("#button22").addEventListener("click", () => {
  document.getElementById("id4").innerHTML = "Sucessful";
  console.log("hej");
});


//add eventlistener
document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("id5").innerHTML = "Wazzupp";
});

// appendchild
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Hammarby");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);

}
//createelement
function myFunction1() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);

}
//filter
var ages = [21, 11, 23, 24];

function check(age) {
  return age >= 21;
}

function myFunction2() {
  document.getElementById("id6").innerHTML = ages.filter(check);

}

//map

document.querySelector("#button80").addEventListener("click" , ()=>{
var numbers1 = [10, 20, 30, 40];
var newarray = numbers1.map((num) => num + 10);


for (var x = 0 ; x < newarray.length ; x++){
  var list = document.createElement("p");
  list.innerHTML = newarray[x];
  document.getElementById("id7").appendChild(list);
}


});
