import {nombreColor,colorico,btnMasivo,btnBuscar,btnmostrar,mispuntos} from"./datos.js";
import {fecha_hoy,fecha_actual,DtoPri,DtoSec,desabilitarcampos} from "./functions.js";

let map = L.map("map").setView([8.03234, -72.901503], 8);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

desabilitarcampos();

document.getElementById("file").addEventListener("change", readFile, false);



// FUNCION PARA BUSCAR POR INDIVIDUAL

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


// FUNCION PARA LEER EL ARCHIVO EXCEL

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
      `Orden: ${damepuntos.anexo1}`
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
    datosguardar.DtPri = DtoPri;
    datosguardar.DtSec = DtoSec;

    pasarpunto(datosguardar);
  }

}  

// funcion para pasar datosfijos individual

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
      mispuntos[i].anexo1 +
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
      "</td><td>" +
      mispuntos[i].DtPri +
      "</td><td>" +
      mispuntos[i].DtSec +
      "</td><tr>";
  }
  document.getElementById("tbody_tabla").innerHTML = aux;
}
