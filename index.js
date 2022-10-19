var w = new Audio('./sounds/baikit-nemanau.mp3')
var a = new Audio('./sounds/bite1.mp3');
var s = new Audio('./sounds/bite2.mp3');
var d = new Audio('./sounds/kiesa.mp3');
var j = new Audio('./sounds/lazauskiene.mp3');
var k = new Audio('./sounds/norejau-kazka-irodyt.mp3');
var l = new Audio('./sounds/svieciat.mp3');

// var audioSrc = ['./sounds/baikit-nemanau.mp3','./sounds/bite1.mp3','./sounds/bite2.mp3','./sounds/kiesa.mp3','./sounds/lazauskiene.mp3','./sounds/norejau-kazka-irodyt.mp3','./sounds/svieciat.mp3'];

// var audioSrc = ["baikit-nemanau", "bite1", "bite2", "lazauskiene", "norejau-kazka-irodyt", "svieciat"];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
                case "w":
                    var audio1 = new Audio('./sounds/baikit-nemanau.mp3');
                    audio1.play();
                    break;

                case "a":
                    var audio2 = new Audio('./sounds/bite1.mp3');
                    audio2.play();
                    break;

                case "s":
                    var audio3 = new Audio('./sounds/bite2.mp3');
                    audio3.play();
                    break;

                case "d":
                    var audio4 = new Audio('./sounds/kiesa.mp3');
                    audio4.play();
                    break;
                
                case "j":
                    var audio5 = new Audio('./sounds/lazauskiene.mp3');
                    audio5.play();
                    break;

                case "k":
                    var audio6 = new Audio('./sounds/norejau-kazka-irodyt.mp3');
                    audio6.play();
                    break;

                case "l":
                    var audio7 = new Audio('./sounds/svieciat.mp3');
                    audio7.play();
                    break;

                default: console.log(key);
                    break;
            }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)

}

    // console.log(event);
    // console.log(event.key);