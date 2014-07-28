var day = new Date().getDay();
var index = 0;
do {
	if (index == day) {
		if (index == 0) {
			console.log('today is Sun.');
		} else {
			console.log('today is ' + index + '.');
		}
	}
	index++;
} while (index <= 7);
