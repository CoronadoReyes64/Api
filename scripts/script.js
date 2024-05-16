var ciudad = document.getElementById("buscarC");

var backgroundsList = [
  "day1.jpg",
  "day2.jpg",
  "day3.jpg",
  "day4.jpg",
  "day5.jpg",
  "cloudy1.jpg",
  "cloudy2.jpg",
  "cloudy3.jpg",
  "cloudy4.jpg",
  "cloudy5.jpg",
 
];

var randomBackground = backgroundsList[Math.floor(Math.random() * backgroundsList.length)];

document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) , url('media/" + randomBackground + "')";

ciudad.addEventListener("keyup", function(event)
{
  if(event.key === "Enter")
  {
		loader();
		function loader()
		{

			document.getElementById("nombreC").innerHTML = "";
			document.getElementById("temperaturaValue").innerHTML = "";
			document.getElementById("tipoC").innerHTML = "";

			const img1 = document.createElement("img");
			const img2 = document.createElement("img");
			

			img1.id = "loader1";
			img2.id = "loader2";
	

			img1.src = "icons/loader.gif";
			img2.src = "icons/loader.gif";


			const parentElement1 = document.getElementById("nombreC");
			const parentElement2 = document.getElementById("temperaturaValue");
			

			parentElement1.appendChild(img1);
			parentElement2.appendChild(img2);
		

		
		}

    var ciudadIngresada = ciudad.value;

    var apiKey = "b1fd6e14799699504191b6bdbcadfc35"; 
    var unit = "metric";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadIngresada}&appid=${apiKey}&units=${unit}`;

    if(ciudadIngresada != "")
    {
      async function getWeather()
      {
        var response = await fetch(apiUrl);
        var data = await response.json();

        if(data.message != "LUGAR NO ENCONTRADO" && data.cod != "404")
        {
          var lugar = data.name;
          var temperatura = data.main.temp;
          var tipoC = data.weather[0].description;
        
          document.getElementById("nombreC").innerHTML = lugar;
          document.getElementById("temperaturaValue").innerHTML = temperatura + "<sup>o</sup>C";
          
          
        }
        else
				{
					document.getElementById("nombreC").innerHTML = "LUGAR INVALIDO";
					document.getElementById("temperaturaValue").innerHTML = "";
					
				}
      }

      getWeather();
    }
    else document.getElementById("nombreC").innerHTML = "INGRESA UNA CIUDAD";
  }
});