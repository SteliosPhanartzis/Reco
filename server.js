const yelpAPI = require('yelp-fusion');
const express = require('express');
const app = new express();
const client = yelp.client('_Gp5XDHFrS-Z8T4jt5BiIXQBDuc5clyPZwWmLE34Br6EwdEq-ybaqjKjf1mzj5Sr5eZ1sA_lMvHkFhkIE2s5WjeoH7wOdhM7ihifW-8YB0ip4Q6GTCUYjQ0aDtoKXHYx');

// var yelp = new Yelp({
//   consumer_key: 'consumer-key',
//   consumer_secret: 'consumer-secret',
//   token: 'sy6D4zbqDYa0tb1OcKfw2A',
//   token_secret: '_Gp5XDHFrS-Z8T4jt5BiIXQBDuc5clyPZwWmLE34Br6EwdEq-ybaqjKjf1mzj5Sr5eZ1sA_lMvHkFhkIE2s5WjeoH7wOdhM7ihifW-8YB0ip4Q6GTCUYjQ0aDtoKXHYx',
// });

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

$(document).ready(function(){
	const ylpUrl = 'https://api.yelp.com/v3/events';
	var req;
	$.get(ylpUrl, function(data, status){
			req = data;
			console.log(`${data}`);
	});
	// $('#eventsSide')
});