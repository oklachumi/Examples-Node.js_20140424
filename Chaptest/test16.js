var day = new Date().getDay();
var index = 0;
while (index <= 7) {
	console.log('#:' + index + '.');
	if (index == day) {
		if (index == 0) {
			console.log('today is Sun.');
			break;
		} else {
			console.log('today is ' + index + '.');
			break;
		}
	}
	index++;
}
