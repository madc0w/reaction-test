let isShowing,
	showTime,
	n = 0,
	sumTimes = 0;

function load() {
	document.addEventListener('keydown', (e) => {
		if (isShowing) {
			isShowing = false;
			document.getElementById('spot').classList.add('hidden');
			const reationTime = new Date() - showTime;
			document.getElementById('reaction-time').innerHTML = reationTime;

			n++;
			sumTimes += reationTime;
			const meanTime = sumTimes / n;
			document.getElementById('mean-reaction-time').innerHTML =
				meanTime.toFixed(1);

			go();
		}
	});
	go();
}

function go() {
	isShowing = false;
	setTimeout(() => {
		document.getElementById('spot').classList.remove('hidden');
		showTime = new Date();
		isShowing = true;
	}, 2000 + Math.random() * 2000);
}
