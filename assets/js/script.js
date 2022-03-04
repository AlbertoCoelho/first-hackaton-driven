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
      exibirMenu(cidade);
    }
  );
}




function pegarDadosAPI(latitude, longitude) {
    const promessa = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );

    promessa.then(dados => {
        console.log(dados);
        dados = dados.data
        
        let cidade = dados.name

        let icone = dados.weather;
        
        console.log(icone);

        let temperatura = dados.main.temp
        temperatura = (temperatura - 273).toFixed(0);
        
        const  tela1 = document.querySelector(".container-esquerdo")

        tela1.innerHTML= `
        <div>
            Nome da cidade onde voce está: ${cidade}
        </div>
            
        <div class="clima">
            A temperatura é: ${temperatura}ºC
            <img class="clima__icone" src="http://openweathermap.org/img/wn/${icone[0].icon}@2x.png">
        </div>
        
        `

    });
}


function exibirMenu() {
    const menuClima = document.querySelector(".tabela-clima");
    const promessa = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
      );

      promessa.then(dados => {
          let now = new Date;
          menuClima.innerHTML += "Hoje é " + now.getDay() + "," + " de " + now.getMonth() + " de " + now.getFullYear() + `${dados.data.weather[0].description}`   + ` ${dados.data.wind.speed}`; 
      });
      
}
exibirMenu();

function pegarDadosCidadeAPI(cidade) {
  console.log(cidade);
  const promessa = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
  );

  promessa.then(dados => {
    console.log(dados);
    mostrarNaTela(dados)
  });

  promessa.catch(() => {
    alert('Digite um nome de cidade válido');
    const cidade = prompt('Qual é a sua cidade?');
    pegarDadosCidadeAPI(cidade);
  });
}


function mostrarNaTela(dados){
    console.log(dados.data);
    dados = dados.data
        
        let cidademaneira = dados.name

        let icone = dados.weather;
        
        console.log(icone);

        let temperatura = dados.main.temp
        temperatura = (temperatura - 273).toFixed(0);
        
        const  tela1 = document.querySelector(".container-esquerdo")

        tela1.innerHTML= `
        <div>
            Nome da cidade onde voce está: ${cidademaneira}
        </div>
            
        <div class="clima">
            A temperatura é: ${temperatura}ºC
            <img class="clima__icone" src="http://openweathermap.org/img/wn/${icone[0].icon}@2x.png">
        </div>
        
        `

    };
