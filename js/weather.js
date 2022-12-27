import '/js/config.js'

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
}


function onGeoError() {
    alert("Can't find you. No weather information can be provided.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);