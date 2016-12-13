/**
 * TransactionController
 *
 * @description :: Server-side logic for managing transactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
    // Create a User with the params sent from
    // the sign-up form --> new.ejs
    Transaction.create(req.params.all(), function transacCreated(err, transaction) {
	console.log("transaction>>>>"+JSON.stringify(transaction));
      
      res.redirect('/books');
    });
  },
};

