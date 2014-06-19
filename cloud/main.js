//var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/
var appurl = 'https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/'
var request = require('request');

exports.list = function(params, callback) {
// Detail of this request module can be found at https://github.com/mikeal/request
//var request = require('request');
url = appurl + 'fhdbList';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
})
};

exports.deleteall = function(params, callback) {
// Detail of this request module can be found at https://github.com/mikeal/request
//var request = require('request');
url = appurl + 'fhdbDeleteall';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
})
};

exports.add = function(params, callback) {
// Detail of this request module can be found at https://github.com/mikeal/request
//var request = require('request');
url = appurl + 'fhdbAdd?firstname=jim&lastname=jones&country=Ireland&phone=123456';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
})
};
