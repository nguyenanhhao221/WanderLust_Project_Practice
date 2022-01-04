//Api to Open Weather
const openWeatherUrl = 'api.openweathermap.org/data/2.5/weather?q=';
const appIdOpenWeather = '35b0e0ec659ad07c5b7f93e6cd25f6d2';


//Element on page
const $container = $('.container');
const $submit = $('#button');
const $input = $('#city');

//Fetch Open Weather API
const getWeather = () => {
    const city = $input.val();

}




const executeSearch = () => {

    $container.css('visibility', 'visible');

    return false;

}
$submit.on('click', executeSearch);