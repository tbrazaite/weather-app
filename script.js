"use strict"

var apikey = "3265874a2c77ae4a04bb96236a642d2f";
var main = document.getElementById("main")
var search = document.getElementById("search")
var form = document.getElementById("form")


// uzkrauna info is API 
function loadApi(city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).then(response => response.json())
}

// uzkrauna info i dom
function appendData(data){
    // isvalo main sekcija
    main.innerHTML = "";

    var weather = document.createElement("div");
    weather.classList.add("weather");
    var temp = data.main.temp - 273;
    temp = Math.floor(temp);
    var icon = data.weather[0].icon
    weather.innerHTML = 
    `
            <h2>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon">
                ${temp}°C
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon">
            </h2>
    `
    main.append(weather)
    console.log(data)
}



form.addEventListener("submit", function(e){
    // neleidzia perkrauti svetaines
    e.preventDefault()

    // fetch data
    if(search.value){
        loadApi(search.value).then(appendData)

        // isvalo search input
        search.value = "";
    }
   
})