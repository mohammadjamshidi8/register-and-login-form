import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'


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

let registerEmail = document.querySelector('#sign-up-email')

let registerNameInput = document.querySelector('#full-name')

let registerLockIcon = document.querySelector('#register-lock')
let registerEyeIcon = document.querySelector('#register-eye')
let registerPassword = document.querySelector('#register-pass')

let registerCounterPass = document.querySelector('#register-counter')
let registerPassText = document.querySelector('#register-password-text')

let loginForm = document.querySelector('#login-form')
let registerForm = document.querySelector('#register-form')

let loginBtn = document.querySelector('#login-btn')
let registerBtn = document.querySelector('#register-btn')

let activePageClass = 'md:text-md text-sm dark:text-white'
let otherPageClass = 'text-sm md:text-lg md:px-10 md:py-4 py-2 px-6 text-primary dark:text-emerald-500 font-bold transition duration-200 dark:bg-white bg-[rgba(255,255,255,.5)] hover:bg-white shadow-btn rounded-full dark:text-emerald-500'

let switchThemeBtn = document.querySelector('#switch-theme')
let switchToLight = document.querySelector('#light')
let switchToDark = document.querySelector('#dark')

let formRegisterBtn = document.querySelector('#register-form-btn')


let userEmail = null
let userName = null
let userPassword = null


// -------------  import supabase client ------------- //

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://umpxjdngofktrrnqcygf.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtcHhqZG5nb2ZrdHJybnFjeWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4Nzg5NzQsImV4cCI6MjAyNDQ1NDk3NH0.gPvrLp0-VZNLZV738E3Fe7Q621guwbAAbrFnHPMDYT0'

const supabase = createClient(supabaseUrl, supabaseKey)



const { data, error } = await supabase
    .from('users_info')
    .select()

// -------------  add users to supabase database ------------- //

formRegisterBtn.addEventListener('click', () => {
    console.log('true');
})


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

        event.target.ariaLabel = true;

        console.log(event.target.ariaLabel);

    } else {

        event.target.style.border = '1px solid #f24444'

        errorIcon[0].classList.remove('hidden')

        succesIcon[0].classList.add('hidden')

        event.target.ariaLabel = false;

    }
}

// --------------------------- login form ------------------------------ //

// -------------  login email validation and and animate icons ------------- //

loginEmail.addEventListener('input', (e) => {

    let isEmailValid = emailValidation.test(e.target.value)

    changeBorderColor(isEmailValid, e)

    console.log(isEmailValid);

})
// -------------  animate error icon in login pgae on focus event ------------- //

loginEmail.addEventListener('focus', (e) => {

    getIcons(e)
    errorIcon[0].setAttribute('trigger', 'in')

})
// -------------  email login page clear border on blur event ------------- //

loginEmail.addEventListener('blur', () => {

    loginEmail.style.removeProperty('border')

})

// -------------  show and hide password in login page ------------- //

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

// -------------  find active icon and animate and show error password text ------------- //

loginPassword.addEventListener('focus', (event) => {

    passwordText.classList.remove('hidden')

    convertToArray(event)

    let activeIcon = iconsArray.filter(icon => {
        let iconClass = icon.getAttribute('class')

        if (!iconClass.includes('hidden')) {
            return icon
        }
    })

    activeIcon[0].setAttribute('trigger', 'in')

})

// -------------  login page password error text hide on blur ------------- //

loginPassword.addEventListener('blur', () => {

    passwordText.classList.add('hidden')

})

// -------------  login page password counter ------------- //

loginPassword.addEventListener('input', (e) => {

    if (e.target.value.length > 4) {
        passwordText.style.color = '#055902'
    } else {
        passwordText.style.removeProperty('color')
    }

    passwordCounter.innerHTML = 10 - e.target.value.length

})

// --------------------------- switch between login and register form ------------------------------ //

registerBtn.addEventListener('click', () => {

    registerForm.classList.remove('hidden')
    loginForm.classList.add('hidden')

    loginBtn.setAttribute('class', otherPageClass)
    registerBtn.setAttribute('class', activePageClass)

})

loginBtn.addEventListener('click', () => {

    loginForm.classList.remove('hidden')
    registerForm.classList.add('hidden')

    registerBtn.setAttribute('class', otherPageClass)
    loginBtn.setAttribute('class', activePageClass)

})



// --------------------------- register form ------------------------------ //

// -------------  register email validation and and animate icons ------------- //

registerEmail.addEventListener('input', (e) => {

    let isEmailValid = emailValidation.test(e.target.value)

    changeBorderColor(isEmailValid, e)


})

// -------------  animate error icon in register page on focus event ------------- //

registerEmail.addEventListener('focus', (e) => {

    getIcons(e)
    errorIcon[0].setAttribute('trigger', 'in')

})

// -------------  emailregister page clear border on blur event ------------- //

registerEmail.addEventListener('blur', () => {

    registerEmail.style.removeProperty('border')

})


// -------------  register full name validation and and animate icons ------------- //

registerNameInput.addEventListener('input', (e) => {

    let isFullNameValid = e.target.value.length > 3

    changeBorderColor(isFullNameValid, e)

})

// -------------  animate error icon in full name page on focus event ------------- //

registerNameInput.addEventListener('focus', (e) => {

    getIcons(e)
    errorIcon[0].setAttribute('trigger', 'in')

})

// -------------  register page clear border on blur event ------------- //

registerNameInput.addEventListener('blur', () => {

    registerNameInput.style.removeProperty('border')

})



// -------------  show and hide password in login page ------------- //

registerLockIcon.addEventListener('click', () => {

    registerLockIcon.classList.add('hidden')
    registerEyeIcon.classList.remove('hidden')
    registerPassword.setAttribute('type', 'text')

})
registerEyeIcon.addEventListener('click', () => {

    registerEyeIcon.classList.add('hidden')
    registerLockIcon.classList.remove('hidden')
    registerPassword.setAttribute('type', 'password')

})

// -------------  find active icon and animate and show error password text ------------- //

registerPassword.addEventListener('focus', (event) => {

    registerPassText.classList.remove('hidden')

    convertToArray(event)

    let activeIcon = iconsArray.filter(icon => {
        let iconClass = icon.getAttribute('class')

        if (!iconClass.includes('hidden')) {
            return icon
        }
    })

    activeIcon[0].setAttribute('trigger', 'in')

})

// -------------  login page password error text hide on blur ------------- //

registerPassword.addEventListener('blur', () => {

    registerPassText.classList.add('hidden')

})

// -------------  login page password counter ------------- //

registerPassword.addEventListener('input', (e) => {

    if (e.target.value.length > 4) {
        registerPassText.style.color = '#055902'
    } else {
        registerPassText.style.removeProperty('color')
    }

    registerCounterPass.innerHTML = 10 - e.target.value.length

})

// -------------  switch between light and dark mode ------------- //

switchThemeBtn.addEventListener('click', () => {

    let lightClass = switchToLight.getAttribute('class')

    if (lightClass.includes('hidden')) {

        switchToLight.classList.remove('hidden')
        switchToDark.classList.add('hidden')

        document.body.setAttribute('class', 'dark')
        console.log('dark');

    } else {

        switchToLight.classList.add('hidden')
        switchToDark.classList.remove('hidden')

        document.body.setAttribute('class', 'light')

    }

})

// -------------  add data to supabase ------------- //

async function insertDataToSupabase(name,email,password) {
    const { error } = await supabase
        .from('users_info')
        .insert({ full_name: name, email: email, password: password })
}

formRegisterBtn.addEventListener('click', (e) => {

    e.preventDefault()

    registerEmail.ariaLabel === true ? userEmail = registerEmail.value : console.log('false email');
    registerNameInput.ariaLabel === true ? userName = registerNameInput.value : console.log('false name');
    registerPassword.value.length > 4 ? userPassword = registerPassword.value : console.log('false pass');

  

    if (userEmail && userName && userPassword) {

        async function getDataFromSupabase() {

            const { data, error } = await supabase
                .from('users_info')
                .select()
            let userArray = data

            let isUserExist = userArray.filter(user => {
                return user.email === userEmail
            })

            console.log(Boolean(isUserExist));
            if (isUserExist.length > 0) {
                alert('user is exist')

            } else {
                insertDataToSupabase(userName,userEmail,userPassword)
            }

        }

        getDataFromSupabase()


        registerEmail.value = ''
        registerNameInput.value = ''
        registerPassword.value = ''

        registerEmail.focus()





    } else {
        console.log('check all fields');
    }
})