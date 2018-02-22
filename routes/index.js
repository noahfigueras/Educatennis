var express = require("express");
var router  = express.Router();
var Cursos  = require("../models/cursos");

router.get("/", function(req,res){
	res.redirect("/index");
});

//INDEX ROUTE
app.get("/index", function(req, res){
	Cursos.find({},function(err, cursos){
		if(err){
			console.log(err);
		} else {
			res.render("index/indice", {cursos: cursos, currentUser: req.user})
		}
	});
});

module.exports = router;