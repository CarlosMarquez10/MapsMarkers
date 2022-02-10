let map = L.map('map').setView([7.944311, -72.490174], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var iconoDefecto = L.icon({iconUrl: "img/avatar.png",
iconSize: [30, 40],

});
L.marker([7.944411,-72.490074],{icon: iconoDefecto}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944611,-72.490274],{icon: iconoDefecto}).addTo(map).bindPopup("CLIENTE: de prueba");
L.marker([7.944311,-72.491074],{icon: iconoDefecto}).addTo(map).bindPopup("CLIENTE: de prueba");

// const svgMarker = L.icon({
//     path: d="M266.666,0C174.618,0,100,74.619,100,166.667c0,166.667,166.667,366.667,166.667,366.667s166.667-200,166.667-366.66C433.333,74.619,358.713,0,266.666,0z M266.666,266.667c-55.229,0-100-44.771-100-100c0-55.229,44.771-100,100-100c55.229,0,100,44.771,100,100C366.666,221.896,321.895,266.667,266.666,266.667z",
//     fillColor: "red",
//     fillOpacity: 1,
//     strokeWeight: 0,
//     rotation: 0,
//     scale: .055,
//     anchor: new google.maps.Point(15, 30),
// });
  







        



