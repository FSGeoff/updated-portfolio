$(document).ready(function () {
	function keepTemp() {
		setTimeout(function () {
			var queryURL =
				"https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a";
			$.ajax({
				url: queryURL,
				method: "GET",
			}).then(function (response) {
				const weatherArr = response.weather;
				for (i = 0; i < weatherArr.length; i++) {
					console.log(weatherArr[i]);
				}
				const temp = Math.round(response.main.temp) + "&#176;";
				const description = " " + weatherArr[0].description.toUpperCase();
				console.log(response);
				console.log(description);
				console.log(time);

				const icon = $("<img>");
				icon.attr("height", "16px");
				icon.attr("width", "16px");
				const forecast = weatherArr[0].main.toUpperCase();
				console.log(forecast);

				switch (forecast) {
					case "CLEAR":
						icon.attr("src", "./icons/sun.png");
						break;
					case "SCATTERED CLOUDS":
						icon.attr("src", "./icons/cloudy.png");
						break;
					case "CLOUDS":
						icon.attr("src", "./icons/cloudy.png");
						break;
					case "RAIN":
						icon.attr("src", "./icons/rain.png");
						break;
					case "SNOW":
						icon.attr("src", "./icons/snow.png");
						break;
					case "WIND":
						icon.attr("src", "./icons/windy.png");
						break;
					case "WINDY":
						icon.attr("src", "../icons/windy.png");
						break;
					case "THUNDER":
						icon.attr("src", "./icons/thunder.png");
						break;
					case "FOG":
						icon.attr(
							"src",
							"https://cdn3.iconfinder.com/data/icons/picons-weather/57/32_fog_cloud-512.png"
						);
						break;
					case "HAZE":
						icon.attr(
							"src",
							"https://static.vecteezy.com/system/resources/previews/000/441/037/original/haze-vector-icon.jpg"
						);
						break;
						case "MIST":
						icon.attr(
							"src",
							"https://cdn0.iconfinder.com/data/icons/weather-347/64/fog-weather-mist-512.png"
						);
						break;
					default:
						icon.attr("src", "./icons/sun.png");
				}
				$("#temp").append(temp, icon);
				$("#description").append(description);
			});
		}, 2500);
	}
	keepTemp();
});
