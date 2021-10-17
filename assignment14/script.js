var btnIncrement = document.getElementById("increment-btn");
var btnDecrement = document.getElementById("decrement-btn");
var counterValue = document.getElementById("counter-value");

var number =0;

function changeColor(number) {
    var color = "";
    if (number < 0) {
        color = "red";
    } else if (number > 0) {
        color = "green";
    } else {
        color = "pink";
    }
    return color;
}

btnIncrement.addEventListener("click", function() {
    number++;
    counterValue.innerHTML = number;
    counterValue.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function() {
    number--;
   counterValue.innerHTML = number;
   counterValue.style.color = changeColor(number);
}); 

