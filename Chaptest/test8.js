var day = new Date().getDay();
switch (day) {
	case 6:
		console.log('today is Sat.');
		break;
	case 0:
		console.log('today is Sun.');
		break;
	default:
		console.log('Mon to Fri.');
}
