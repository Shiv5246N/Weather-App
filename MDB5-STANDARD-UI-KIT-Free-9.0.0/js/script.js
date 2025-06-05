async function getData() {
  var response = await fetch('http://api.weatherapi.com/v1/current.json?key=026974c29f73487abc394819250506&q=Chandigarh&aqi=no')
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(data => {
      console.log(data.location);
      document.getElementById("city").innerText = data.location.name + ", " + data.location.region + ", " + data.location.country;
      document.getElementById("temp").innerText = data.current.temp_c + "°C";
      document.querySelector("strong").innerText = data.current.feelslike_c + "°C";
      document.getElementById("feels").innerText = data.current.condition.text;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}
getData();
