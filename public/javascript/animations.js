
// Clicking Accordion on -- show-summary.ejs
var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++){
	accordion[i].onclick = function () {
		this.classList.toggle("is-open");
		var content = this.nextElementSibling;

		if(content.style.maxHeight){
			//accordion is open, close it
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
 }
}


//Video pop up modal in final show template
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var vid = document.getElementById("myVideo"); 
var hover = document.getElementById("myHover"); 

btn.onmouseover = function (){
	hover.style.display = "inline-block";
	this.style.cursor = "pointer";
}
btn.onmouseleave = function (){
	hover.style.display = "none";
}
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
	vid.pause();
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

