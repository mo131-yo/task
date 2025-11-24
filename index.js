// // const containerDiv= document.getElementById("container");
// // const newElement = document.createElement("p");
// // containerDiv.appendChild(newElement);

// // const multiNumber= document.getElementById("input")
// // const clickButton = document.getElementById("button")

// // newElement.style.color= "blue"


// // Source - https://stackoverflow.com/q/57220707
// // Posted by Laura, modified by community. See post 'Timeline' for change history
// // Retrieved 2025-11-24, License - CC BY-SA 4.0

// function calculate() {
//   var amount = $('#amount').val();
//   var percentage = $('#percentage').val();
//   var tip = amount * (percentage / 100);
//   var total = Number(amount) + tip;

//   $('#tip').val(tip.toFixed(2));
//   $('#total').val(total.toFixed(2));
// }

// $('#calculator').submit(calculate);



// //Calculate Tip
// function calculateTip() {
//   var billAmt = document.getElementById("billamt").value;
//   var serviceQual = document.getElementById("serviceQual").value;
//   var numOfPeople = document.getElementById("peopleamt").value;


//   //Calculate tip
//   var total = (billAmt * serviceQual) / numOfPeople;
//   //round to two decimal places
//   total = Math.round(total * 100) / 100;
//   //next line allows us to always have two digits after decimal point
//   total = total.toFixed(2);
//   //Display the tip
//   document.getElementById("totalTip").style.display = "block";
//   document.getElementById("tip").innerHTML = total;

// }

// //Hide the tip amount on load
// document.getElementById("totalTip").style.display = "none";
// document.getElementById("each").style.display = "none";

// //click to call function
// document.getElementById("calculate").onclick = function() {
//   calculateTip();

// };


   clickButton.addEventListener("click", function(){
    const result= button[buttonNUmber.value];
    newElement.innerText= result;
    button.value=""
   });
   const button=(value)=>{
    const result =value * value;
    return result  
 }


 function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleamt").value;

  if (billAmt === "" || billAmt <= 0) {
    alert("Please enter the bill amount");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 0) {
    numOfPeople = 1;
  }

  // Calculate tip
  let total = (billAmt * serviceQual) / numOfPeople;

  // Format to 2 decimal places
  total = total.toFixed(2);

  // Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

// Click event
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
