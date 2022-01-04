const createWeatherHTML = currentDay => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `<h2>${weekDays[(new Date).getDay()]}</h2>
            <h2>Temperature: ${currentDay.main.temp} &deg;C</h2>
            <h2>Condition: ${currentDay.weather[0].description}</h2>
            <img class = "weathericon" src="http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png" alt="">`;
};

const createPlacesHTML = (resultArr, index) => {
    return `<h2>${resultArr[index].name}</h2>
           <img class = "venueimage"src="${resultArr[index].categories[0].icon.prefix}bg_64${resultArr[index].categories[0].icon.suffix}" alt="icon" />
           <h3>Address:</h3>
           <p>${resultArr[index].location.address}</p> 
           <p>${resultArr[index].location.locality}</p>
           <p>${resultArr[index].location.admin_region}</p>
           `;
}