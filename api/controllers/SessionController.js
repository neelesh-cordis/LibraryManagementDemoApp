/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){

		req.session.flash = {};
		res.view('/login');
	},
	create: function(req,res){
					
					User.findOne({userId: req.param('userId')}, function foundUser(err, user) {
					
			      	  if (err || !user) {
				        req.session.flash = {
				          err: 'User Does not exist'
				        };
						console.log("flash:>>>"+ JSON.stringify(req.session.flash));
				       res.redirect('/login');
				      }


			      	else{
			      		if(req.param('password') == user.password ){
			      		req.session.authenticated = true;
							
								user.save(function(err,user){
									if(err) return next(err);
								})
						req.session.flash = {};		
			      		req.session.user = user;
			      	 	console.log("session:>>>"+ JSON.stringify(req.session));
			      		res.redirect('/books');
			      	}
			      	else{
			      		req.session.flash = {
				          err: 'Wrong Password'
				        };
						console.log("flash:>>>"+ JSON.stringify(req.session.flash));
			      		console.log(">>>>>>>>>auth failure");
			      		res.redirect('/login');
			      	}
			      }
				});


	},
	destroy: function (req, res) {
		console.log("destroyying....");
		 User.findOne(req.session.user.id , function foundUser (err, user) {
				 console.log("user logging out>>>>"+JSON.stringify(user));
				 req.session.destroy();
				 res.redirect('http://localhost:1337');
			 });
		


	}
};
