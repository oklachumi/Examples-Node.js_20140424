var MyObject = function() {
	this.count = 0;
};

MyObject.prototype.touch = function() {
	this.count++;
}

var myObj = new MyObject();

myObj.touch();
myObj.touch();
myObj.touch();

console.log(myObj.count);
