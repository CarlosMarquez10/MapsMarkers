let map = L.map("map").setView([8.032340, -72.901503], 8);
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
var btnMasivo = document.querySelector("#btnMasivo");
const btnBuscar = document.querySelector("#btn_consulta1");
const btnmostrar = document.querySelector("#select");
document.getElementById('file').addEventListener('change', readFile, false);
const datofijo1 = document.getElementById('datofijo1').value;
const datofijo2 = document.getElementById('datofijo2').value;
const lati = document.getElementById('lati').value;
const longt = document.getElementById('longt').value;
const Nombre = document.querySelector('#nombre');
const Dirrecion = document.getElementById('dirrecion').value;
const Description = document.getElementById('description').value;
const dato1 = document.getElementById('dato1').value;
const dato2 = document.getElementById('dato2').value;
const dato3 = document.getElementById('dato3').value;
const dato4 = document.getElementById('dato4').value;
const dato5 = document.getElementById('dato5').value;
const btn_editar = document.querySelector('#btn_editar');
const btnguardar = document.querySelector('#btnguardar');

var Resultado = new Array();
var mispuntos = new Array();
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
  var nomcolor = "Azul";
  colorview.id = "color1";
  iconox = iconoBlue;
  cambiarColor(iconox, nomcolor);
});

color2.addEventListener("click", () => {
  var nomcolor = "magenta";
  colorview.id = "color2";
  iconox = iconomagenta;
  cambiarColor(iconox, nomcolor);
});

color3.addEventListener("click", () => {
  var nomcolor = "Verde";
  colorview.id = "color3";
  iconox = iconogreen;
  cambiarColor(iconox, nomcolor);
});

color5.addEventListener("click", () => {
  var nomcolor = "VerdeClaro";
  colorview.id = "color5";
  iconox = iconoGrenYellow;
  cambiarColor(iconox, nomcolor);
});

color6.addEventListener("click", () => {
  var nomcolor = "Salmon";
  colorview.id = "color6";
  iconox = iconLightSalmon;
  cambiarColor(iconox, nomcolor);
});

color7.addEventListener("click", () => {
  var nomcolor = "Gris";
  colorview.id = "color7";
  iconox = iconogrey;
  cambiarColor(iconox, nomcolor);
});

color8.addEventListener("click", () => {
  var nomcolor = "AzulCielo";
  colorview.id = "color8";
  iconox = iconoLightSkyBlue;
  cambiarColor(iconox, nomcolor);
});

color9.addEventListener("click", () => {
  var nomcolor = "Naranja";
  colorview.id = "color9";
  iconox = iconoorange;
  cambiarColor(iconox, nomcolor);
});

color10.addEventListener("click", () => {
  var nomcolor = "Rojo";
  colorview.id = "color10";
  iconox = iconoRed;
  cambiarColor(iconox, nomcolor);
});

color11.addEventListener("click", () => {
  var nomcolor = "Morado";
  colorview.id = "color11";
  iconox = iconopurple;
  cambiarColor(iconox, nomcolor);
});

color12.addEventListener("click", () => {
  var nomcolor = "Amarillo";
  colorview.id = "color12";
  iconox = iconoYellow;
  cambiarColor(iconox, nomcolor);
});

color13.addEventListener("click", () => {
  var nomcolor = "Negro";
  colorview.id = "color13";
  iconox = iconoBlack;
  cambiarColor(iconox, nomcolor);
});

color14.addEventListener("click", () => {
  var nomcolor = "Naranjado";
  colorview.id = "color14";
  iconox = iconoorange;
  cambiarColor(iconox, nomcolor);
});

color15.addEventListener("click", () => {
  var nomcolor = "Blanco";
  colorview.id = "color15";
  iconox = iconoWhite;
  cambiarColor(iconox, nomcolor);
});

var colorico = iconoBlue; // variable para guardar el color.
var nombreColor = "Azul";

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


function cambiarColor(color, nomcolor) {
  colorico = color;
  nombreColor = nomcolor;
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
      var nom = output[2];
      var dire = output[3];
      var dato1 = output[4];
      var dato2 = output[5];
    }
    for (var j = 0; j < latitud.length; j++) {
      var lat = latitud[j];
      var long = longitud[j];
      let Nombre = nom[j];
      let Direccion = dire[j];
      let datouno = dato1[j];
      let datodos = dato2[j];
      pintar(lat, long, Nombre, Direccion, datouno, datodos);

    }
  }
  );
}


function pintar(lati, longi, Nom, Dir, d1, d2) {

  class Puntos {
    constructor(latit, longit, Nomb, Dire, dt1, dt2) {
      this.lati = latit;
      this.longi = longit;
      this.Nombre = Nomb;
      this.Direcciones = Dire;
      this.dato1 = dt1;
      this.dato2 = dt2;
    }
  }
  var damepuntos = new Puntos(lati, longi, Nom, Dir, d1, d2);
  var puntox = L.marker([damepuntos.lati, damepuntos.longi], { icon: colorico })
    .addTo(map)
    .bindPopup(`Orden: ${damepuntos.dato2} <br> Ciclo: ${damepuntos.dato1} <br> Nombre: ${damepuntos.Nombre}`);

  // .openPopup();

  puntox.on('click', cambiarico);

  function cambiarico() {
    // map.removeLayer(this);
    puntox.setIcon(colorico);

    var datosguardar = new Object();
    datosguardar.nombre = damepuntos.Nombre;
    datosguardar.Direccion = damepuntos.Direcciones;
    datosguardar.coloricono = nombreColor;

    pasarpunto(datosguardar);
  };

}


function pasarpunto(puntos) {
  var datoN = "";
  var index = 0;
  if (mispuntos.length === 0) {
    mispuntos.push(puntos);
  }
  datoN = puntos.nombre;
  index = mispuntos.findIndex(mipunto => mipunto.nombre === datoN)
  if (index > -1) {
    mispuntos.splice(index, 1, puntos);
  } else {
    mispuntos.push(puntos);
  }

  mostrardatos(index);
};

btnmostrar.addEventListener('click', () => {
  console.log(mispuntos);
 
});

function mostrardatos(index){
  document.querySelector('#nombre').value = "";
 document.querySelector('#datofijo1').value = "";
 document.querySelector('#datofijo2').value = "";
 document.querySelector('#lati').value = "";
 document.querySelector('#longt').value = "";
 document.querySelector('#dirrecion').value = "";
 document.querySelector('#description').value = "";
 document.querySelector('#dato1').value = "";
 document.querySelector('#dato2').value = "";
 document.querySelector('#dato3').value = "";
 document.querySelector('#dato4').value = "";
 document.querySelector('#dato5').value = "";

  document.querySelector('#nombre').value = mispuntos[index].nombre;
  document.querySelector('#dato1').value = mispuntos[index].coloricono;
  document.querySelector('#dirrecion').value = mispuntos[index].Direccion;
};

