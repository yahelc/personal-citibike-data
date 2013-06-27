
/*
 * GET home page.
 */

exports.index = function(req, res){
	var request = require('request');
	
	request('https://citibikenyc.com/login', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(response.headers["set-cookie"]) // Print the google web page.
		var csrf = response.headers["set-cookie"][2].split("=")[1].split("; ")[0];
		var po = request.post('https://citibikenyc.com/login', {form:
			{'subscriberUsername': '',
			'login_submit':'Login',		
			 "subscriberPassword": "",
			"ci_csrf_token": csrf
		}}, function(error, response, body){
			var r = request("https://citibikenyc.com/member/trips", function (error, response, body){
			//	console.log(body);
				var htmlparser = require("htmlparser");
				var handler = new htmlparser.DefaultHandler(function (error, dom) {
				});
				var parser = new htmlparser.Parser(handler);
				parser.parseComplete(body);
				console.log(handler.dom);
			});
			console.log(r);
		}
			);
	//	console.log(po);

	  }
	})
	
/*	
*/
  res.render('index', { title: 'Express' });
};