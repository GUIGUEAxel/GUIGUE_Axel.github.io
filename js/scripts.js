//Animation menu

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
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