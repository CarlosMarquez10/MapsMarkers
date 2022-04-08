export const colorview = document.querySelector(".colorView");
export const color1 = document.querySelector("#color1");
export const color2 = document.querySelector("#color2");
export const color3 = document.querySelector("#color3");
export const color5 = document.querySelector("#color5");
export const color6 = document.querySelector("#color6");
export const color7 = document.querySelector("#color7");
export const color8 = document.querySelector("#color8");
export const color9 = document.querySelector("#color9");
export const color10 = document.querySelector("#color10");
export const color11 = document.querySelector("#color11");
export const color12 = document.querySelector("#color12");
export const color13 = document.querySelector("#color13");
export const color14 = document.querySelector("#color14");
export const color15 = document.querySelector("#color15");
export const color16 = document.querySelector("#color16");
export const color17 = document.querySelector("#color17");
export const color18 = document.querySelector("#color18");
export const color19 = document.querySelector("#color19");
export const color20 = document.querySelector("#color20");
export const color21 = document.querySelector("#color21");
export const color22 = document.querySelector("#color22");
export const color23 = document.querySelector("#color23");
export const color24 = document.querySelector("#color24");
export const color25 = document.querySelector("#color25");
export const color26 = document.querySelector("#color26");
export const color27 = document.querySelector("#color27");
export const color28 = document.querySelector("#color28");
export var btnMasivo = document.querySelector("#btnMasivo");
export const btnBuscar = document.querySelector("#btn_consulta1");
export const btnmostrar = document.querySelector("#select");
export const btn_editar = document.querySelector("#btn_editar");
export const btnguardar = document.querySelector("#btnguardar");


export var iconox = "";
export var nomcolor = "";
export var colorico; // variable para guardar el color.
export var nombreColor;
export var Resultado = new Array();
export var mispuntos = new Array();
export var datosTextArea = new Array();


export var iconoBlue = L.icon({
  iconUrl: "img/icoblue.svg",
  iconSize: [30, 40],
});

export var iconogreen = L.icon({
  iconUrl: "img/icogreen.svg",
  iconSize: [30, 40],
});

export var iconoGrenYellow = L.icon({
  iconUrl: "img/icoGreenYellow.svg",
  iconSize: [30, 40],
});
export var iconogrey = L.icon({
  iconUrl: "img/icogrey.svg",
  iconSize: [30, 40],
});

export var iconLightSalmon = L.icon({
  iconUrl: "img/icoLightSalmon.svg",
  iconSize: [30, 40],
});

export var iconoLightSalmon = L.icon({
  iconUrl: "img/icoLightSalmon.svg",
  iconSize: [30, 40],
});

export var iconomagenta = L.icon({
  iconUrl: "img/icomagenta.svg",
  iconSize: [30, 40],
});

export var iconoorange = L.icon({
  iconUrl: "img/icoorange.svg",
  iconSize: [30, 40],
});

export var iconoOrangeRed = L.icon({
  iconUrl: "img/icoOrangeRed.svg",
  iconSize: [30, 40],
});

export var iconoLightSkyBlue = L.icon({
  iconUrl: "img/icoLightSkyBlue.svg",
  iconSize: [30, 40],
});

export var iconopurple = L.icon({
  iconUrl: "img/icopurple.svg",
  iconSize: [30, 40],
});

export var iconoRed = L.icon({
  iconUrl: "img/icored.svg",
  iconSize: [30, 40],
});

export var iconoYellow = L.icon({
  iconUrl: "img/icoyellow.svg",
  iconSize: [30, 40],
});

export var iconoBlack = L.icon({
  iconUrl: "img/icoblack.svg",
  iconSize: [30, 40],
});

export var iconoWhite = L.icon({
  iconUrl: "img/icowhite.svg",
  iconSize: [30, 40],
});

// nuevos colores

export var icoFireBrick = L.icon({
  iconUrl: "img/icoFireBrick.svg",
  iconSize: [30, 40],
});

export var icoIndianRed = L.icon({
  iconUrl: "img/icoIndianRed.svg",
  iconSize: [30, 40],
});

export var icoLavenderBlush = L.icon({
  iconUrl: "img/icoLavenderBlush.svg",
  iconSize: [30, 40],
});

export var icotomato = L.icon({
  iconUrl: "img/icotomato.svg",
  iconSize: [30, 40],
});

export var icoPaleGoldenrod = L.icon({
  iconUrl: "img/icoPaleGoldenrod.svg",
  iconSize: [30, 40],
});

export var icoDarkKhaki = L.icon({
  iconUrl: "img/icoDarkKhaki.svg",
  iconSize: [30, 40],
});

export var icoDarkSlateBlue = L.icon({
  iconUrl: "img/icoDarkSlateBlue.svg",
  iconSize: [30, 40],
});

export var icoMediumPurple = L.icon({
  iconUrl: "img/icoMediumPurple.svg",
  iconSize: [30, 40],
});

export var icoSpringGreen = L.icon({
  iconUrl: "img/icoSpringGreen.svg",
  iconSize: [30, 40],
});

export var icoOlive = L.icon({
  iconUrl: "img/icoOlive.svg",
  iconSize: [30, 40],
});

export var icoLightSeaGreen = L.icon({
  iconUrl: "img/icoLightSeaGreen.svg",
  iconSize: [30, 40],
});

export var icoAquamarine = L.icon({
  iconUrl: "img/icoAquamarine.svg",
  iconSize: [30, 40],
});

export var icoRosyBrown = L.icon({
  iconUrl: "img/icoRosyBrown.svg",
  iconSize: [30, 40],
});



// a qui empieza la asignacion del codigo para el cuadro de color.

color1.addEventListener("click", () => {
  nomcolor = "Azul";
  colorview.id = "color1";
  iconox = iconoBlue;
  cambiarColor(iconox, nomcolor);
});

color2.addEventListener("click", () => {
  nomcolor = "magenta";
  colorview.id = "color2";
  iconox = iconomagenta;
  cambiarColor(iconox, nomcolor);
});

color3.addEventListener("click", () => {
  nomcolor = "Verde";
  colorview.id = "color3";
  iconox = iconogreen;
  cambiarColor(iconox, nomcolor);
});

color5.addEventListener("click", () => {
  nomcolor = "VerdeClaro";
  colorview.id = "color5";
  iconox = iconoGrenYellow;
  cambiarColor(iconox, nomcolor);
});

color6.addEventListener("click", () => {
  nomcolor = "Salmon";
  colorview.id = "color6";
  iconox = iconLightSalmon;
  cambiarColor(iconox, nomcolor);
});

color7.addEventListener("click", () => {
  nomcolor = "Gris";
  colorview.id = "color7";
  iconox = iconogrey;
  cambiarColor(iconox, nomcolor);
});

color8.addEventListener("click", () => {
  nomcolor = "AzulCielo";
  colorview.id = "color8";
  iconox = iconoLightSkyBlue;
  cambiarColor(iconox, nomcolor);
});

color9.addEventListener("click", () => {
  nomcolor = "Naranja";
  colorview.id = "color9";
  iconox = iconoorange;
  cambiarColor(iconox, nomcolor);
});

color10.addEventListener("click", () => {
  nomcolor = "Rojo";
  colorview.id = "color10";
  iconox = iconoRed;
  cambiarColor(iconox, nomcolor);
});

color11.addEventListener("click", () => {
  nomcolor = "Morado";
  colorview.id = "color11";
  iconox = iconopurple;
  cambiarColor(iconox, nomcolor);
});

color12.addEventListener("click", () => {
  nomcolor = "Amarillo";
  colorview.id = "color12";
  iconox = iconoYellow;
  cambiarColor(iconox, nomcolor);
});

color13.addEventListener("click", () => {
  nomcolor = "Negro";
  colorview.id = "color13";
  iconox = iconoBlack;
  cambiarColor(iconox, nomcolor);
});

color14.addEventListener("click", () => {
  nomcolor = "Naranjado";
  colorview.id = "color14";
  iconox = iconoOrangeRed;
  cambiarColor(iconox, nomcolor);
});

color15.addEventListener("click", () => {
  nomcolor = "Blanco";
  colorview.id = "color15";
  iconox = iconoWhite;
  cambiarColor(iconox, nomcolor);
});

// nuevos addEventListener

color16.addEventListener("click", () => {
  nomcolor = "FireBrick";
  colorview.id = "color16";
  iconox = icoFireBrick;
  cambiarColor(iconox, nomcolor);
});

color17.addEventListener("click", () => {
  nomcolor = "IndianRed";
  colorview.id = "color17";
  iconox = icoIndianRed;
  cambiarColor(iconox, nomcolor);
});

color18.addEventListener("click", () => {
  nomcolor = "LavenderBlush";
  colorview.id = "color18";
  iconox = icoLavenderBlush;
  cambiarColor(iconox, nomcolor);
});

color19.addEventListener("click", () => {
  nomcolor = "tomato";
  colorview.id = "color19";
  iconox = icotomato;
  cambiarColor(iconox, nomcolor);
});

color20.addEventListener("click", () => {
  nomcolor = "PaleGoldenrod";
  colorview.id = "color20";
  iconox = icoPaleGoldenrod;
  cambiarColor(iconox, nomcolor);
});


color21.addEventListener("click", () => {
  nomcolor = "DarkKhaki";
  colorview.id = "color21";
  iconox = icoDarkKhaki;
  cambiarColor(iconox, nomcolor);
});

color22.addEventListener("click", () => {
  nomcolor = "DarkSlateBlue";
  colorview.id = "color22";
  iconox = icoDarkSlateBlue;
  cambiarColor(iconox, nomcolor);
});


color23.addEventListener("click", () => {
  nomcolor = "MediumPurple";
  colorview.id = "color23";
  iconox = icoMediumPurple;
  cambiarColor(iconox, nomcolor);
});


color24.addEventListener("click", () => {
  nomcolor = "SpringGreen";
  colorview.id = "color24";
  iconox = icoSpringGreen;
  cambiarColor(iconox, nomcolor);
});


color25.addEventListener("click", () => {
  nomcolor = "Olive";
  colorview.id = "color25";
  iconox = icoOlive;
  cambiarColor(iconox, nomcolor);
});

color26.addEventListener("click", () => {
  nomcolor = "LightSeaGreen";
  colorview.id = "color26";
  iconox = icoLightSeaGreen;
  cambiarColor(iconox, nomcolor);
});

color27.addEventListener("click", () => {
  nomcolor = "Aquamarine";
  colorview.id = "color27";
  iconox = icoAquamarine;
  cambiarColor(iconox, nomcolor);
});

color28.addEventListener("click", () => {
  nomcolor = "RosyBrown";
  colorview.id = "color28";
  iconox = icoRosyBrown;
  cambiarColor(iconox, nomcolor);
});

function cambiarColor(color, nomcolor) {
  colorico = color;
  nombreColor = nomcolor;
  console.log(nombreColor);
};





// cambiar el color de los puntos