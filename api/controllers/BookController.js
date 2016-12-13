/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	update : function(req,res){
		console.log("in");
	Book.findOne(req.param('id'), function foundUser(err, User) {
      if (err || !User) return res.serverError(err);  // !user should be 404
     Book.update({ id : req.param("id")},
                                {
                                  availability : !User.availability
                                }).exec(function (err, updatedBook)
                                {
                                    if (err)
                                    {
                                        return res.negotiate(err);
                                    }
                                    else
                                    {
                                        return res.ok({book:updatedBook});
                                    }
                                });
      
    });
	}
};

