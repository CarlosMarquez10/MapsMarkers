
let btnGuardar = document.querySelector("#btnguardar");

var DatoUno ="";
var DatoDos ="";

btnGuardar.addEventListener("click", () => {
    let datoPrimario = document.getElementById("datofijo1").value;
    let datoSecundario = document.getElementById("datofijo2").value;

    DatoUno = datoPrimario;
    DatoDos = datoSecundario;
   datos(DatoUno, DatoDos);
});

function datos(dato1, dato2){
console.log(dato1);
console.log(dato2);
};
