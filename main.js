let isShowing,
	showTime,
	n = 0,
	sumTimes = 0,
	bestTime;

function load() {
	document.addEventListener('keydown', (e) => {
		if (isShowing) {
			isShowing = false;
			document.getElementById('spot').classList.add('hidden');
			const reationTime = new Date() - showTime;
			document.getElementById('reaction-time').innerHTML = reationTime;
			bestTime = Math.min(bestTime || Number.MAX_VALUE, reationTime);
			document.getElementById('fastest-reaction-time').innerHTML = bestTime;
			n++;
			document.getElementById('num-trials').innerHTML = n;

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

function reset() {
	n = 0;
	sumTimes = 0;
	bestTime = null;

	document.getElementById('reaction-time').innerHTML = null;
	document.getElementById('fastest-reaction-time').innerHTML = null;
	document.getElementById('mean-reaction-time').innerHTML = null;
	document.getElementById('spot').classList.add('hidden');

	go();
}
