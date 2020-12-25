$(document).ready(function () {
	function keepTemp() {
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
			const description = " "+weatherArr[0].description;
			console.log(response);
			console.log(description);
			console.log(time);
			

			const icon = $("<img>");
			icon.attr("height", "16px");
			icon.attr("width", "16px");
			const forecast = response.weather[0].main.toUpperCase();
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
				default:
					icon.attr("src", "./icons/sun.png");
			}
			$("#temp").append(temp, icon);
			$("#description").append(description);
		});
	}
	keepTemp();
});
