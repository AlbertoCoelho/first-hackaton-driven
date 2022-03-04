const apiKey = 'f25110b0f83adb9f7c080ee182cd1d00';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            executarAPI(position.coords.latitude, position.coords.longitude);
        },
        () => {
            const latitude = prompt('Qual é a latitude?');
            const longitude = prompt('Qual é a longitude?');
            executarAPI(latitude, longitude);
        }
    );
}

let icone = null

function executarAPI(latitude, longitude) {
    const promessa = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );

    promessa.then(dados => {
        console.log(dados);
        dados = dados.data
        
        let cidade = dados.name

        icone = dados.weather;
        
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

    promessa.catch(erro => {
        const latitude = prompt('Qual é a latitude?');
        const longitude = prompt('Qual é a longitude?');
        executarAPI(latitude, longitude);
    });
}



