(function photo()
{
    var x=document.getElementById("main-content-row1");
    x.innerHTML= "<img src=\"images/XDW"+Math.floor((Math.random()*3))+".jpg\"/>";
})()

function loadArticle() {
	var larg = screen.width;
	var hght = screen.height-50;
	
	x=document.getElementById("container");
	y=document.getElementById("main-content");
	z=document.getElementById("bouton");
	
	x.innerHTML= '<object type="text/html" data="modele_article.html" width=100% height='+String(hght)+'></object>';
	y.style.display="none";
	z.style.display="block";
}

function deloadArticle() {
	x=document.getElementById("container");
	y=document.getElementById("main-content");
	z=document.getElementById("bouton");

	x.innerHTML= '';
	y.style.display="block";
	z.style.display="none";	
}