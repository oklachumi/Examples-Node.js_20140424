var list = [
	{id: 1, score: '30'},
	{id: 2, score: '50'},
	{id: 3, score: '70'},
	{id: 4, score: '65'}
];

for (var i in list) {
	var obj = list[i];
	with (obj) {
		if (score >= 60) {
			continue;
		}
		console.log('Fail id is [' + id + ']:' + score);
	}
}
