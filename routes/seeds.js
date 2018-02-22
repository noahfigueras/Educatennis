var mongoose = require("mongoose");
var Cursos   = require("../models/cursos");
var Comment  = require("../models/comment");


/*var data = [

	{
		title: " Metodos de Entreno",
		body: "Description",
		content: 
			{
				title: "1ª Semana", 
				index: [
					{subindex: "El metodo de la enseñanza recíproca", ref: "reciproca", page: 0},
					{subindex: "El metodo de Idagación o Descubrimiento guiado", ref: "helloWorld", page: 1},
					{subindex: "Metodo de aprendizaje mediante carros o canastos"},
					{subindex: "Metodo del aprendizaje mediante el profesor volea al alumno"},
					{subindex: "Combinación del Metodo de profesor volea y carros"}
				]
			},
			{
				title: "Introduccion", 
				index: [
					{subindex: "elemento 1"},
					{subindex: "elemento 2"},
					{subindex: "elemento 3"},
					{subindex: "elemento 4"}
				]
			}
		
	} 
]*/


function seedDB(){
	/*Cursos.create({
		title: " Bloque Común",
		body: "Description",
		content: [{	title: "Métodos de Entreno", 
					index: [
						{subindex: "El metodo de la enseñanza recíproca", ref: "reciproca"},
						{subindex: "Enseñanza con métodos de Sombras", ref: "helloWorld"},
						{subindex: "Enseñanza utilizando el método descubrimiento guiado", ref: "holahola"},
						{subindex: "Enseñanza utilizando el método de aislamiento de palancas inferiores", ref: "reciproca"},
						{subindex: "Enseñanza utilizando el método de Frontón", ref: "a"},
						{subindex: "Enseñanza utilizando el método de lanzar con la mano", ref: "b"},
						{subindex: "Enseñanza con métodos de carros", ref: "c"},
						{subindex: "Enseñanza con métodos de profesor volea", ref: "d"},
						{subindex: "Enseñanza con métodos mixto profesor carro/profesor Volea", ref: "e"},
						{subindex: "Enseñanza utilizando métodos de Peloteos con direcciones fijas", ref: "f"},
						{subindex: "Enseñanza utilizando métodos de Peloteos con direcciones predeterminadas", ref: "g"},
						{subindex: "Enseñanza utilizando métodos de Peloteos con direcciones semi predeterminadas", ref: "h"},
						{subindex: "Enseñanza utilizando métodos de Pelotas Libres", ref: "i"},
						{subindex: "Enseñanza utilizando métodos de Pelotas Tácticos", ref: "j"},
						{subindex: "Enseñanza utilizando el método de el profesor o alumno pone la pelota en juego en una determinada situación Táctica", ref: "k"},
						{subindex: "Enseñanza utilizando métodos que trabajan situaciones mentales", ref: "l"},
						{subindex: "Enseñanza utilizando el método sobre Inicios de jugadas con el Servicio y el Resto", ref: "m"},

			    ]},{ title: "Organización del Espacio", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}
				
				]},{ title: "Parámetros Tácticos", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}

				]},{ title: "Parámetros Técnicos", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}

				]},{ title: "Habilidades Mentales", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}

				]},{ title: "Entrenamiento Integrado", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}

				]},{ title: "Juego de pies y posicionamiento en pista", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}

				]},{ title: "Juegos tácticos del Tennis", 
					index:[
						{subindex: "elemento 1"},
						{subindex: "elemento 2"}
					]}]
}, function(err, curso){
	if(err){
		console.log(err)
	} else {
		console.log(curso);
	}
});*/
}


module.exports = seedDB;	