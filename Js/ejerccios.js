let map = L.map("map").setView([8.03234, -72.901503], 8);
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
document.getElementById("file").addEventListener("change", readFile, false);
const btn_editar = document.querySelector("#btn_editar");
const btnguardar = document.querySelector("#btnguardar");

var fecha_actual = "";

var Resultado = new Array();
var mispuntos = new Array();
var datosTextArea = new Array();

var iconoBlue = L.icon({
  iconUrl: "img/icoblue.svg",
  iconSize: [30, 40],
});

var iconogreen = L.icon({
  iconUrl: "img/icogreen.svg",
  iconSize: [30, 40],
});

var iconoGrenYellow = L.icon({
  iconUrl: "img/icoGreenYellow.svg",
  iconSize: [30, 40],
});
var iconogrey = L.icon({
  iconUrl: "img/icogrey.svg",
  iconSize: [30, 40],
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
  iconSize: [30, 40],
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
  iconSize: [30, 40],
});

var iconoRed = L.icon({
  iconUrl: "img/icored.svg",
  iconSize: [30, 40],
});

var iconoYellow = L.icon({
  iconUrl: "img/icoyellow.svg",
  iconSize: [30, 40],
});

var iconoBlack = L.icon({
  iconUrl: "img/icoblack.svg",
  iconSize: [30, 40],
});

var iconoWhite = L.icon({
  iconUrl: "img/icowhite.svg",
  iconSize: [30, 40],
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

btnBuscar.addEventListener("click", () => {
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
  var puntox = L.marker([damepuntos.lat, damepuntos.long], {
    icon: colorico,
  }).addTo(map);
  puntox.on("click", cambiarico);

  function cambiarico() {
    // map.removeLayer(this);
    puntox.setIcon(colorico);
  }
});

function cambiarColor(color, nomcolor) {
  colorico = color;
  nombreColor = nomcolor;
}

// Codigo para leer archivo excel

function parseCSV(text) {
  // Obtenemos las lineas del texto
  let lines = text.replace(/\r/g, "").split("\n");
  return lines.map((line) => {
    // Por cada linea obtenemos los valores
    let values = line.split(";");
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
}

function pasardato(dato) {
  var output = new Array();
  output = dato;

  btnMasivo.addEventListener("click", () => {
    for (var i = 1; i < output.length; i++) {
      var latitud = output[0];
      var longitud = output[1];
      var nom = output[2];
      var dire = output[3];
      var des = output[4];
      var dato1 = output[5];
      var dato2 = output[6];
      var dato3 = output[7];
      var dato4 = output[8];
      var dato5 = output[9];
    }
    for (var j = 0; j < latitud.length; j++) {
      var lat = latitud[j];
      var long = longitud[j];
      var Nombre = nom[j];
      var Direccion = dire[j];
      var Description = des[j];
      var anexo1 = dato1[j];
      var anexo2 = dato2[j];
      var anexo3 = dato3[j];
      var anexo4 = dato4[j];
      var anexo5 = dato5[j];
      pintar(lat, long, Nombre, Direccion, Description, anexo1, anexo2, anexo3,anexo4, anexo5 );
    }
  });
}

function pintar(lati, longi, Nomb, _Direccion, _Description, _anexo1, _anexo2, _anexo3, _anexo4, _anexo5) {
  class Puntos {
    constructor(latit, longit, Nomb, Dire, Desc, an1, an2, an3, an4, an5) {
      this.lati = latit;
      this.longi = longit;
      this.Nomb = Nomb;
      this.Direccion = Dire;
      this.Description = Desc;
      this.anexo1 = an1;
      this.anexo2 = an2;
      this.anexo3 = an3;
      this.anexo4 = an4;
      this.anexo5 = an5;
    }
  }
  var damepuntos = new Puntos(lati, longi, Nomb, _Direccion, _Description, _anexo1, _anexo2, _anexo3, _anexo4, _anexo5);
  var puntox = L.marker([damepuntos.lati, damepuntos.longi], { icon: colorico })
    .addTo(map)
    .bindPopup(
      `Orden: ${damepuntos.anexo1} <br> Ciclo: ${damepuntos.Description} <br> Medidor: ${damepuntos.anexo2}`
    );

  // .openPopup();

  puntox.on("click", cambiarico);

  function cambiarico() {
    // map.removeLayer(this);
    puntox.setIcon(colorico);

    var datosguardar = new Object();
    datosguardar.latitud = damepuntos.lati;
    datosguardar.longitud = damepuntos.longi;
    datosguardar.nombre = damepuntos.Nomb;
    datosguardar.Direccion = damepuntos.Direccion;
    datosguardar.Descripcion = damepuntos.Description;
    datosguardar.coloricono = nombreColor;
    datosguardar.anexo1 = damepuntos.anexo1;
    datosguardar.anexo2 = damepuntos.anexo2;
    datosguardar.anexo3 = damepuntos.anexo3;
    datosguardar.anexo4 = damepuntos.anexo4;
    datosguardar.anexo5 = damepuntos.anexo5;

    pasarpunto(datosguardar);
  }
}

function pasarpunto(puntos) {
  var datoN = "";
  var index = 0;
  if (mispuntos.length === 0) {
    mispuntos.push(puntos);
  }
  datoN = puntos.nombre;
  index = mispuntos.findIndex((mipunto) => mipunto.nombre === datoN);
  if (index > -1) {
    mispuntos.splice(index, 1, puntos);
  } else {
    mispuntos.push(puntos);
  }

  mostrardatos(index);
}

btnmostrar.addEventListener("click", () => {
  console.log(mispuntos);
});

function mostrardatos(index) {


  document.querySelector("#lati").value = mispuntos[index].latitud;
  document.querySelector("#longt").value = mispuntos[index].longitud;
  document.querySelector("#nombre").value = mispuntos[index].nombre;
  document.querySelector("#dirrecion").value = mispuntos[index].Direccion;
  document.querySelector("#description").value = mispuntos[index].Descripcion;
  document.querySelector("#dato1").value = mispuntos[index].anexo1;
  document.querySelector("#dato2").value = mispuntos[index].anexo2;
  document.querySelector("#dato3").value = mispuntos[index].anexo3;
  document.querySelector("#dato4").value = mispuntos[index].anexo4;
  document.querySelector("#dato5").value = mispuntos[index].anexo5;

  
  // document.querySelector("#nombre").value = "";
  // document.querySelector("#datofijo1").value = "";
  // document.querySelector("#datofijo2").value = "";
  // document.querySelector("#lati").value = "";
  // document.querySelector("#longt").value = "";
  // document.querySelector("#dirrecion").value = "";
  // document.querySelector("#description").value = "";
  // document.querySelector("#dato1").value = "";
  // document.querySelector("#dato2").value = "";
  // document.querySelector("#dato3").value = "";
  // document.querySelector("#dato4").value = "";
  // document.querySelector("#dato5").value = "";



}

//OBTENER LA FECHA ACTUAL
function fecha_hoy() {
  const hoy = new Date();
  fecha_actual =
    hoy.getDate() +
    "/" +
    obtener_mes(hoy.getMonth() + 1) +
    "/" +
    hoy.getFullYear();
}

//CONVERTIR EL NUMERO DEL MES EN TEXTO
function obtener_mes(x) {
  switch (x) {
    case 1:
      return "Ene";
      break;
    case 2:
      return "Feb";
      break;
    case 3:
      return "Mar";
      break;
    case 4:
      return "Abr";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "Jun";
      break;
    case 7:
      return "Jul";
      break;
    case 8:
      return "Ago";
      break;
    case 9:
      return "Sep";
      break;
    case 10:
      return "Oct";
      break;
    case 11:
      return "Nov";
      break;
    case 12:
      return "Dic";
      break;
  }
}

//EXPORTAR EXCEL TODAS LAS CORRERIAS PROGRAMADAS
const $btnExportar2 = document.querySelector("#poligono"),
  $tabla2 = document.querySelector("#tabla");
$btnExportar2.addEventListener("click", function () {
  cargar_tabla_2();
  fecha_hoy();
  var nombre_archivo = "Maps Markers - " + fecha_actual;
  let tableExport = new TableExport($tabla2, {
    exportButtons: false, // No queremos botones
    filename: nombre_archivo, //Nombre del archivo de Excel
    sheetname: "Hoja 1", //Título de la hoja
  });
  let datos = tableExport.getExportData();
  let preferenciasDocumento = datos.tabla.xlsx;
  tableExport.export2file(
    preferenciasDocumento.data,
    preferenciasDocumento.mimeType,
    preferenciasDocumento.filename,
    preferenciasDocumento.fileExtension,
    preferenciasDocumento.merges,
    preferenciasDocumento.RTL,
    preferenciasDocumento.sheetname
  );
  // document.getElementById("alerta_vista").style.display = "block";
  // document.getElementById("alerta_vista").className = 'alerta_vista_success';
  // document.getElementById("alerta_vista").innerHTML = "El archivo "+nombre_archivo+" se ha descargado correctamente!";
});

//CARGAR EN TABLA TODAS LAS CORRERIAS PARA EXPORTAR A EXCEL
function cargar_tabla_2() {
  var aux = "";
  for (var i = 0; i < mispuntos.length; i++) {
    aux +=
      "<tr'><td>" +
      mispuntos[i].latitud +
      "</td><td>" +
      mispuntos[i].longitud +
      "</td><td>" +
      mispuntos[i].nombre +
      "</td><td>" +
      mispuntos[i].Direccion +
      "</td><td>" +
      mispuntos[i].Descripcion +
      "</td><td>" +
      mispuntos[i].anexo2 +
      "</td><td>" +
      mispuntos[i].anexo3 +
      "</td><td>" +
      mispuntos[i].anexo4 +
      "</td><td>" +
      mispuntos[i].anexo5 +
      "</td><td>" +
      mispuntos[i].coloricono +
      "</td><tr>";
  }
  document.getElementById("tbody_tabla").innerHTML = aux;
}
