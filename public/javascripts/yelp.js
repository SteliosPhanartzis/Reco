var yelp = require('yelp-fusion');
function getEvents(lat,long){
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://api.yelp.com/v3/businesses/search?latitude=40.712776&longitude=-74.005974&limit=10",
	  "method": "GET",
	  "headers": {
	    "Authorization": "Gp5XDHFrS-Z8T4jt5BiIXQBDuc5clyPZwWmLE34Br6EwdEq-ybaqjKjf1mzj5Sr5eZ1sA_lMvHkFhkIE2s5WjeoH7wOdhM7ihifW-8YB0ip4Q6GTCUYjQ0aDtoKXHYx",
	    "cache-control": "no-cache",
	    "Postman-Token": "168117d0-1433-449b-bb7a-2c874c476e67"
	  }
	}
	//var api_key = "Gp5XDHFrS-Z8T4jt5BiIXQBDuc5clyPZwWmLE34Br6EwdEq-ybaqjKjf1mzj5Sr5eZ1sA_lMvHkFhkIE2s5WjeoH7wOdhM7ihifW-8YB0ip4Q6GTCUYjQ0aDtoKXHYx"
	//var client =  yelp.client(api_key)

	$.ajax(settings).done(function (response) {
	  console.log(response.length);
	});
}
getEvents();