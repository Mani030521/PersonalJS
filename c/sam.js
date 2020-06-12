for (var i = 0; i < 5; i++) {
	(function () {
		var j = i;
		setTimeout(() => {
			console.log(j);
		}, 1000);
	})();
}
