const apiKey = "a45d140b8ff43b07b78b9b3d1407f0e6";

let form = document.querySelector('.something');
form.addEventListener('click', (event) => {
    event.preventDefault();
    let cityInputs = document.getElementById('cityInput').value;
    console.log(cityInputs);
    getCityOutput(cityInputs);
});

let getCityWeather = async (cityInputs) => {
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputs}&appid=${apiKey}&units=imperial`);
        return response.data;
    }
    catch (error) {
        alert("You've entered the city incorrectly.");
    }
};

let getCityOutput = async (cityInputs) => {
    let data = await getCityWeather(cityInputs);
    console.log(data);
    let cityWeather = `City: ${data['name']}\n`+`Min Temp: ${data['main']['temp_min']} F\n`+`Max Temp: ${data['main']['temp_max']} F\n`+` Humidity: ${data['main']['humidity']}%\n`+`Forecast: ${data['weather'][0]['description']}\n`;
    document.getElementById('cityOutput').insertAdjacentHTML('afterbegin', cityWeather);
};

let clearCityData = () => {
    document.getElementById('cityOutput').innerHTML = '';
};