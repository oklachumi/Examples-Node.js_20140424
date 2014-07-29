function BMI(name) {
	var BMIResult = 0;
	function count_BMI(weight, height) {
		var mass = parseInt(weight);
		var counter = parseInt(height)/100;
		BMIResult = mass/(counter*counter);
		console.log(name + ' your BMI is ' + BMIResult + '.');
		return BMIResult;
	}
	return count_BMI;
}

var KRChu_BMI = BMI("KRChu");
var CCChiu_BMI = BMI("CCChiu");

KRChu_BMI(65, 175);
CCChiu_BMI(85, 177);
