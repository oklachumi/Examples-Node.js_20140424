var day = new Date().getDay();
switch (day) {
	case 6:
		console.log('today is Sat.');
	case 0:
		console.log('today is Sun.');
	default:
		console.log('Mon to Fri.');
}
