var express       = require("express");
var router        = express.Router();
var Cursos 		  = require("../models/cursos");
var User     	  = require("../models/user");
var Comment 	  = require("../models/comment");
var seedDB		  = require("./seeds")

seedDB();
//Index route
router.get("/cursos", function(req,res){
	Cursos.find({}, function(err, cursos){
		if(err){
			console.log(err);
		} else {
			res.render("portal-web/cursos", {cursos: cursos, currentUser: req.user});
		}
	});
});

//Show route if user did not buy the course
router.get("/cursos/:id", /*isLoggedIn*/ function(req,res){
 	Cursos.findById(req.params.id, function(err, foundCourse){
 		if(err){
 			res.redirect("/cursos");
 		} else {
 			res.render("portal-web/show-summary", {curso: foundCourse});
 		}
 	});
});

router.post("/cursos/:id/add", isLoggedIn, function(req,res){
	Cursos.findById(req.params.id, function(err, curso){
		if(err){
			console.log(err);
			res.redirect("/cursos/:id");
		} else {
			User.findOne(req.user, function(err, user){
				if(err){
					console.log(err);
				} else {
					user.cursos.push(curso._id);
					user.save(function(err, save){
						if(err){
							console.log(err)
						} else {
							console.log("Successfully saved!")
						}
					})
					res.redirect("/cursos/"+ curso._id +"/enrolled");
				}
			});
		}
	});
})

//Show route if user is enrolled in course
router.get("/cursos/:id/enrolled", /*isLoggedIn*/ function(req,res){
	Cursos.findById(req.params.id, function(err, foundCourse){
		if(err){
			res.redirect("/cursos");
		} else {
			User.find(req.user, function(err, user){
				if(err){
					console.log(err)
				} else {
					res.render("portal-web/enrolled", {curso: foundCourse, currentUser: req.user});
				}
			})
		}
	});
});


//Show route if user is enrolled in course and wants to go to foro
router.get("/cursos/:id/enrolled/foro", function(req,res){
	Cursos.findById(req.params.id).populate("comments").exec(function(err, foundCourse){
		if(err){
			res.redirect("/cursos");
		} else {
			res.render("portal-web/enrolled-foro", {curso: foundCourse});
		}
	});
});


//-----------------------
//	FORO COMMENT ROUTES
//-----------------------
router.get("/cursos/:id/enrolled/foro/comments/new", isLoggedIn, function(req,res){
	Cursos.findById(req.params.id, function(err, curso){
		if(err){
			console.log(err);
		} else {
			res.render("portal-web/new-comment", {curso: curso});
		}
	});
});

router.post("/cursos/:id/enrolled/foro/comments", function(req, res){
	Cursos.findById(req.params.id, function(err, curso){
		if(err){
			console.log(err);
			res.redirect("/cursos/:id/enrolled");
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					comment.save();
					curso.comments.push(comment._id);
					curso.save();
					console.log(comment);
					res.redirect("/cursos/"+ curso._id +"/enrolled/foro");
				}
			});
		}
	});
});


//---------------------
//	ANNOUNCEMENTS
//---------------------

//Show route if user is enrolled in course and want to go to tablon de anuncios
router.get("/cursos/:id/enrolled/announcements", function(req,res){
	Cursos.findById(req.params.id, function(err, foundCourse){
		if(err){
			res.redirect("/cursos");
		} else {
			res.render("portal-web/enrolled-announcements", {curso: foundCourse});
		}
	});
});

//-----------------------
// SUBINDEX LINK SHOW PAGE
//-----------------------
router.get("/cursos/:id/enrolled/:tema/", function(req,res){
	Cursos.findById(req.params.id, function(err, foundCourse){
		if(err){
			res.redirect("/cursos");
		} else {
			var tema  = req.params.tema;
			var found = foundCourse.content;
			var siguiente;
			var anterior;
				User.findOne(req.user, function(err, user){
					if(err){
						console.log(err)
					} else {
						user.progresoBC = 30
						user.save()
					}
				})

				found.forEach(function(element){
					for (var i = 0; i < element.index.length; i++){
							if(element.index[i].ref == tema){
								var next  = i + 1 > element.index.length ? i : i+1;
								var atras  = i - 1 < 0 ? i: i-1 ;
								anterior  = element.index[atras].ref;
								siguiente = element.index[next].ref;
							}
					}
				})
		res.render("cursos/" + tema, {curso: foundCourse, tema: tema, siguiente: siguiente, anterior: anterior});
		}
	});
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
module.exports = router;

			