const tooglebutton  = document.getElementsByClassName('toggle-button')[0]
const navbarlinks  = document.getElementsByClassName('navbar-links')[0]

tooglebutton.addEventListener('click',()=> {
    navbarlinks.classList.toggle('active')
})