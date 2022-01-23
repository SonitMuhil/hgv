x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
apple = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);

 console.log(event); 

 content = event.results[0][0].transcript;

   if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple " + content;
    }else{
      document.getElementById("status").innerHTML = "The speech has not recognized a number " + content;
    }

}

function preload(){
  loadImage("apple.png");
}

function setup() {
  canvas = createCanvas(900, 600);
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas.position(100);
}

function draw() {
  if(draw_apple == "set")
  {
     x = Math.floor(Math.random * 700);
     y = Math.floor(Math.random * 400);
    }
    apple(x,y,50,50);
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number;
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
