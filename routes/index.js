
/*
 * GET Ride information.
 */

exports.index = function(req, res){
	var request = require('request');
	var $ = require("jquery");
	var cookie = require("cookie");
	var attempts = 0;
	function getTrips(){
		
		var r = request("https://citibikenyc.com/member/trips", function (error, response, body){
			if(++attempts > 2){
			return res.json({"error": "too many unsuccessful login attempts"}); }
			if($("table",body).length){ 
				var json = [];
				var keys = $("th", body).map(function(i,v){
					return $(v).text().replace(/[^a-zA-Z\d\s]/g,"").trim().replace(/ /g,"_").toLowerCase();
					}).get();
				$("tr", body).each(function(i,val){
					var trip = {};
					$("td", $(val, body)).each(function(k,v){
						trip[ keys[k]  ] = $(v).text();
					});
					if(Object.keys(trip).length){
						json.push(trip);
					}
				});
			 res.json(json);
			}
			else{
				try{
					var cookies = cookie.parse(response.headers["set-cookie"].reverse().join("; "));
					var csrf = cookies.ci_csrf_token; 
					var po = request.post('https://citibikenyc.com/login', {form:
						{'subscriberUsername': process.env.CITIBIKE_USERNAME,
						'login_submit':'Login',		
						 "subscriberPassword": process.env.CITIBIKE_PASSWORD,
						"ci_csrf_token": csrf
					}}, function(error, response, body){  
						getTrips();
					});
				}
				catch(e){
					res.json({"error":"couldn't login"});
				}
			}
		});
	}
	getTrips();
};