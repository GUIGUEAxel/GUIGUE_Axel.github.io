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
const workCards = document.querySelectorAll('.work__card'),         // Les cartes projet
      modalViews = document.querySelectorAll('.work__modal'),       // Les fenêtres modales
      modalClose = document.querySelectorAll('.work__modal-close')  // Les boutons de fermeture

// Ferme toutes les modales et débloque le défilement de la page
const closeModals = () =>{
    modalViews.forEach((modal) => modal.classList.remove('active-modal'))
    document.body.classList.remove('modal-open')
}

// La carte ENTIÈRE est cliquable : on ouvre la modale qui lui appartient
workCards.forEach((card) =>{
    const modal = card.querySelector('.work__modal')
    if (!modal) return

    card.addEventListener('click', (e) =>{
        // On ignore les clics venant de l'intérieur de la modale
        // (croix de fermeture, fond, liens) pour ne pas la rouvrir aussitôt.
        if (e.target.closest('.work__modal')) return

        modal.classList.add('active-modal')
        document.body.classList.add('modal-open')  // bloque le scroll en arrière-plan
    })
})

// Boutons de fermeture (la croix)
modalClose.forEach((close) =>{
    close.addEventListener('click', closeModals)
})

// Fermeture en cliquant sur le fond sombre (pas sur le contenu)
modalViews.forEach((modal) =>{
    modal.addEventListener('click', (e) =>{
        if (e.target === modal) closeModals()
    })
})

// Fermeture avec la touche Échap
document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape') closeModals()
})