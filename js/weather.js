$(document).ready(function () {
	function keepTemp() {
		var queryURL =
			"https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a";
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			console.log(response);

			const temp = Math.round(response.main.temp);
			

			const icon = $("<img>");
			icon.attr("height", "16px", "width", "16px");
            const forecast = response.weather[0].main.toUpperCase();
            console.log(forecast);

            switch(forecast) {
                case "CLEAR":
                    icon.attr("src", "./icons/sun.png");
                    default:
                        icon.attr("src", "./icons/sun.png");    
                    
            }
            $("#temp").append(temp, icon);
            
		});
	}
	keepTemp();
});
