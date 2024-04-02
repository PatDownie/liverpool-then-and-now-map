var map = L.map("map").setView([53.40578260174832, -2.995853357868761], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markerArray = [
  {
    name: "Liver Building",
    lat: 53.40578260174832,
    long: -2.995853357868761,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Royal_Liver_Building.jpg",
  },
  {
    name: "Cunard Building",
    lat: 53.4051857791141,
    long: -2.9953152882309095,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Cunard_Building_Front.jpg",
  },
  {
    name: "Port of Liverpool Building",
    lat: 53.40436383272154,
    long: -2.9948730089529043,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Port_of_Liverpool_building_-_2012-05-27_%285%29.JPG",
  },
  {
    name: "The Anglican Cathedral",
    lat: 53.3975060572455,
    long: -2.973235006524199,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LIVERPOOL_ANGLICAN_CATHEDRAL_SEP2012_%287916053494%29.jpg/1200px-LIVERPOOL_ANGLICAN_CATHEDRAL_SEP2012_%287916053494%29.jpg",
  },
  {
    name: "The Metropolitan Cathedral",
    lat: 53.404898962176816,
    long: -2.968603392263262,
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Liverpool_Metropolitan_Cathedral_Exterior%2C_Liverpool%2C_UK_-_Diliff.jpg",
  },
];

for (let i = 0; i <= markerArray.length - 1; i++) {
  var marker = L.marker([markerArray[i].lat, markerArray[i].long], {
    riseOnHover: true,
  }).addTo(map);
  marker.bindPopup(
    `<b>This is:</b><br>${markerArray[i].name}<br><img class="popupImage" src="${markerArray[i].imgURL}" alt="Image of ${markerArray[i].name}">`
  );
}
