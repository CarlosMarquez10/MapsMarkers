import {btn_editar,btnpuntos,mispuntos,btnNomarchivo,btnNom} from "./datos.js"

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
   colortext()


});

function datos(dato1, dato2){
  DtoPri = dato1;
  DtoSec = dato2;
};

export function desabilitarcampos(){

  document.querySelector("#datofijo1").disabled = true;
  document.querySelector("#datofijo2").disabled = true;
  document.querySelector("#lati").disabled = true;
  document.querySelector("#lati").style.color = "#FFFFFF";
  document.querySelector("#longt").disabled = true;
  document.querySelector("#longt").style.color = "#FFFFFF";
  document.querySelector("#nombre").disabled = true;
  document.querySelector("#nombre").style.color = "#FFFFFF";
  document.querySelector("#dirrecion").disabled = true;
  document.querySelector("#dirrecion").style.color = "#FFFFFF";
  document.querySelector("#description").disabled = true;
  document.querySelector("#description").style.color = "#FFFFFF";
  document.querySelector("#dato1").disabled = true;
  document.querySelector("#dato1").style.color = "#FFFFFF";
  document.querySelector("#dato2").disabled = true;
  document.querySelector("#dato2").style.color = "#FFFFFF";
  document.querySelector("#dato3").disabled = true;
  document.querySelector("#dato3").style.color = "#FFFFFF";
  document.querySelector("#dato4").disabled = true;
  document.querySelector("#dato4").style.color = "#FFFFFF";
  document.querySelector("#dato5").disabled = true;
  document.querySelector("#dato5").style.color = "#FFFFFF";

  
};

btn_editar.addEventListener("click", () => {
    Habilitarcampos();
});

export function Habilitarcampos(){

  document.querySelector("#datofijo1").disabled = false;
  document.querySelector("#datofijo2").disabled = false;
  document.querySelector("#datofijo1").style.background = "#FFFFFF";
  document.querySelector("#datofijo1").style.color = "#808080";
  document.querySelector("#datofijo2").style.background = "#FFFFFF";
  document.querySelector("#datofijo2").style.color = "#808080";
};


function verr(){
  document.querySelector("#datofijo1").style.background = "#94D393";
  document.querySelector("#datofijo1").style.color = "#076A05";
  document.querySelector("#datofijo1").disabled = true;
  document.querySelector("#datofijo2").style.background = "#94D393";
  document.querySelector("#datofijo2").style.color = "#076A05";
  document.querySelector("#datofijo2").disabled = true;
  
};

function colortext(){
 
  document.querySelector("#lati").style.color = "#FFFFFF";
  document.querySelector("#longt").style.color = "#FFFFFF";
  document.querySelector("#nombre").style.color = "#FFFFFF";
  document.querySelector("#dirrecion").style.color = "#FFFFFF";
  document.querySelector("#description").style.color = "#FFFFFF";
  document.querySelector("#dato1").style.color = "#FFFFFF";
  document.querySelector("#dato2").style.color = "#FFFFFF";
  document.querySelector("#dato3").style.color = "#FFFFFF";
  document.querySelector("#dato4").style.color = "#FFFFFF";
  document.querySelector("#dato5").style.color = "#FFFFFF";
}

// funsion para contar datos repetidos
const Datax = new Array();

btnpuntos.addEventListener('click', () => {
  
  for (let i=0; i < mispuntos.length; i++) {
    if(mispuntos[i].DtPri === mispuntos[i+1].DtPri){
         console.log(mispuntos[i].DtPri);
       Datax.push(mispuntos[i].DtPri);
    }
    
   //  document.getElementById("textarea").innerHTML = Datax; 
  }
  ContarDato(Datax);
});



function ContarDato(data){
  let element = "";
  for (let i = 0; i < data.length; i++) {
    element = data[i];
  }
  document.getElementById("textarea").innerHTML = element ; 
    
};

btnNom.addEventListener('change', () => {
     let datanom = btnNom.files[0].name;
    document.querySelector("#nomArchivo").value = datanom;
    document.querySelector("#nomArchivo").style.background = "#94D393";
    document.querySelector("#nomArchivo").disabled = true;
    document.querySelector("#nomArchivo").style.color = "#076A05";
});

