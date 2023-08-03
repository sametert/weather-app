const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "71faecb0a31d8450c95f9b081dc436be";
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const desc = document.querySelector(".desc");
const minmax = document.querySelector(".minmax");

//default

const weatherDefault = () => {
    let request = `${api}ankara&appid=${apiKey}&units=metric&lang=tr`;

    fetch(request)
        .then(response => response.json())
        .then(data => weatherDflt(data));


    const weatherDflt = (data) => {
        temp.innerHTML   =  Math.floor(data.main.temp) + "°C";
        desc.innerHTML   = data.weather[0].description;
        minmax.innerHTML = `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`;
    }
}
weatherDefault();


const setQuery = e => {
    if (e.keyCode == "13") {
        getResult(input.value);
    }
}

const getResult = cityName => {
    let query = `${api}${cityName}&appid=${apiKey}&units=metric&lang=tr`;

    fetch(query)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(() => alert("Hatalı veya eksik şehir ismi girdiniz."))


    const displayResult = veri => {
        city.innerHTML = veri.name;
        temp.innerHTML = Math.floor(veri.main.temp) + "°C";
        desc.innerHTML = veri.weather[0].description;
        minmax.innerHTML = `${Math.floor(veri.main.temp_min)}°C / ${Math.floor(veri.main.temp_max)}°C`;
    }
}



//first step
const input = document.querySelector("#searchBar");
input.addEventListener("keypress", setQuery);