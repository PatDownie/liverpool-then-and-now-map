var map = L.map("map").setView([53.40578260174832, -2.995853357868761], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const iconSize1 = [26, 49];
const iconAnchor1 = [13, 49];
const popupAnchor1 = [0, -50];

const NIcon = L.icon({
  iconUrl: "./images/icons/N.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const EIcon = L.icon({
  iconUrl: "./images/icons/E.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const SIcon = L.icon({
  iconUrl: "./images/icons/S.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const WIcon = L.icon({
  iconUrl: "./images/icons/W.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const NEIcon = L.icon({
  iconUrl: "./images/icons/NE.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const SEIcon = L.icon({
  iconUrl: "./images/icons/SE.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const SWIcon = L.icon({
  iconUrl: "./images/icons/SW.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});
const NWIcon = L.icon({
  iconUrl: "./images/icons/NW.png",
  iconSize: iconSize1,
  iconAnchor: iconAnchor1,
  popupAnchor: popupAnchor1,
});

const markerArray = [
  {
    name: "Whitechapel from Paradise Street, 1950s and 2023",
    latLong: [53.40518132609905, -2.985905975666107],
    imgURL: "./images/whitechapel1.jpg",
    icon: NEIcon,
  },
  {
    name: "Church Street, 1930s and 2022",
    latLong: [53.40529573313214, -2.9849590525915013],
    imgURL: "./images/2222.jpg",
    icon: NEIcon,
  },
  {
    name: "Dale Street, late 1970s or early 1980s and 2024",
    latLong: [53.40717600659358, -2.991264353739935],
    imgURL: "./images/3333.jpg",
    icon: SEIcon,
  },
  {
    name: "Union Court, undated and 2024<br>This is looking up towards Castle Street, with Cook Street off to the left as we look",
    latLong: [53.4064880764661, -2.9895014532518767],
    imgURL: "./images/4444.jpg",
    icon: WIcon,
  },
  {
    name: "Royal Liver Building, 1950s and 2024",
    latLong: [53.407065857542, -2.9951273582150875],
    imgURL: "./images/5555.jpg",
    icon: SIcon,
  },
];

for (let i = 0; i <= markerArray.length - 1; i++) {
  var marker = L.marker(markerArray[i].latLong, {
    riseOnHover: true,
    icon: markerArray[i].icon,
  }).addTo(map);
  marker.bindPopup(
    `${markerArray[i].name}<br><br><img class="popupImage" src="${
      markerArray[i].imgURL
    }" alt="Image of ${
      markerArray[i].name
    }"><br><a class="fullscreenButton" href="http://127.0.0.1:5500${markerArray[
      i
    ].imgURL.slice(1)}">View fullscreen</a>`,
    { minWidth: 230, autoPan: true }
  );
}
