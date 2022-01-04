//Api to Open Weather
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appIdOpenWeather = '35b0e0ec659ad07c5b7f93e6cd25f6d2';
const celsiusDegree = 'metric';

//Api to Foursquare venues
const url = 'https://api.foursquare.com/v3/places/search?';
const apiKeyFourSquare = 'fsq3a06tqE6OHneh2BmZpUqZpREVdKw1DsxEcMxgDGcbKdQ=';

//Element on page
const $container = $('.container');
const $submit = $('#button');
const $input = $('#city');
const $destination = $('#destination');
const $weather = $('#weather1');
const $venueDiv = [$('#venue1'), $('#venue2'), $('#venue3'), $('#venue4')];

//Fetch Open Weather API
const getWeather = async() => {
        const city = $input.val();
        const urlToFetch = `${openWeatherUrl}${city}&appid=${appIdOpenWeather}&units=${celsiusDegree}`;
        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Request failed');

        } catch (error) {
            console.log(error);
        }
    }
    // Render the Weather into the Page
const renderForecast = day => {
    // @ts-ignore
    const weatherContent = createWeatherHTML(day);
    $destination.append(`<h2>${day.name}</h2>`)
    $weather.append(weatherContent);
    return;
}


//Fetch Foursquare API
const getForecast = async() => {
    const city = $input.val();
    const limitResult = 5;
    const urlToFetch = `${url}near=${city}&limit=${limitResult}`;
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: apiKeyFourSquare
        }
    };
    try {
        const response = await fetch(urlToFetch, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            // console.log(jsonResponse);
            return jsonResponse;
        }
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }

}

//Render Top Result of Foursquare on the page
const renderPlaces = jsonResponse => {
    let resultArr = jsonResponse.results;
    $venueDiv.forEach(($venue, index) => {
        let placesContent = createPlacesHTML(resultArr, index);
        $venue.append(placesContent);
    })
}



const executeSearch = () => {
    $container.css('visibility', 'visible');;
    $destination.empty();
    $weather.empty();
    $venueDiv.forEach(place => place.empty());
    getWeather().then(weather => renderForecast(weather));
    getForecast().then(place => renderPlaces(place));
    return false;
}
$submit.on('click', executeSearch);