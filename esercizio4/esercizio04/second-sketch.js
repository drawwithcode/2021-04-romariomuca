let mic;
let voice;
let recording; //it stores what i m saying
//VAR per FISIONOMIA
let dataF;
let insultiF;
let insulti_nocensuraF;
let punteggio_personaleF = 0;
let myButtonF;
let allButtonsF;
//VAR per HOMOFOBIA
let dataH;
let insultiH;
let insulti_nocensuraH;
let punteggio_personaleH = 0;
let myButtonH;
let allButtonsH;
//definisco le variabili x il movimento degli insulti
let iterator1 = 0;
let iterator2 = 0;
let iterator3 = 0;
let iterator4 = 0;

function preload() {
  //carico in preload il file json che contiene gli insulti e il loro peso
  dataF = loadJSON("./assets/fision_c.json");
  data_nocensuraF = loadJSON("./assets/fision_NOc.json");
  dataH = loadJSON("./assets/homo_c.json");
  data_nocensuraH = loadJSON("./assets/homo_NOc.json");
  dataM = loadJSON("./assets/miso_c.json");
  data_nocensuraM = loadJSON("./assets/miso_NOc.json");
  dataX = loadJSON("./assets/xeno_c.json");
  data_nocensuraX = loadJSON("./assets/xeno_NOc.json");
}

function setup() {
  alert("Premi R e incomincia a ripetere gli insulti");

  textFont("Nova Cut");
  fill("white");
  textSize(50);
  //scrivo i titoli delle 4 categorie di insulti
  text("XENOFOBIA", 0, 0);
  text("OMOFOBIA", windowWidth / 2, height / 2);
  text("MISOGENIA", 0, height / 2);
  text("FISIONOMIA", width / 2, height / 2);

  createCanvas(windowWidth, windowHeight);
  //carico in voice la libreria che riconosce
  voice = new p5.Speech();
  recording = new p5.SpeechRec(); //faccio in modo di dare la possibilità di recrodare ciò che dico

  insultiF = dataF.insulti;
  insulti_nocensuraF = data_nocensuraF.insulti;

  insultiH = dataH.insulti;
  insulti_nocensuraH = data_nocensuraH.insulti;

  insultiM = dataM.insulti;
  insulti_nocensuraM = data_nocensuraM.insulti;

  insultiX = dataX.insulti;
  insulti_nocensuraX = data_nocensuraX.insulti;
}
function keyPressed(R) {
  recording.start();
  recording.onResult = showResult;
}

function showResult() {
  background("black");
  let result = recording.resultString;
  console.log(result);

  //accedo a tutto l'array di insulti FISIONOMIA
  for (let i = 0; i < insultiF.length; i++) {
    const insultoF = insultiF[i].insulto;
    const insulto_nocensuraF = insulti_nocensuraF[i].insulto;
    const punteggioF = insultiF[i].punteggio;
    //verifico se ciò che dico contiene un insulto nella lista, Se sì aumento creo il bottone corrispondente o ne aumento di grandezza
    if (result.includes(insultoF)) {
      fill("white");
      textSize(50);
      // text(insulto_nocensuraF, 10, height / 3);
      //creo pulsante con gli insulti che dico
      myButtonF = createElement("button", insulto_nocensuraF);
      punteggio_personaleF = punteggio_personaleF + punteggioF;
      myButtonF.size(punteggioF);
      let col = color(205, 0, 0); //creo colore per il pulsante
      myButtonF.style("font-family", "Nova Cut");
      myButtonF.style("font-size", "20px");
      myButtonF.style("border", "none");
      myButtonF.style("color", "white");
      myButtonF.style("background-color", col);
      myButtonF.addClass("myButtonF_class");

      insultiF[i].punteggio = insultiF[i].punteggio - 70;
      if (insultiF[i].punteggio < 0) {
        insultiF[i].punteggio = 0;
      }
    }
  }

  //accedo a tutto l'array di insulti HOMOFOBIA
  for (let i = 0; i < insultiH.length; i++) {
    const insultoF = insultiH[i].insulto;
    const insulto_nocensuraF = insulti_nocensuraH[i].insulto;
    const punteggioF = insultiH[i].punteggio;
    //verifico se ciò che dico contiene un insulto nella lista, Se sì aumento creo il bottone corrispondente o ne aumento di grandezza
    if (result.includes(insultoF)) {
      fill("white");
      textSize(50);
      //text(insulto_nocensuraF, 10, height / 3);
      //creo pulsante con gli insulti che dico
      myButtonF = createElement("button", insulto_nocensuraF);
      punteggio_personaleF = punteggio_personaleF + punteggioF;
      myButtonF.size(punteggioF);
      let col = color(205, 0, 0); //creo colore pulsanti
      myButtonF.style("font-family", "Nova Cut");
      myButtonF.style("font-size", "20px");
      myButtonF.style("border", "none");
      myButtonF.style("color", "white");
      myButtonF.style("background-color", col);
      myButtonF.addClass("myButtonH_class");

      insultiH[i].punteggio = insultiH[i].punteggio - 70;
      if (insultiH[i].punteggio < 0) {
        insultiH[i].punteggio = 0;
      }
    }
  }
  //accedo a tutto l'array di insulti MISOGENIA
  for (let i = 0; i < insultiM.length; i++) {
    const insultoF = insultiM[i].insulto;
    const insulto_nocensuraF = insulti_nocensuraM[i].insulto;
    const punteggioF = insultiM[i].punteggio;
    //verifico se ciò che dico contiene un insulto nella lista, Se sì aumento creo il bottone corrispondente o ne aumento di grandezza
    if (result.includes(insultoF)) {
      fill("white");
      textSize(50);
      //text(insulto_nocensuraF, 10, height / 3);
      //creo pulsante con gli insulti che dico
      myButtonF = createElement("button", insulto_nocensuraF);
      punteggio_personaleF = punteggio_personaleF + punteggioF;
      myButtonF.size(punteggioF);
      let col = color(205, 0, 0); //creo colore pulsanti
      myButtonF.style("font-family", "Nova Cut");
      myButtonF.style("font-size", "20px");
      myButtonF.style("border", "none");
      myButtonF.style("color", "white");
      myButtonF.style("background-color", col);
      myButtonF.addClass("myButtonM_class");

      insultiM[i].punteggio = insultiM[i].punteggio - 70;
      if (insultiM[i].punteggio < 0) {
        insultiM[i].punteggio = 0;
      }
    }
  }
  //accedo a tutto l'array di insulti XENOFOBIA
  for (let i = 0; i < insultiX.length; i++) {
    const insultoF = insultiX[i].insulto;
    const insulto_nocensuraF = insulti_nocensuraX[i].insulto;
    const punteggioF = insultiX[i].punteggio;
    //verifico se ciò che dico contiene un insulto nella lista, Se sì aumento creo il bottone corrispondente o ne aumento di grandezza
    if (result.includes(insultoF)) {
      fill("white");
      textSize(50);
      //text(insulto_nocensuraF, 10, height / 3);
      //creo pulsante con gli insulti che dico
      myButtonF = createElement("button", insulto_nocensuraF);
      punteggio_personaleF = punteggio_personaleF + punteggioF;
      myButtonF.size(punteggioF);
      let col = color(205, 0, 0); //use color instead of fill
      myButtonF.style("font-family", "Nova Cut");
      myButtonF.style("font-size", "20px");
      myButtonF.style("border", "none");
      myButtonF.style("color", "white");
      myButtonF.style("background-color", col);
      myButtonF.addClass("myButtonX_class");

      insultiX[i].punteggio = insultiX[i].punteggio - 70;
      if (insultiX[i].punteggio < 0) {
        insultiX[i].punteggio = 0;
      }
    }
  }
  //scrivo il punteggio personale
  console.log(punteggio_personaleF);
  fill("white");
  textSize(50);
  //text("Discordia", width / 2, height / 2);
}

function draw() {
  //scrivo titoletti
  fill("red");
  textSize(15);
  //scrivo i titoli delle 4 categorie di insulti
  text("XENOFOBIA", 20, 20);
  text("OMOFOBIA", windowWidth / 2, 20);
  text("MISOGENIA", 20, windowHeight / 2);
  text("FISIONOMIA", windowWidth / 2, windowHeight / 2);

  //Assegno ad AllButtons tutti i bottoni di FISIONOMIA
  allButtonsF = selectAll(".myButtonF_class");
  iterator1 += 0.8;
  iterator2 += 1;
  iterator3 += 1.5;
  iterator4 += 2;
  //definisco i bottoni di FISIONOMIA
  allButtonsF.forEach((singleButton, i) => {
    let x =
      windowWidth / 2 +
      noise((iterator1 + 40 * i) / 400) * windowWidth * (1 / 2);
    let y =
      windowHeight / 2 +
      noise((iterator1 - 40 * i) / 400) * windowHeight * (1 / 2);
    //console.log(i);
    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });

  //Assegno ad AllButtons tutti i bottoni di HOMOFOBIA
  allButtonsH = selectAll(".myButtonH_class");
  //definisco i bottoni di HOMO
  allButtonsH.forEach((singleButton, i) => {
    let x =
      windowWidth / 2 +
      noise((iterator2 + 40 * i) / 400) * windowWidth * (1 / 2);
    let y = noise((iterator2 - 40 * i) / 400) * windowHeight * (1 / 2);
    //console.log(i);
    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });

  //Assegno ad AllButtons tutti i bottoni di MISOGENIA
  allButtonsM = selectAll(".myButtonM_class");
  //definisco i bottoni di MISO
  allButtonsM.forEach((singleButton, i) => {
    let x = noise((iterator3 + 40 * i) / 400) * windowWidth * (1 / 2);
    let y =
      windowHeight / 2 +
      noise((iterator3 - 40 * i) / 400) * windowHeight * (1 / 2);
    //console.log(i);
    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });

  //Assegno ad AllButtons tutti i bottoni di XENOFOBIA
  allButtonsX = selectAll(".myButtonX_class");
  //definisco i bottoni di XENO
  allButtonsX.forEach((singleButton, i) => {
    let x = noise((iterator4 + 40 * i) / 400) * windowWidth * (1 / 2);
    let y = noise((iterator4 - 40 * i) / 400) * windowHeight * (1 / 2);
    //console.log(i);
    singleButton.style("position: absolute");
    singleButton.position(x, y);
  });
}
