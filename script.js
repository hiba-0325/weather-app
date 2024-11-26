const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "httpshttps://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weaather-icon");

async function  checkWeather(city) {
    const response= await fetch (apiUrl + city +` &appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error".state.display="block")
        document.querySelector(".weather").computedStyleMap.display="none";
    }else {
        var data = await response.json();
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"*C";
        document.querySelector(".humidity").innerHTML= data.wind.speed +"km/h"

    }
}