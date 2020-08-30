var len = document.querySelectorAll("button").length;
for(i=0;i<len;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function1);
function function1(){
  var key = this.innerHTML;
  makeSound(key);
  getAnimation(key);
  }}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  getAnimation(event.key);
})


function makeSound(key){
  switch (key) {
    case "w":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;

    case "a":
    var a = new Audio("sounds/kick-bass.mp3");
    a.play();

      break;

    case "s":
    var s = new Audio("sounds/snare.mp3");
    s.play();
      break;

    case "d":
    var d = new Audio("sounds/tom-1.mp3");
    d.play();
      break;

    case "j":
    var j = new Audio("sounds/tom-2.mp3");
    j.play();
      break;

    case "k":
    var k = new Audio("sounds/tom-3.mp3");
    k.play();
      break;

    case "l":
    var l = new Audio("sounds/tom-4.mp3");
    l.play();
      break;

    default:

  }}

function getAnimation(key)
{
  var button = document.querySelector("."+key);
  button.classList.toggle("pressed");
  setTimeout(function1,100);
  function function1()
  {
    button.classList.toggle("pressed");
  }
}
