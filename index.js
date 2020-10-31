
// sets the input value to the value stored in the key "Name"
document.querySelector(".challenge").value = localStorage.getItem("Name");

// changes the value of the key "Name" to the current input if the button is pressed
function newValue() {
  var challenge = document.querySelector(".challenge").value;
  localStorage.setItem("Name", challenge);
}

// adds the class ".pressed" to the buttons if they where saved with the class
var days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

for (var i = 0; i < days.length; i++) {
  var day = localStorage.getItem(days[i]);
  if (day === ".pressed") {
  var pressedButton = document.querySelector("." + days[i]);
  pressedButton.classList.add("pressed");
  }
}

// ckecks if a button is pressed and toggles the class .pressed
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {

    var pressedButton = document.querySelector("." + this.innerText);
    pressedButton.classList.toggle("pressed");

    // adds/removes the .pressed class from the buttons
    if (localStorage.getItem(this.innerText) === ".pressed") {
      localStorage.removeItem(this.innerText);
    }
    else {
      localStorage.setItem(this.innerText, ".pressed");
    }
  });
}
