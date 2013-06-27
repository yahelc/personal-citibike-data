
/*
 * GET home page.
 */

exports.index = function(req, res){
	var request = require('request');
	var $ = require("jquery");
	
	request('https://citibikenyc.com/login', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		var csrf = response.headers["set-cookie"][2].split("=")[1].split("; ")[0]; //y u no do smart
		var po = request.post('https://citibikenyc.com/login', {form:
			{'subscriberUsername': process.env.CITIBIKE_USERNAME,
			'login_submit':'Login',		
			 "subscriberPassword": process.env.CITIBIKE_PASSWORD,
			"ci_csrf_token": csrf
		}}, function(error, response, body){
			var r = request("https://citibikenyc.com/member/trips", function (error, response, body){
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
				
				
			});
			console.log(r);
		}
			);
	//	console.log(po);

	  }
	});
	
/*	
*/
 // res.render('index', { title: 'Express' });
};