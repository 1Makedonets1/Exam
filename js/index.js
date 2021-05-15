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
  iconUrl: '../images/6_icons/Pin.png',
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




