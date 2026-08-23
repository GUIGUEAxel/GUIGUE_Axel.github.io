//Animation menu

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]')

const scrollActive = () =>{
	const scrollY = window.pageYOffset
	const offset = 100 // hauteur du header + petite marge
	let currentId = ''

	// On garde la DERNIÈRE section dont le haut est passé au-dessus du scroll :
	// il n'y a donc jamais qu'une seule section "courante".
	sections.forEach(current =>{
		const sectionTop = current.offsetTop - offset
		if (scrollY >= sectionTop){
			currentId = current.getAttribute('id')
		}
	})

	// Cas particulier : tout en bas de page, on force la dernière section (contact).
	if ((window.innerHeight + scrollY) >= (document.documentElement.scrollHeight - 5)){
		currentId = sections[sections.length - 1].getAttribute('id')
	}

	// On réinitialise puis on active uniquement le bon lien.
	navLinks.forEach(link =>{
		link.classList.remove('active-link')
		if (link.getAttribute('href') === '#' + currentId){
			link.classList.add('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)
scrollActive() // état correct dès le chargement
// Fin animation menu

// On sélectionne tous les éléments nécessaires
const modalViews = document.querySelectorAll('.work__modal'),      // Les fenêtres modales
      modalBtns = document.querySelectorAll('.work__button-modal'),  // Les boutons "voir plus"
      modalClose = document.querySelectorAll('.work__modal-close')   // Les boutons de fermeture

// Fonction pour ouvrir la modale
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

// Ajoute un écouteur d'événement à chaque bouton "voir plus"
modalBtns.forEach((btn, i) =>{
    btn.addEventListener('click', () =>{
        modal(i)
    })
})

// Ajoute un écouteur d'événement à chaque bouton de fermeture
modalClose.forEach((close) =>{
    close.addEventListener('click', () =>{
        modalViews.forEach((modal) =>{
            modal.classList.remove('active-modal')
        })
    })
})

// Fermeture en cliquant à l'extérieur de la modale
modalViews.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {  // Si on clique sur le fond (pas sur le contenu)
            modal.classList.remove('active-modal');
        }
    });
});