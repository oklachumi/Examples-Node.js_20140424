var company = new Array();
company.name = 'mandice';
company.url = 'www.mandice.com';
company.establishment = new Date().setFullYear(2014,07,26);
company[0] = "Mandice Company. All rights reserved.";

for (var i in company) {
	console.log(i + ' => ' + company[i]);
}


