
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=ae232075daee4df725c1da594545c288')

        .then(response => response.json())
        
         .then(data => 

            { 
                console.log(data.main.temp)
                console.log(data.main.pressure)
                console.log(data.main.humidity)
                console.log(data.name)
                console.log(data.weather[0].description)
                console.log(data.wind.speed)
                console.log(data.wind.deg)

                const celcius = Math.round(data.main.temp-273);

                var  display =
                `
                <div id="content">
                <h3 > City Name = ${data.name} </h3>
               <h1 >Main Weather Condition = ${data.weather[0].description}</h3>
        <h3 > Temperature = ${celcius} °C</h3>
        <h3> Pressure = ${data.main.pressure} hpa</h3>
        <h3> Humidity = ${data.main.humidity}%</h3>
       
        <h3> Wind Speed  = ${data.wind.speed} m/s </h3>
        <h3>Direction = ${data.wind.deg} degree</h3>
         </div>
         `
         
         document.getElementById('show').innerHTML = display;
         
         
        })
        //  console.log(data.main.temp)
        .catch(err => alert("Wrong City Name..!!"))
