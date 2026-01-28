function CelsiusToFahrenheit(c){
  return(c*9/5) + 32;
}

function CelciusToKelvin(c){
  return c + 273.15;
}

function AddDescription(c){
  if (c<0){
    return "Freezing";
  }
  if(c<10){
    return "cold";
  }
  if(c<20){
    return "Mild";
  }
  if(c<30){
    return "Warm";
  }
  return "Hot";
}

function getWindChill(celsius, windKmPerHour) {
    let windPower = Math.pow(windKmPerHour, 0.16);
    
    let answer = 13.12 +
                 0.6215 * celsius -
                 11.37 * windPower +
                 0.3965 * celsius * windPower;
    
    return answer;
}
function showWeather(cityName, celsius, windSpeed) {
    
    let fahrenheit = CelsiusToFahrenheit(celsius);
    let kelvin     = CelciusToKelvin(celsius);
    
  
    let feeling = AddDescription(celsius);
    
    
    console.log("Weather Report for " + cityName);
    console.log("Temperature: " + celsius + "°C");
    console.log("Temperature: " + fahrenheit + "°F");
    console.log("Temperature: " + kelvin + "K");
    console.log("Status: " + feeling);
    console.log("---");
    
    
    if (windSpeed > 0) {
        let chill = getWindChill(celsius, windSpeed);
        console.log("Wind chill in " + cityName + ": " + chill.toFixed(1) + "°C");
    }
}

let name1 = "Amsterdam";
let temp1 = 22;
let wind1 = 15;
showWeather(name1, temp1, wind1);


let name2 = "Berlin";
let temp2 = 15;
let wind2 = 20;
showWeather(name2, temp2, wind2);


let name3 = "Copenhagen";
let temp3 = -5;
let wind3 = 25;
showWeather(name3, temp3, wind3);

let name4 = "Nairobi";
let temp4 = 20;
let wind4 = 12;
showWeather(name4, temp4, wind4);

let name5 = "Paris";
let temp5 = -2;
let wind5 = 30;
showWeather(name5, temp5, wind5);