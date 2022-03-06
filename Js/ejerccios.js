let map = L.map("map").setView([7.944311, -72.490174], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


const colorview = document.querySelector(".colorView");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");
const color9 = document.querySelector("#color9");
const color10 = document.querySelector("#color10");
const color11 = document.querySelector("#color11");
const color12 = document.querySelector("#color12");
const color13 = document.querySelector("#color13");
const color14 = document.querySelector("#color14");
const color15 = document.querySelector("#color15");
var textoMasivo = document.querySelector("#btnMasivo");
const btnBuscar = document.querySelector("#btn_consulta1");
document.getElementById('file').addEventListener('change', readFile, false);
var datosTextArea = new Array();


var iconoBlue = L.icon({
  iconUrl: "img/icoblue.svg",
  iconSize: [30, 40]
});

var iconogreen = L.icon({
  iconUrl: "img/icogreen.svg",
  iconSize: [30, 40]
});

var iconoGrenYellow = L.icon({
  iconUrl: "img/icoGreenYellow.svg",
  iconSize: [30, 40],
});
var iconogrey = L.icon({
  iconUrl: "img/icogrey.svg",
  iconSize: [30, 40]
});

var iconLightSalmon = L.icon({
  iconUrl: "img/icoLightSalmon.svg",
  iconSize: [30, 40],
});

var iconoLightSalmon = L.icon({
  iconUrl: "img/icoLightSalmon.svg",
  iconSize: [30, 40],
});

var iconomagenta = L.icon({
  iconUrl: "img/icomagenta.svg",
  iconSize: [30, 40],
});

var iconoorange = L.icon({
  iconUrl: "img/icoorange.svg",
  iconSize: [30, 40]
});

var iconoOrangeRed = L.icon({
  iconUrl: "img/icoOrangeRed.svg",
  iconSize: [30, 40],
});

var iconoLightSkyBlue = L.icon({
  iconUrl: "img/icoLightSkyBlue.svg",
  iconSize: [30, 40],
});

var iconopurple = L.icon({
  iconUrl: "img/icopurple.svg",
  iconSize: [30, 40]
});

var iconoRed = L.icon({
  iconUrl: "img/icored.svg",
  iconSize: [30, 40]
});

var iconoYellow = L.icon({
  iconUrl: "img/icoyellow.svg",
  iconSize: [30, 40]
});

var iconoBlack = L.icon({
  iconUrl: "img/icoblack.svg",
  iconSize: [30, 40]
});

var iconoWhite = L.icon({
  iconUrl: "img/icowhite.svg",
  iconSize: [30, 40]
});

var iconox = "";
// a qui empieza la asignacion del codigo para el cuadro de color.

color1.addEventListener("click", () => {
  colorview.id = "color1";
  iconox = iconoBlue;
  cambiarColor(iconox);
});

color2.addEventListener("click", () => {
  colorview.id = "color2";
  iconox = iconomagenta;
  cambiarColor(iconox);
});

color3.addEventListener("click", () => {
  colorview.id = "color3";
  iconox = iconogreen;
  cambiarColor(iconox);
});

color5.addEventListener("click", () => {
  colorview.id = "color5";
  iconox = iconoGrenYellow;
  cambiarColor(iconox);
});

color6.addEventListener("click", () => {
  colorview.id = "color6";
  iconox = iconLightSalmon;
  cambiarColor(iconox);
});

color7.addEventListener("click", () => {
  colorview.id = "color7";
  iconox = iconogrey;
  cambiarColor(iconox);
});

color8.addEventListener("click", () => {
  colorview.id = "color8";
  iconox = iconoLightSkyBlue;
  cambiarColor(iconox);
});

color9.addEventListener("click", () => {
  colorview.id = "color9";
  iconox = iconoorange;
  cambiarColor(iconox);
});

color10.addEventListener("click", () => {
  colorview.id = "color10";
  iconox = iconoRed;
  cambiarColor(iconox);
});

color11.addEventListener("click", () => {
  colorview.id = "color11";
  iconox = iconopurple;
  cambiarColor(iconox);
});

color12.addEventListener("click", () => {
  colorview.id = "color12";
  iconox = iconoYellow;
  cambiarColor(iconox);
});

color13.addEventListener("click", () => {
  colorview.id = "color13";
  iconox = iconoBlack;
  cambiarColor(iconox);
});

color14.addEventListener("click", () => {
  colorview.id = "color14";
  iconox = iconoorange;
  cambiarColor(iconox);
});

color15.addEventListener("click", () => {
  colorview.id = "color15";
  iconox = iconoWhite;
  cambiarColor(iconox);
});

var colorico = iconoBlue; // variable para guardar el color.

// cambiar el color de los puntos


// proceso para buscar ubicacion individual

btnBuscar.addEventListener('click', () => {

  var latitud = document.getElementById("lat").value;
  var longitud = document.getElementById("long").value;

  class Puntos {
    constructor(lat, long) {
      this.lat = lat;
      this.long = long;
    }
  }
  var damepuntos = new Puntos(latitud, longitud);
  console.log(damepuntos.lat);
  var puntox = L.marker([damepuntos.lat, damepuntos.long], { icon: colorico })
    .addTo(map);
  puntox.on('click', cambiarico);

  function cambiarico() {
    // map.removeLayer(this);
    puntox.setIcon(colorico);
  };

});


function cambiarColor(color) {
    colorico = color;
};


// Codigo para leer archivo excel

function parseCSV(text) {
  // Obtenemos las lineas del texto
  let lines = text.replace(/\r/g, '').split('\n');
  return lines.map(line => {
    // Por cada linea obtenemos los valores
    let values = line.split(';');
    return values;
  });
}

function reverseMatrix(matrix) {
  var output = [];
  // Por cada fila
  matrix.forEach((values, row) => {
    // Vemos los valores y su posicion
    values.forEach((value, col) => {
      // Si la posición aún no fue creada
      if (output[col] === undefined) output[col] = [];
      output[col][row] = value;
    });
  });
  return output;
}

function readFile(evt) {
  var output = [];

  let file = evt.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    // Cuando el archivo se terminó de cargar
    let lines = parseCSV(e.target.result);
    output = reverseMatrix(lines);
    console.log(output);
    pasardato(output);
  };


  // Leemos el contenido del archivo seleccionado
  reader.readAsBinaryString(file);


};

function pasardato(dato) {

  var output = new Array();
  output = dato;

  btnMasivo.addEventListener('click', () => {
    for (var i = 1; i < output.length; i++) {
      var latitud = output[0];
      var longitud = output[1];
    }
    for (var j = 0; j < latitud.length; j++) {
      var lat = latitud[j];
      var long = longitud[j];
      pintar(lat, long);

    }
  }
  );
}

function pintar(lati, longi){

  class Puntos {
    constructor(latit, longit) {
      this.lati = latit;
      this.longi = longit;
    }
  }
  var damepuntos = new Puntos(lati, longi);
  var puntox = L.marker([damepuntos.lati, damepuntos.longi], { icon: colorico })
    .addTo(map);


  puntox.on('click', cambiarico);

  function cambiarico() {
    // map.removeLayer(this);
    puntox.setIcon(colorico);
  };

}