var day = new Date().getDay();
switch (day) {
	case 6:
	case 0:
		console.log('happy weekend.');
		break;
	default:
		console.log('Mon to Fri.');
}
