let color = document.querySelector("#color");

function iniciarMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 7.944411, lng: -72.490074 },

  });

  setMarkers(map);




}

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

const beaches = [
  [{ lat: 7.887821, lng: -72.497236 }, "<b>Nombre:</b> GONZALO RODRIGUEZ GRANADOS<br/><b>Direccion:</b> AVE 4E 27-34 INT 7 - CHAPARRAL<br/><b>Ciclo:</b> 102<br/><b>Area:</b> urbano"],
  [{ lat: 7.913796, lng: -72.506445 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>103<br/>urbano"],
  [{ lat: 7.888811, lng: -72.517078 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>104<br/>urbano"],
  [{ lat: 7.90707, lng: -72.522556 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>105<br/>urbano"],
  [{ lat: 7.90649, lng: -72.515235 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>106<br/>urbano"],
  [{ lat: 7.37937, lng: -72.629716 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>107<br/>urbano"],
  [{ lat: 7.888613, lng: -72.53254 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>108<br/>urbano"],
  [{ lat: 8.232296, lng: -72.428072 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>109<br/>urbano"],
  [{ lat: 8.225604, lng: -72.537716 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>110<br/>urbano"],
  [{ lat: 8.635638, lng: -72.736236 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>111<br/>urbano"],
  [{ lat: 7.947901, lng: -72.508881 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>112<br/>urbano"],
  [{ lat: 7.962818, lng: -72.60859 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>113<br/>urbano"],
  [{ lat: 7.908274, lng: -72.513685 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>114<br/>urbano"],
  [{ lat: 7.866897, lng: -72.502473 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>115<br/>urbano"],
  [{ lat: 7.84764, lng: -72.520665 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>116<br/>urbano"],
  [{ lat: 7.871318, lng: -72.522385 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>117<br/>urbano"],
  [{ lat: 7.876498, lng: -72.509781 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>118<br/>urbano"],
  [{ lat: 7.873855, lng: -72.505811 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>119<br/>urbano"],
  [{ lat: 7.904748, lng: -72.509302 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>120<br/>urbano"],
  [{ lat: 7.944411, lng: -72.490074 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>121<br/>urbano"],
  [{ lat: 7.833731, lng: -72.497199 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>122<br/>urbano"],
  [{ lat: 7.918191, lng: -72.474898 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>123<br/>urbano"],
  [{ lat: 7.943231, lng: -72.504268 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>124<br/>urbano"],
  [{ lat: 7.822042, lng: -72.462974 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>125<br/>urbano"],
  [{ lat: 7.917023, lng: -72.504004 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>126<br/>urbano"],
  [{ lat: 7.813625, lng: -72.474699 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>127<br/>urbano"],
  [{ lat: 7.823958, lng: -72.477633 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>128<br/>urbano"],
  [{ lat: 8.637221, lng: -72.735058 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>129<br/>urbano"],
  [{ lat: 7.819776, lng: -72.480621 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>130<br/>urbano"],
  [{ lat: 7.843135, lng: -72.467033 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>131<br/>urbano"],
  [{ lat: 7.907771, lng: -72.50666 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>132<br/>urbano"],
  [{ lat: 8.231154, lng: -72.429784 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>133<br/>urbano"],
  [{ lat: 7.870154, lng: -72.518852 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>134<br/>urbano"],
  [{ lat: 7.824093, lng: -72.464507 }, "GONZALO RODRIGUEZ GRANADOS<br/>AVE 4E 27-34 INT 7 - CHAPARRAL<br/>135<br/>urbano"],


];


function setMarkers(map, clrico) {

  let clrIco = "red";

  const svgMarker = {
    path: d = "M266.666,0C174.618,0,100,74.619,100,166.667c0,166.667,166.667,366.667,166.667,366.667s166.667-200,166.667-366.66C433.333,74.619,358.713,0,266.666,0z M266.666,266.667c-55.229,0-100-44.771-100-100c0-55.229,44.771-100,100-100c55.229,0,100,44.771,100,100C366.666,221.896,321.895,266.667,266.666,266.667z",
    fillColor: clrIco,
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: .055,
    anchor: new google.maps.Point(15, 30),
  };



  const infoWindow = new google.maps.InfoWindow();

  beaches.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      // draggable: true,  
      icon: svgMarker,
      animation: google.maps.Animation.DROP,
      title: `${title}`,
      // label: `${i + 1}`,
      optimized: false,

    });


    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      clrIco = "blue";
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);

    });



  });



  //   for (let i = 0; i < beaches.length; i++) {
  //     const beach = beaches[i];

  //     new google.maps.Marker({
  //       position: { lat: beach[1], lng: beach[2] },
  //       map,
  //       icon: svgMarker,
  //       shape: shape,
  //       title: beach[0],
  //       zIndex: beach[3],
  //       optimized: true,
  //     });
}




