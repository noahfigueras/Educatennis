var mongoose = require("mongoose");


// Modelo de Cursos 
var Index = new mongoose.Schema({
	subindex: String,
	ref: String, 
});

var Content = new mongoose.Schema({
	title: String, 
	index: [Index]
});

var cursosSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "https://www.hazboom.com/wp-content/uploads/2015/09/modern_desk_workspace_vector_illustration_flat_design_office_designer_stylish_workplace_concept-Converted.png"},
	body: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	content: [Content]	
});

var Cursos = mongoose.model("Cursos", cursosSchema);

module.exports = mongoose.model("Cursos", cursosSchema);