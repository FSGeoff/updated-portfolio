$(document).ready(function () {
	const time = moment().format("LT");

	function keepTime() {
		setInterval(() => {
			$("#time").empty();
			$("#time").append(time);
		}, 1000);
	}

	keepTime();
});
