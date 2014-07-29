//ex1

function fnprint(val) {
	console.log('The value is: ' + val);
}
fnprint('ok');

//ex2

var fnprint = new Function('val', 'console.log(\'The value is: \' + val);');
fnprint('ok');

//ex3

var fnprint = function(val) {
	console.log('The value is: ' + val);
}
fnprint('ok');

//ex4

(function(val) {
	console.log('The value is: ' + val);
 })('ok');

//ex5

(function(val) {
	console.log('The value is: ' + val);
 }('ok'));

//ex6

void function(val) {
	console.log('The value is: ' + val);
}('ok');

