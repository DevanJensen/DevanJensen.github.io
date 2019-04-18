window.addEventListener('load', function(){

revealDiv.addEventListener("click", function() {
	var div = document.getElementById("hiddenDiv");
	div.innerHTML = "<h5>hello</h5>";
	div.style.backgroundColor = "red";
	div.style.fontSize = "40px";
});

var petFox = document.getElementById("jsBlog")

petFox.addEventListener("click", function() {
	alert("You have petted the fox with a pointer, not the wisest decision I'd say.");
});

});