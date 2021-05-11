import{Animal} from './animal.js'

export class TreeFrog extends Animal {
  constructor(name, color, gender) {
    super(name, color);
    this.gender = gender;
    this.weather = this.#createWeatherForcast();
    this.weatherForm = document.getElementById('weatherForm')
    
    this.weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    this.getActualWeatherForCity();
    
    })
  }

  

  #createWeatherForcast() {
    let weatherParagraph = document.getElementById("weather");
    if (!weatherParagraph) {
      weatherParagraph = document.createElement("p");
      weatherParagraph.id = "weather";
      document.body.appendChild(weatherParagraph);
      return weatherParagraph;
    }
    return document.getElementById("weather");
  }

  informWorld(message) {
    super.informWorld(message);
    if (!this._dead) {
      this.news.innerHTML += " kvak";
    }
    /*this.news.innerHTML += ("<br>"+ "Animal"
        + this.name + " " +message)*/
  }
  getActualWeatherForCity() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+
    city + '%2C%20' + state + '&key=20604eeef7484d63bf15c9b8a81c4ee5'
    )
    .then((resp) => {
        if (!resp.ok) {
          return resp.statusText + " " + resp.status;
        } else {
           return resp.json();
       }
    })
      .then((json) => {
        console.log(json)// druhý fetch 
        // this.weather.innerHTML += "<br>" + this.constructor.name + " " + this.name + " " + JSON.stringify(json);\
      const lat = json.results[0].geometry.lat
      const lng = json.results[0].geometry.lng
      const api = '244fdc92fa012aa567aca3295f5c5047';
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat +'&lon='+ lng + '&exclude=hourly,daily,minutely,alerts' + '&appid=' +api +'&units=metric')
      .then((resp) => {
        if (!resp.ok) {
          return resp.statusText + " " + resp.status;
        } else {
           return resp.json();
       }
      })
      .then(jsonWeather => {
        this.weather.innerHTML += `<div id="weatherInfo"> 
        <p id="cityState">  ${city} ${state}  </p> 
        <br> <img id="img" src=\http://openweathermap.org/img/wn/${jsonWeather.current.weather[0].icon}@2x.png\> <br>
        <br> <p id="temp"> ${Math.round(jsonWeather.current.temp)} °C </p>
        <br> <p id="description"> ${jsonWeather.current.weather[0].description} </p>
        </div>`
        
        
    })

        

  })

    
     


    //window.open('http://www.shmu.sk/');
  }

    makeSound() {
    if (this._dead) {
      this.informWorld("...");
    } else {
      this.informWorld("kvak");
    }
  }
}

