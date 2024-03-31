const apiKey="bc35a2c28391c0a7c7d7ca1efe1862d9";
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox = document.querySelector(".input");
        const searchbtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
 
    async function checkweather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weathor").style.display = "none";
    }
    else{
        var data = await response.json();
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
        
        switch(data.weather[0].main){
            case 'Clouds':
                weatherIcon.src = "/clear.png";
                break;
            case 'Clear':
                weatherIcon.src = "/sun.png";
                break;
            case 'Rain':     
                weatherIcon.src = "/rain1.png";
                break;
            case 'Mist':
                weatherIcon.src = "/mist.png";
                break;
            case 'Snow': 
                weatherIcon.src = "/snow.png";  
                break;       
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
});