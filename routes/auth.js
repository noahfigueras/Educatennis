var express  = require("express");
var router   = express.Router();
var passport = require("passport");
var Cursos 	 = require("../models/cursos");
var User     = require("../models/user");


//AUTHORIZATION ROUTES

//show register form
router.get("/register", function(req,res){
	res.render("register");
});

//handle sign up logic
router.post("/register", function(req,res){
	var newUser = new User({
		username: req.body.username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		avatar: req.body.avatar,
		progresoBC: 0,
		progresoBE: 0
	});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
			passport.authenticate("local")(req,res, function(){
				res.redirect("/cursos");
			});
	});
});

//show login form 
router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/cursos",
		failureRedirect: "/login"

	}), function(req,res){
});

//logic route
router.get("/logout", function(req,res){
	req.logout();
	res.redirect("/index");
});

// USER PROFILE
router.get("/users/:id", function(req,res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			console.log(err);
			res.redirect("/");
		}
		Cursos.find({}, function(err, cursos){
			if(err){
				console.log(err)
			} else {
				res.render("users/show", {user: foundUser, cursos: cursos})
			}
		})
	})
})

// USER PROGRESSBAR
module.exports = router;