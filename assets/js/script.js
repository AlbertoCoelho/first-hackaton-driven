const apiKey = 'f25110b0f83adb9f7c080ee182cd1d00';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      pegarDadosAPI(position.coords.latitude, position.coords.longitude);
    },
    () => {
      const cidade = prompt('Qual é a sua cidade?');
      pegarDadosCidadeAPI(cidade);
    }
  );
}

function pegarDadosAPI(latitude, longitude) {
  const promessa = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  );

  promessa.then(dados => {
    console.log(dados);
  });

  promessa.catch(erro => {});
}

function exibirMenu() {
    const menuClima = document.querySelector(".tabela-clima");
    let now = new Date;
    menuClima.innerHTML += "Hoje é " + now.getDay() + "," + " de " + now.getMonth() + " de " + now.getFullYear() + "  saddsaasddasasd  " + "adsdsadasdasdasdasdas"; 
}
exibirMenu();

function pegarDadosCidadeAPI(cidade) {
  console.log(cidade);
  const promessa = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
  );

  promessa.then(dados => {
    console.log(dados);
  });

  promessa.catch(() => {
    alert('Digite um nome de cidade válido');
    const cidade = prompt('Qual é a sua cidade?');
    pegarDadosCidadeAPI(cidade);
  });
}
