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