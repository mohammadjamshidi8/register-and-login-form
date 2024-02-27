// import { Form } from "../components/Form/form.js";


// window.customElements.define('site-form',Form)

// select elements
let loginEmail = document.querySelector('#sign-in-email')
let errorIcon = null
let succesIcon = null
const emailValidation = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/

let iconsArray = null;


let loginLockIcon = document.querySelector('#login-lock')
let loginEyeIcon = document.querySelector('#login-eye')
let loginPassword = document.querySelector('#sign-in-pass')

let passwordText = document.querySelector('#password-text')
let passwordCounter = document.querySelector('#counter')


// select icons and convert to Array

const convertToArray = (event) => {

    let icons = event.target.parentElement.querySelectorAll('lord-icon')

    iconsArray = Array.from(icons)
}


// get icons from inputs

const getIcons = (event) => {

    convertToArray(event)

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


// show and hide password in login page

loginLockIcon.addEventListener('click', () => {

    loginLockIcon.classList.add('hidden')
    loginEyeIcon.classList.remove('hidden')
    loginPassword.setAttribute('type', 'text')

})
loginEyeIcon.addEventListener('click', () => {

    loginEyeIcon.classList.add('hidden')
    loginLockIcon.classList.remove('hidden')
    loginPassword.setAttribute('type', 'password')

})

// find active icon and animate and show error password text

loginPassword.addEventListener('focus', (event) => {

    passwordText.classList.remove('hidden')

    convertToArray(event)

    let activeIcon = iconsArray.filter(icon => {
        let iconClass = icon.getAttribute('class')

        if (!iconClass.includes('hidden')) {
            return icon
        }
    })

    activeIcon[0].setAttribute('trigger','in')

})

loginPassword.addEventListener('blur', () => {

    passwordText.classList.add('hidden')

})

// ///////////////////////////////////////

loginPassword.addEventListener('input',(e) => {

    if (e.target.value.length > 4) {
        passwordText.style.color = '#055902'
    } else {
        passwordText.style.removeProperty('color')
    }

    passwordCounter.innerHTML = 10 - e.target.value.length 

})