var x = 50;
function closureFunc() {
	var x = 100;
	return x;
}
console.log(x);
console.log(closureFunc());
