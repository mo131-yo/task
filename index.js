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



const billInput = document.getElementById("bill-input");
const tipButtons = document.querySelectorAll(".button");
const totalAmount = document.querySelector(".total");
const resetButton = document.querySelector(".reset-button");

let selectedTip = 0;

// Tip товч дарах үед
tipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // сонгосон айдийг тэмдэглэх
        tipButtons.forEach(b => b.style.backgroundColor = "white");
        btn.style.backgroundColor = "#b6fff3";

        selectedTip = parseInt(btn.textContent.replace("%", ""));
        calculateTotal();
    });
});

// Bill input өөрчлөгдөх үед
billInput.addEventListener("input", calculateTotal);

// Тооцоолох функц
function calculateTotal() {
    const bill = parseFloat(billInput.value);

    if (isNaN(bill) || bill <= 0) {
        totalAmount.textContent = "0.00";
        return;
    }

    const tip = bill * (selectedTip / 100);
    const total = bill + tip;

    totalAmount.textContent = total.toFixed(2);
}

// Reset товч дарахад
resetButton.addEventListener("click", () => {
    billInput.value = "";
    selectedTip = 0;
    tipButtons.forEach(b => b.style.backgroundColor = "white");
    totalAmount.textContent = "0.00";
});

