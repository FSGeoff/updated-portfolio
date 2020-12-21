$(document).ready(function () {
	const time = moment().format("dddd h:mm a");

	function keepTime() {
		setInterval(() => {
			$("#time").empty();
			$("#time").append(time);
		}, 4000);
	}

	keepTime();
});
