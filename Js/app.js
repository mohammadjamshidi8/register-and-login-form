// import { Form } from "../components/Form/form.js";


// window.customElements.define('site-form',Form)

// select elements
let loginEmail = document.querySelector('#sign-in-email')
let errorIcon = null
let succesIcon = null

const emailValidation = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/


// get icons from inputs

const getIcons = (event) => {

    let icons = event.target.parentElement.querySelectorAll('lord-icon')

    let iconsArray = Array.from(icons)

    succesIcon = iconsArray.filter(icon => {
        return icon.getAttribute('data-state') === 'succes'
    })
    errorIcon = iconsArray.filter(icon => {
        return icon.getAttribute('data-state') === 'danger'
    })

}

// change border color and hide and show checked icon function

const changeBorderColor = (condition, event) => {

    getIcons(event)

    if (condition) {

        event.target.style.border = '1px solid rgb(110,231,183)'

        succesIcon[0].classList.remove('hidden')

        errorIcon[0].classList.add('hidden')

        succesIcon[0].setAttribute('trigger', 'in')

    } else {

        event.target.style.border = '1px solid #f24444'

        errorIcon[0].classList.remove('hidden')

        succesIcon[0].classList.add('hidden')

    }
}

// login email validation and and animate icons

loginEmail.addEventListener('input', (e) => {

    let isEmailValid = emailValidation.test(e.target.value)

    changeBorderColor(isEmailValid, e)

    console.log(isEmailValid);

})

// animate error icon in login pgae on focus event

loginEmail.addEventListener('focus', (e) => {

    getIcons(e)
    errorIcon[0].setAttribute('trigger', 'in')

})

// login page clear border on blur event

loginEmail.addEventListener('blur', () => {

    loginEmail.style.removeProperty('border')

})

