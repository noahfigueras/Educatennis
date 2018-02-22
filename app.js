var express 	  = require("express");
	app 		  = express();
	bodyParser 	  = require("body-parser");
	mongoose 	  = require("mongoose");
	passport	  = require("passport");
	methodOverride = require("method-override");
	LocalStrategy = require("passport-local");
	User		  = require("./models/user");
	
var indexRoutes = require("./routes/index");
var authRoutes  = require("./routes/auth");
var cursoRoutes = require("./routes/cursos");

//APP CONFIG

mongoose.connect("mongodb://localhost/educatennis2");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"))
//PASSPORT CONFIG

app.use(require("express-session")({
	secret: "Once again it is right",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use(indexRoutes);
app.use(authRoutes);
app.use(cursoRoutes);


/*Project.create({
	title:"Ataque",
	image: "/media/proyectos/rafa-saque2.jpg",
	subheading: "Descubre la técnica correcta para atacar de forma agresiva."
}, function(err, project){
	if(err){
		console.log(err);
	} else {
		console.log(project);
	}
}); */


app.listen(5000, function(req, res){
	console.log("Server started in port 5000");
});