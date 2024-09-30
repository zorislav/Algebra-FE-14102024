var request = new XMLHttpRequest();
request.open('GET', 'https://www.healthcare.gov/what-is-the-health-insurance-marketplace.json', true);

request.onload = function(result) {
	console.log(result);
};

request.send();
