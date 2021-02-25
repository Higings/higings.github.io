(function(){
	var hauteur = screen.height-180;
	var elt = document.getElementById("cadre");
	elt.style.height = String(hauteur)+'px';

	var phot = document.getElementById("one");
	var phots = document.getElementsByClassName("img1-2");
	var h2 = (parseInt(phot.height))/2;
	for(let i=0; i<phots.length; i++){
		phots[i].style.height = String(h2) + 'px';
	}

	var ref = document.getElementById("ref");
	var cibles = document.getElementsByClassName("cible");
	var h3 = ref.height + 'px';
	for(let i=0; i<cibles.length; i++){
		cibles[i].style.height = h3;
	}
})()

// Slideshow 

const items = document.getElementsByClassName('img-phone');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)