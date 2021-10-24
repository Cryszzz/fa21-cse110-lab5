// expose.js

window.addEventListener('DOMContentLoaded', init);
var hAudio
var volume
var horns

function init() {
  // TODO\
  
  document.querySelector("#horn-select").addEventListener('change', myFunction)
  document.querySelector("button").addEventListener('click', myFunction2)
  document.getElementById("volume-controls").addEventListener('input', myFunction3)
}

function myFunction() {
  horns = document.querySelector("#horn-select")
  var hImag = document.querySelector("#expose img")
  hAudio = document.querySelector("audio")
  if(horns.value == "air-horn"){
    hImag.src = "assets/images/air-horn.svg"
    hImag.alt = "air-horn's image"
    hAudio.src = "assets/audio/air-horn.mp3"
  }
  else if(horns.value == "car-horn"){
    hImag.src = "assets/images/car-horn.svg"
    hImag.alt = "car-horn's image"
    hAudio.src = "assets/audio/car-horn.mp3"
  }
  else if(horns.value == "party-horn"){
    hImag.src = "assets/images/party-horn.svg"
    hImag.alt = "party-horn's image"
    hAudio.src = "assets/audio/party-horn.mp3"
  }
  else{
    hImag.src = "assets/images/no-image.png"
    hImag.alt = "No image selected"
    hAudio.src = ""
  }
}
const jsConfetti = new JSConfetti()
function myFunction2(){
  hAudio.play()
  let volumeV = document.querySelector("#volume-controls input").value
  if(volumeV > 0 && horns.value == "party-horn"){
    jsConfetti.addConfetti()
  }
}
function myFunction3(){
  volume = document.querySelector("#volume-controls input").value
  var vImge = document.querySelector("#volume-controls img")
  
  if(volume == 0){
    vImge.src = "assets/icons/volume-level-0.svg"
    vImge.alt = "Volume level 0"
  }
  else if (volume>0 && volume<33){
    vImge.src = "assets/icons/volume-level-1.svg"
    vImge.alt = "Volume level 1"
  }
  else if(volume>=33 && volume<67){
    vImge.src = "assets/icons/volume-level-2.svg"
    vImge.alt = "Volume level 2"
  }
  else {
    vImge.src = "assets/icons/volume-level-3.svg"
    vImge.alt = "Volume level 3"
  }
  hAudio.volume = volume /100
}