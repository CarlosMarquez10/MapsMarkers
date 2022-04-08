import {btn_editar} from "./datos.js"

export var fecha_actual = "";
let btnGuardar = document.querySelector("#btnguardar");

export var DtoPri ="";
export var DtoSec ="";

//OBTENER LA FECHA ACTUAL
export function fecha_hoy() {
    const hoy = new Date();
    fecha_actual = hoy.getDate() + "/" + obtener_mes(hoy.getMonth()+1) + "/" + hoy.getFullYear();
  }
  
  //CONVERTIR EL NUMERO DEL MES EN TEXTO
  export function obtener_mes(x) {
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
  
btnGuardar.addEventListener("click", () => {
    let datoPrimario = document.getElementById("datofijo1").value;
    let datoSecundario = document.getElementById("datofijo2").value;

    var DatoUno = datoPrimario;
    var DatoDos = datoSecundario;
    datos(DatoUno, DatoDos);
   verr()


});

function datos(dato1, dato2){
  DtoPri = dato1;
  DtoSec = dato2;
};

export function desabilitarcampos(){

  document.querySelector("#datofijo1").disabled = true;
  document.querySelector("#datofijo2").disabled = true;
  document.querySelector("#lati").disabled = true;
  document.querySelector("#longt").disabled = true;
  document.querySelector("#nombre").disabled = true;
  document.querySelector("#dirrecion").disabled = true;
  document.querySelector("#description").disabled = true;
  document.querySelector("#dato1").disabled = true;
  document.querySelector("#dato2").disabled = true;
  document.querySelector("#dato3").disabled = true;
  document.querySelector("#dato4").disabled = true;
  document.querySelector("#dato5").disabled = true;

  
};

btn_editar.addEventListener("click", () => {
    Habilitarcampos();
});

export function Habilitarcampos(){

  document.querySelector("#datofijo1").disabled = false;
  document.querySelector("#datofijo2").disabled = false;
};


function verr(){
  document.querySelector("#datofijo1").style.background = "#94D393";
  document.querySelector("#datofijo1").style.color = "#076A05";
  document.querySelector("#datofijo1").disabled = true;
  document.querySelector("#datofijo2").style.background = "#94D393";
  document.querySelector("#datofijo2").style.color = "#076A05";
  document.querySelector("#datofijo2").disabled = true;
  
};
