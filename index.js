function searchWeather() {
    const apiKey = "48aff911e92a80737f5d42396d8d8b02";
    const searchInput = document.getElementById("searchInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ", " + data.sys.country;
            const temperature = Math.round(data.main.temp - 273.15) + "°C";
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            document.getElementById("location").innerText = location;
            document.getElementById("temperature").innerText = temperature;
            document.getElementById("description").innerText = description;
            document.getElementById("weather-icon").src = iconUrl;
        })
        .catch(error => console.error("Error fetching data:", error));
}