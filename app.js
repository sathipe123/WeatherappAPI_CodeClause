const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a16d880398msh412b0b677c596fcp1e7883jsnfab4b0649e46',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response)=> {
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        cloud_pct.innerHTML = response.cloud_pct
        humidity.innerHTML = response.humidity
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees


    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getweather(city.value)
})

getweather("city")