const api = "https://api.openweathermap.org/data/2.5/";
const apiKey = "71faecb0a31d8450c95f9b081dc436be";
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");




const input = document.querySelector("#searchBar");

const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(input.value);
    }
}

const getResult = cityName => {
    console.log(cityName);
    let query = `${api}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;

    // console.log(query);
    fetch(query)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })


    const displayResult = veri => {
        console.log(veri);
        city.innerHTML = veri.name;
        temp.innerHTML = Math.floor(veri.main.temp) + "°C";
        desc.innerHTML = veri.weather[0].description;
        minmax.innerHTML = `${Math.floor(veri.main.temp_min)}°C / ${Math.floor(veri.main.temp_max)}°C`;
    }
}

input.addEventListener("keypress", setQuery);