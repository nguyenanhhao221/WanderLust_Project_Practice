const createWeatherHTML = currentDay => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `<h2>${weekDays[(new Date).getDay()]}</h2>
            <h2>Temperature: ${currentDay.main.temp} &deg;C</h2>
            <h2>Condition: ${currentDay.weather[0].description}</h2>
            <img class = "weathericon" src="http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png" alt="">`;
};