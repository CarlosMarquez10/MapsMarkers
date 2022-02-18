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

var iconoBlue = L.icon({ iconUrl: "img/icoblue.svg", iconSize: [30, 40] });
var iconogreen = L.icon({ iconUrl: "img/icogreen.svg", iconSize: [30, 40] });
var iconoGrenYellow = L.icon({
  iconUrl: "img/icoGreenYellow.svg",
  iconSize: [30, 40],
});
var iconogrey = L.icon({ iconUrl: "img/icogrey.svg", iconSize: [30, 40] });
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
var iconoorange = L.icon({ iconUrl: "img/icoorange.svg", iconSize: [30, 40] });
var iconoOrangeRed = L.icon({
  iconUrl: "img/icoOrangeRed.svg",
  iconSize: [30, 40],
});
var iconoLightSkyBlue = L.icon({
  iconUrl: "img/icoLightSkyBlue.svg",
  iconSize: [30, 40],
});
var iconopurple = L.icon({ iconUrl: "img/icopurple.svg", iconSize: [30, 40] });
var iconoRed = L.icon({ iconUrl: "img/icored.svg", iconSize: [30, 40] });
var iconoYellow = L.icon({ iconUrl: "img/icoyellow.svg", iconSize: [30, 40] });

var iconox = "";

color1.addEventListener("click", () => {
    colorview.id = "color1";
    iconox = iconoBlue;
    cambiarColor(iconox);
  });
  
  color2.addEventListener("click", () => {
    colorview.id = "color2";
    iconox = iconogreen;
    cambiarColor(iconox);
  });
  
  color3.addEventListener("click", () => {
    colorview.id = "color3";
    iconox = iconoGrenYellow;
    cambiarColor(iconox);
  });
  
  color5.addEventListener("click", () => {
    colorview.id = "color5";
    iconox = iconogrey;
    cambiarColor(iconox);
  });
  
  color6.addEventListener("click", () => {
    colorview.id = "color6";
    iconox = iconLightSalmon;
    cambiarColor(iconox);
  });
  
  color7.addEventListener("click", () => {
    colorview.id = "color7";
    iconox = iconomagenta;
    cambiarColor(iconox);
  });
  
  color8.addEventListener("click", () => {
    colorview.id = "color8";
    iconox = iconoorange;
    cambiarColor(iconox);
  });
  
  color9.addEventListener("click", () => {
    colorview.id = "color9";
    iconox = iconoOrangeRed;
    cambiarColor(iconox);
  });
  
  color10.addEventListener("click", () => {
    colorview.id = "color10";
    iconox = iconoLightSkyBlue;
    cambiarColor(iconox);
  });
  
  color11.addEventListener("click", () => {
    colorview.id = "color11";
    iconox = iconoOrangeRed;
    cambiarColor(iconox);
  });
  
  color12.addEventListener("click", () => {
    colorview.id = "color12";
    iconox = iconopurple;
    cambiarColor(iconox);
  });
  
  color13.addEventListener("click", () => {
    colorview.id = "color13";
    iconox = iconoRed;
    cambiarColor(iconox);
  });
  
  color14.addEventListener("click", () => {
    colorview.id = "color14";
    iconox = iconoYellow;
    cambiarColor(iconox);
  });
  
  color15.addEventListener("click", () => {
    colorview.id = "color15";
    iconox = iconoRed;
    cambiarColor(iconox);
  });
  





function cambiarColor(iconox){

    var colorIcono = iconox

    L.marker.addEventListener("click", CrearIcono(colorIcono));


};

function CrearIcono(colorIcono){

    L.marker.addEventListener('click',pasardato(colorIcono));


}

function pasardato(colorIcono){
    L.marker([7.885161, -72.482252], {icon: colorIcono}).addTo(map).bindPopup("dato uno color")

}
