const input = document.querySelector("#ip-input");
const ip = document.querySelector("#ip");
const place = document.querySelector("#location");
const timezone = document.querySelector("#timezone");
const isp = document.querySelector("#isp");
const requestButton = document.querySelector("#request-button");
let map;
let marker;

input.addEventListener("focus", () => {
    input.placeholder = "";
})
input.addEventListener("blur", () => {
    input.placeholder = "Search for any IP address or domain";
})
requestButton.addEventListener("click", () => {
    let rule = /(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g;
    if (rule.test(input.value)){
        request(input.value);
    }
})
async function request(input=""){
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_PfSwL7KYOdGa84BTalnHZSbdX7bSp&ipAddress=${input}`);
    const data = await response.json();
    console.log(data);
    setMap(Number(data["location"]["lat"]), Number(data["location"]["lng"]));

    ip.innerHTML = data["ip"];
    place.innerHTML = data["location"]["city"] + data["location"]["postalCode"];
    timezone.innerHTML = "UTC" + data["location"]["timezone"];
    isp.innerHTML = data["isp"];
}
function setMap(lat, lng){
    if (!map){
        map = L.map('map', {zoomControl: false}).setView([lat, lng], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        }).addTo(map);
        map.attributionControl.setPrefix('')
        let greenIcon = L.icon({
            iconUrl: './images/icon-location.svg',
            shadowUrl: '',
        
            iconSize:     [46, 56], 
            shadowSize:   [0, 0], 
            iconAnchor:   [23, 56], 
            shadowAnchor: [0, 0],  
            popupAnchor:  [46, 56]
        });
        marker = L.marker([lat, lng], {icon: greenIcon}).addTo(map);
    }
    else{
        map.removeLayer(marker);
        map.setView([lat,lng], 13);
        let greenIcon = L.icon({
            iconUrl: './images/icon-location.svg',
            shadowUrl: '',
        
            iconSize:     [46, 56], 
            shadowSize:   [0, 0], 
            iconAnchor:   [23, 56], 
            shadowAnchor: [0, 0],  
            popupAnchor:  [46, 56]
        });
        marker = L.marker([lat, lng], {icon: greenIcon}).addTo(map);
    }
}

request();