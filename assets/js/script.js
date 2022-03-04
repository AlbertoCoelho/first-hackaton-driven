const apiKey = 'f25110b0f83adb9f7c080ee182cd1d00';

navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  executarAPI(position.coords.latitude, position.coords.longitude);
});

function executarAPI(latitude, longitude) {
  const promessa = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );

  promessa.then(dados => {
    console.log(dados);
  });

  promessa.catch(erro => {});
}



function qualLocalizacao(){
    let lat = document.querySelector(".latidude")
    let long = document.querySelector(".longitude")
    lat = lat.value
    long = long.value
    console.log(lat, long);
    console.log("33");
}
