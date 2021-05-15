"use string";

window.onload = () => {

  const token = "pk.eyJ1IjoiYWthaXJldHMiLCJhIjoiY2tvOG45MzczMm92aTJ2bXZwdDQ5dGlwaiJ9.ZO4wA1A_aNFUXojPJ3lB6Q"
  const map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: token,
}).addTo(map);
var greenIcon = new L.Icon({
  iconUrl: 'file:///D:/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5/%D0%9A%D1%83%D1%80%D1%81%D1%8B/lessons/40_(JS)_%D0%AD%D0%9A%D0%97%D0%90%D0%9C%D0%95%D0%9D_fin/images/6_icons/Pin.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [56, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
let address = document.querySelector('.contacts__address');
address.addEventListener("click", (event) => {
  console.log(address.getAttribute('class'))
  if(address.classList.contains('addRight')){
    address.classList.add('nullRight')
    address.classList.remove("addRight");
  }else {
    address.classList.remove("nullRight");
    address.classList.add('addRight')
  }
  
});

let phone = document.querySelector('.contacts__phone');
phone.addEventListener("click", (event) => {
  console.log(phone.getAttribute('class'))
  if(phone.classList.contains('addRight')){
    phone.classList.add('nullRight')
    phone.classList.remove("addRight");
  }else {
    phone.classList.remove("nullRight");
    phone.classList.add('addRight')
  }
  
});

const marker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

};




