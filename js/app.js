/**
 * Created by Hosuke on 5/10/15.
 */

var country;

// Step 1: Get the user current country
$.get("http://ipinfo.io", function(response) {
    console.log(response.city, response.country);
    country = response.country;
}, "jsonp");

var fromCurrency = country;

var toCurrency = "CNY";

// Step 2:
$.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22' + fromCurrency + toCurrency + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', function(response){
    console.dir(response);
    console.log(response.query.results.rate.Rate);
}, "json");