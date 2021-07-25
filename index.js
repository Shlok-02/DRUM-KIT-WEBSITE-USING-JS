for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onHandle);
}

document.addEventListener("keypress", function Onkey(e) {
  console.log(e.key);
  var button = e.key;

  console.log(button);
  switch (button) {
    case "w":
      var audio11 = new Audio("./sounds/tom-1.mp3");
      audio11.play();
      break;
    case "a":
      var audio12 = new Audio("./sounds/tom-2.mp3");
      audio12.play();
      break;
    case "s":
      var audio21 = new Audio("./sounds/tom-3.mp3");
      audio21.play();
      break;
    case "d":
      var audio31 = new Audio("./sounds/tom-4.mp3");
      audio31.play();
      break;
    case "j":
      var audio41 = new Audio("./sounds/crash.mp3");
      audio41.play();
      break;
    case "k":
      var audio51 = new Audio("./sounds/kick-bass.mp3");
      audio51.play();
      break;
    case "l":
      var audio61 = new Audio("./sounds/snare.mp3");
      audio61.play();
      break;
    default:
      console.log(this);
  }
  Animate(e.key);
});

function onHandle() {
  var button = this.innerHTML;
  console.log(button);
  switch (button) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("./sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("./sounds/tom-3.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("./sounds/tom-4.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("./sounds/crash.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("./sounds/kick-bass.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("./sounds/snare.mp3");
      audio6.play();
      break;
    default:
      console.log(this);
  }
  Animate(button);
}

function Animate(current) {
  var active = document.querySelector("." + current);
  console.log(active);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
