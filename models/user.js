var mongoose 			  = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	avatar: String,
	firstName: String,
	lastName: String,
	email: String,
	progresoBC: Number,
	progresoBE: Number,
	cursos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref:"Cursos"
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);