module.exports = function(req, res, next) {

 res.locals.flash = {};

 if(!req.session.flash) return next();
 console.log("FLASH:::>>>"+JSON.stringify(req.session.flash));
 res.locals.flash = _.clone(req.session.flash);

 // clear flash
 req.session.flash = {};

 next();
};