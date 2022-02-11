let map = L.map('map').setView([7.944311, -72.490174], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var iconoBlue = L.icon({iconUrl: "img/icoblue.svg",iconSize: [30, 40],});
var iconogreen = L.icon({iconUrl: "img/icogreen.svg",iconSize: [30, 40],});
var iconoGrenYellow = L.icon({iconUrl: "img/icoGreenYellow.svg",iconSize: [30, 40],});
var iconogrey = L.icon({iconUrl: "img/icogrey.svg",iconSize: [30, 40],});
var iconLightSalmon = L.icon({iconUrl: "img/icoLightSalmon.svg",iconSize: [30, 40],});
var iconoLightSalmon = L.icon({iconUrl: "img/icoLightSalmon.svg",iconSize: [30, 40],});
var iconomagenta = L.icon({iconUrl: "img/icomagenta.svg",iconSize: [30, 40],});
var iconoorange = L.icon({iconUrl: "img/icoorange.svg",iconSize: [30, 40],});
var iconoOrangeRed = L.icon({iconUrl: "img/icoOrangeRed.svg",iconSize: [30, 40],});
var iconoLightSkyBlue = L.icon({iconUrl: "img/icoLightSkyBlue.svg",iconSize: [30, 40],});
var iconopurple = L.icon({iconUrl: "img/icopurple.svg",iconSize: [30, 40],});
var iconoRed = L.icon({iconUrl: "img/icored.svg",iconSize: [30, 40],});
var iconoYellow = L.icon({iconUrl: "img/icoyellow.svg",iconSize: [30, 40],});

L.marker([7.944411,-72.490074],{icon: iconoBlue}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944611,-72.491274],{icon: iconogreen}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.941311,-72.491074],{icon: iconoGrenYellow}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.949411,-72.490074],{icon: iconogrey}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.947611,-72.490274],{icon: iconoLightSalmon}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.942311,-72.491074],{icon: iconoLightSkyBlue}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.943411,-72.490074],{icon: iconomagenta}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.945611,-72.490274],{icon: iconoorange}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944911,-72.491074],{icon: iconoOrangeRed}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944811,-72.490074],{icon: iconopurple}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944611,-72.490274],{icon: iconoRed}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944711,-72.491074],{icon: iconoYellow}).addTo(map).bindPopup("CLIENTE: de prueba");


// const svgMarker = L.icon({
//     path: d="M266.666,0C174.618,0,100,74.619,100,166.667c0,166.667,166.667,366.667,166.667,366.667s166.667-200,166.667-366.66C433.333,74.619,358.713,0,266.666,0z M266.666,266.667c-55.229,0-100-44.771-100-100c0-55.229,44.771-100,100-100c55.229,0,100,44.771,100,100C366.666,221.896,321.895,266.667,266.666,266.667z",
//     fillColor: "red",
//     fillOpacity: 1,
//     strokeWeight: 0,
//     rotation: 0,
//     scale: .055,
//     anchor: new google.maps.Point(15, 30),
// });
  







        



