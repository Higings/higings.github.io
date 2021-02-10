/*(function sizing() {
	
	var hauteur = screen.height-110;
	var hsur4 = document.getElementsByClassName('hsur4');
	var hsur2 = document.getElementsByClassName('hsur2');

	for(let i=0; i< hsur4.length; i++){
		hsur4[i].style.height = String(hauteur/4)+'px';
	}
	
	for(let i=0; i< hsur2.length; i++){
		hsur2[i].style.height = String(hauteur/2)+'px';
	}
	
})();*/

(function sizing() {
	var hauteur = screen.height-180;
	var elt = document.getElementById("cadre");

	elt.style.height = String(hauteur)+'px';
})();

