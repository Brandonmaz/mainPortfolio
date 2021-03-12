// const navToggle = document.querySelector('.nav-toggle')
// const navLinks = document.querySelectorAll('.nav_link')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open')
// })
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open')
//     })
// })
const navWrapper = document.querySelector('.nav-wrapper')
const navLinks = document.querySelectorAll('.nav_link')
const navToggler =  document.querySelector('.nav-toggler')

navToggler.addEventListener('click', function (event) {
    navWrapper.classList.toggle('active')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})
