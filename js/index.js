$(document).ready(function () {
	const time = moment().format("LT");

	function keepTime() {
		$("#time").empty();
		$("#time").append(time);
	}

	keepTime();
});
