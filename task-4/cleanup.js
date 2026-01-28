function CelsiusToFahrenheit(c){
  return(c*9/5) + 32;
}

function CelciusToKelvin(c){
  return c + 273.15;
}

function adddescription(c){
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
