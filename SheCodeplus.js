 
 let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

  
    let City = prompt("Enter a City?");
 if (City === "portharcourt"){
 alert ("It is currently 19°C (66°F) in portharcourt with a humidity of 80%");

 } 

 if( City !== "portharcourt"){
    alert("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney.")
  }

  let non = new date();

  h3 = document.querySelector("h3");
  
  let date = now.getDate();
  let hours = now.gethours();
  let minutes = now.getminutes();
  let year = now.getyear
  
  h2.innerHTML = 'Tue Aug ${date}, ${hours}, ${minutes}, ${year}'
  

  function search(event) {
      event.preventDefault();
      let searchinput= document.querySelector
      ("search-text-input");
    
      let h2 = document.querySelector("h2");
      if (searchinput.value) {
        h2.innerHTML='searching for ${searchinput.value}.....';
      } else{
        h2.innerHTML = null;
        alert("please type a city");
      }
     }
     let form = document.querySelector("#search-form");
    
    form.addEventListener("Submit,search");
    
    
    function search(){
      alert ("searching");
    }
    let form = document.querySelector
    ("#search-form");
    
    form.addEventListener("submit", search );
    