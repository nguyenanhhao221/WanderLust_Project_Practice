//Api to Open Weather
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appIdOpenWeather = '35b0e0ec659ad07c5b7f93e6cd25f6d2';
const celsiusDegree = 'metric';

//Api to Foursquare venues

// const apiKey = process.env.API_KEY;
const url = 'https://api.foursquare.com/v3/places/search?';

//Element on page
const $container = $('.container');
const $submit = $('#button');
const $input = $('#city');
const $destination = $('#destination');
const $weather = $('#weather1');

//Fetch Open Weather API
const getWeather = async() => {
        const city = $input.val();
        const urlToFetch = `${openWeatherUrl}${city}&appid=${appIdOpenWeather}&units=${celsiusDegree}`;
        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                // console.log(jsonResponse);
                return jsonResponse;
            }
            throw new Error('Request failed');

        } catch (error) {
            console.log(error);
        }
    }
    // Render the Weather into the Page
const renderForecast = day => {
    const weatherContent = createWeatherHTML(day);
    $destination.append(`<h2>${day.name}</h2>`)
    $weather.append(weatherContent);
    return;
}




const executeSearch = () => {

    $container.css('visibility', 'visible');
    $weather.empty();
    getWeather().then(weather => renderForecast(weather));
    return false;

}
$submit.on('click', executeSearch);