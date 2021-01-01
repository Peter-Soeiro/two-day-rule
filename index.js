
// sets the input value to the value stored in the key "Name"
document.querySelector(".challenge").value = localStorage.getItem("Name");

// changes the value of the key "Name" to the current input if the button is pressed
function newValue() {
  var challenge = document.querySelector(".challenge").value;
  localStorage.setItem("Name", challenge);
}

// adds the class ".pressed" to the buttons if they where saved with the class
var days = ["MON1", "TUE1", "WED1", "THU1", "FRI1", "SAT1", "SUN1",
            "MON2", "TUE2", "WED2", "THU2", "FRI2", "SAT2", "SUN2",
            "MON3", "TUE3", "WED3", "THU3", "FRI3", "SAT3", "SUN3",
            "MON4", "TUE4", "WED4", "THU4", "FRI4", "SAT4", "SUN4"];

for (var i = 0; i < days.length; i++) {
  var day = localStorage.getItem(days[i]);
  if (day === ".pressed") {
  var pressedButton = document.querySelector("." + days[i]);
  pressedButton.classList.add("pressed");
  }
  else if (day === ".pressed2"){
    var pressedButton = document.querySelector("." + days[i]);
    pressedButton.classList.add("pressed2");
  }
}

// ckecks if a button is pressed and toggles the class .pressed
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var pressedButton = document.querySelector("." + this.classList[0]);

    if (pressedButton.classList.contains("pressed")) {
    pressedButton.classList.toggle("pressed2");
    pressedButton.classList.toggle("pressed");
    }

    else if (pressedButton.classList.contains("pressed2")) {
    pressedButton.classList.toggle("pressed2");
    }

    else {
    pressedButton.classList.toggle("pressed");
    }

    // adds/removes the .pressed class from the buttons
    if (localStorage.getItem(pressedButton.classList[0]) === ".pressed") {
      localStorage.removeItem(pressedButton.classList[0]);
      localStorage.setItem(pressedButton.classList[0], ".pressed2");
    }
    else if (localStorage.getItem(pressedButton.classList[0]) === ".pressed2") {
      localStorage.removeItem(pressedButton.classList[0]);
    }
    else {
      localStorage.setItem(pressedButton.classList[0], ".pressed");
    }
  });
}
