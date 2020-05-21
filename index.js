for(var i=0; i< document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var test_case = this.innerHTML;
    make_sound(test_case);
    addAnimation(test_case);
    });
}
document.addEventListener("keypress",function(event){
    make_sound(event.key);
    addAnimation(event.key);
});
function make_sound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
         case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    
         case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
         case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
         case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        default:
            break;
}
}
function addAnimation(current){
   var current_key= document.querySelector("." + current);
   current_key.classList.add("pressed");
   setTimeout(function (){current_key.classList.remove("pressed")},50);
}