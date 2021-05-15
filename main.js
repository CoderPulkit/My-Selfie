
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
 recognition.start();
 }


recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);

    if (Content=="take my selfie") {
        console.log("Taking Selfie");
    speak();
    }
}
function speak() { 
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 secs";
    var utturthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utturthis);
    Webcam.attach(camera);

  setTimeout(function()
 {
  snaps();
 save();
 },
 5000
 ) ;
}

Webcam.set({
width:350,
height:250,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

function snaps(){
 Webcam.snap(function (data_uri){
     document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+ '" />';
      });
}

function save() {
    link=document.getElementById("link");
    img=document.getElementById("selfie_image").src;
    link.href=img;
link.click();
}

