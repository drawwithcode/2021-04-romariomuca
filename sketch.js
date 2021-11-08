//PAGINA DEL VIDEO

//definisco il framerate
let fr = 30;
let durata_video = 30; //durata video in secondi
//definisco variabile che mi farà ritardare per la durata del video
let ritardo = 0;

const urlString = window.location.href; //it's only a string
let url = new URL(urlString); //PRE Built in javascript so we can have a real URL

//creo video iniziale
let videoElement;
//creo variabile che verifica se ho cliccato sullo schermo
let posso_iniziare = false;

function preload() {
  //carico in preload il file json che contiene gli insulti e il loro peso
  videoElement = createVideo(["assets/video2.mp4"], onVideoLoad);
}
function onVideoLoad() {
  // The media will play as soon as it is loaded.
  videoElement.autoplay(false);
  videoElement.volume(0.8);
  // videoElement.position(windowWidth / 4, windowHeight / 4);
  videoElement.center();
  //videoElement.size(1920 / 2, 1080 / 2);
}
function mouseClicked() {
  posso_iniziare = true;
  videoElement.play();
  //ritardo = fr * 30; //30*30 = 900
}

function setup() {
  //definisco frame rate
  frameRate(fr);
  //createCanvas(windowWidth, windowHeight);
  //background("black");
}
function draw() {
  if (posso_iniziare == true) {
    //se ho cliccato
    ritardo++; //incomincio ad aumentare il ritardo
    if (ritardo > fr * durata_video) {
      //frame rate per durata in secondi del video
      window.open(url + "second-page.html", "_self");
    }
  }
}
