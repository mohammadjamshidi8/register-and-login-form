import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'


// import { Form } from "../components/Form/form.js";


// window.customElements.define('site-form',Form)

// select elements

let loginEmail = document.querySelector('#sign-in-email')
let errorIcon = null
let succesIcon = null
const emailValidation = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/

let iconsArray = null;

let mainContainer = document.querySelector('#main-container')

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
let formLoginBtn = document.querySelector('#form-login-btn')


let userEmail = null
let userName = null
let userPassword = null

let modal = document.querySelector('#modal')
let modalMessage = document.querySelector('#modal-text')
let closeModalBtn = document.querySelector('#modal-close')

let errorEmailMassege = document.querySelector('#sign-up-email-error')
let errorNameMassege = document.querySelector('#full-name-error')
let errorPasswordMassege = document.querySelector('#register-pass-error')
let errorMassegeClass = 'text-danger capitalize'


let resaulModal = document.querySelector('#succes-modal')

let loginErrorMassegeEmail = document.querySelector('#sign-in-email-error')
let loginErrorPasswordMassege = document.querySelector('#login-pass-error')

let dontHaveAccountModal = document.querySelector('#register-modal')
let dontHaveAccountMassege = document.querySelector('#register-modal-text')

let forgotPasswordElem = document.querySelector('#forgot-pass')

let changePassModal = document.querySelector('#change-pass-modal')
let changePassModalCloseBtn = document.querySelector('#change-pass-modal-close')

let changePasswordEmail = document.querySelector('#change-modal-email')

let modalExistUserMassege = document.querySelector('#change-modal-email-check')

let isEmailCorrect = false
let isPasswordCorrect = false

let userNewPassword = document.querySelector('#change-modal-pass')
let modalPasswordCheck = document.querySelector('#new-pass-modal')
let submitChanges = document.querySelector('#submit-change-password')

let findUser = null

let succefulyText = document.querySelector('#succefuly-massege')
let fillCorrectlyMassege = document.querySelector('#fill-correctly')

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

    let test = document.querySelector(`#${event.target.id}-error`)


    // console.log(`#${event.target.id}-error`);


    if (condition) {

        event.target.style.border = '1px solid rgb(110,231,183)'

        succesIcon[0].classList.remove('hidden')

        errorIcon[0].classList.add('hidden')

        succesIcon[0].setAttribute('trigger', 'in')

        event.target.ariaLabel = true;

        let errorMassegElem = document.querySelector(`#${event.target.id}-error`)

        console.log('test: ', errorMassegElem);

        if (errorMassegElem.getAttribute('class') === errorMassegeClass) {
            errorMassegElem.classList.add('hidden')
        }

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

        console.log(loginErrorPasswordMassege);

        if (loginErrorPasswordMassege.getAttribute('class') === errorMassegeClass) {
            loginErrorPasswordMassege.classList.add('hidden')
        }

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

        if (errorPasswordMassege.getAttribute('class') === errorMassegeClass) {
            errorPasswordMassege.classList.add('hidden')
        }


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

async function insertDataToSupabase(name, email, password) {
    const { error } = await supabase
        .from('users_info')
        .insert({ full_name: name, email: email, password: password })
}

formRegisterBtn.addEventListener('click', (e) => {

    e.preventDefault()

    if (registerEmail.ariaLabel === 'true') {

        userEmail = registerEmail.value

    } else {

        errorEmailMassege.classList.remove('hidden')

    }

    if (registerNameInput.ariaLabel === 'true') {

        userName = registerNameInput.value

    } else {

        errorNameMassege.classList.remove('hidden')

    }

    if (registerPassword.value.length > 4) {

        userPassword = registerPassword.value

    } else {

        errorPasswordMassege.classList.remove('hidden')

    }

    // check all field for correct data
    if (userEmail && userName && userPassword) {

        // get users for check the user doesn't exist
        async function getDataFromSupabase() {

            const { data, error } = await supabase
                .from('users_info')
                .select()
            let userArray = data

            let isUserExist = userArray.filter(user => {

                return user.email === userEmail

            })
            // show modal if user existing
            if (isUserExist.length > 0) {
                // close modal with button
                closeModalBtn.addEventListener('click', () => {
                    modal.classList.add('hidden')
                })
                // show modal on duplicate email
                modal.classList.remove('hidden')

                modalMessage.innerHTML = userEmail

                setTimeout(() => {
                    modal.classList.add('hidden')
                }, 5000);

                // if user doesn't exist add to database
            } else {

                insertDataToSupabase(userName, userEmail, userPassword)

                resaulModal.classList.remove('hidden')

                setTimeout(() => {
                    resaulModal.classList.add('hidden')
                }, 4000);

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

// -------------  get data from database for login user ------------- //

formLoginBtn.addEventListener('click', (e) => {

    e.preventDefault()

    if (loginEmail.ariaLabel === 'true') {

        userEmail = loginEmail.value

    } else {

        loginErrorMassegeEmail.classList.remove('hidden')

    }

    if (loginPassword.value.length > 4) {

        userPassword = loginPassword.value

        console.log(typeof userPassword);

    } else {

        loginErrorPasswordMassege.classList.remove('hidden')

    }

    if (userEmail && userPassword) {


        async function getData() {
            const { data, error } = await supabase
                .from('users_info')
                .select()

            // find data with same email and password
            let userInDatabase = data.filter(user => {
                if (user.email === userEmail && (user.password).toString() === (userPassword).toString()) {
                    return user;
                }
            })

            // find forgot password user

            let userForgotPass = data.filter(user => {
                if (user.email === userEmail && (user.password).toString() !== (userPassword).toString()) {
                    return user;
                }
            })


            // if finding method have value then show login massege
            if (userInDatabase.length) {

                resaulModal.classList.remove('hidden')

                setTimeout(() => {

                    resaulModal.classList.add('hidden')

                }, 4000);

            } else {

                dontHaveAccountModal.classList.remove('hidden')

                dontHaveAccountMassege.innerHTML = userEmail

                setTimeout(() => {
                    dontHaveAccountModal.classList.add('hidden')
                }, 4000);


            }



            // if userForgotPass have value then show forgot pass modal

            if (userForgotPass.length) {
                dontHaveAccountMassege.innerHTML = userEmail

                dontHaveAccountModal.classList.remove('hidden')

                dontHaveAccountModal.innerHTML = `Your password is incorrect,if you don't remember password ,please click forgot password button:)`


            }

        }

        getData()


    } else {
        console.log('false');
    }


})
// -------------  show and hide change password modal with clicking ------------- //

forgotPasswordElem.addEventListener('click', () => {

    changePassModal.classList.remove('hidden')

    mainContainer.classList.add('blur-md')

})


changePassModalCloseBtn.addEventListener('click', () => {

    changePassModal.classList.add('hidden')

    mainContainer.classList.remove('blur-md')

})



// -------------  checking for email exist in database ------------- //

changePasswordEmail.addEventListener('blur', (e) => {

    let userEmailChange = e.target.value

    async function reviewData() {

        const { data, error } = await supabase
            .from('users_info')
            .select()

        console.log(data);

        let userWantChange = data.filter(user => {
            return user.email === userEmailChange
        })

        if (userWantChange.length) {

            modalExistUserMassege.classList.remove('hidden')

            modalExistUserMassege.innerHTML = 'your email is correct'

            modalExistUserMassege.classList.add('text-emerald-500')

            modalExistUserMassege.classList.remove('text-danger')

            isEmailCorrect = true
            findUser = userWantChange

        } else {

            modalExistUserMassege.classList.remove('hidden')

            modalExistUserMassege.innerHTML = `There is no user with this email`
            modalExistUserMassege.classList.remove('text-emerald-500')

            modalExistUserMassege.classList.add('text-danger')

            isEmailCorrect = false
            findUser = null
        }

    }

    reviewData()

})

// -------------  check new password and error if the length less than 4 digits ------------- //

userNewPassword.addEventListener('input', (e) => {

    let newPassword = e.target.value

    if (newPassword.length > 4) {

        modalPasswordCheck.classList.remove('hidden')

        modalPasswordCheck.innerHTML = 'is more than 4 digits'

        modalPasswordCheck.classList.add('text-emerald-500')

        modalPasswordCheck.classList.remove('text-danger')

        isPasswordCorrect = true

    } else {

        modalPasswordCheck.classList.remove('hidden')

        modalPasswordCheck.innerHTML = `must be more than 4 digit`
        modalPasswordCheck.classList.remove('text-emerald-500')

        modalPasswordCheck.classList.add('text-danger')

        isPasswordCorrect = false

    }


})

// -------------  update user password in supabase database ------------- //


submitChanges.addEventListener('click', () => {

    let userPass = userNewPassword.value

    async function changePassword() {

        const { error } = await supabase
            .from('users_info')
            .update({ 'password': userPass })
            .eq('email', changePasswordEmail.value)

        if (!error) {

            changePassModal.classList.add('hidden')

            mainContainer.classList.remove('blur-md')

            resaulModal.classList.remove('hidden')

            succefulyText.innerHTML = 'your password Changed :)'

            setTimeout(() => {
                resaulModal.classList.add('hidden')

            }, 4000);


        } else {

            console.log('nothing');

        }

    }
    // change password if email and password valid
    if (isEmailCorrect && isPasswordCorrect) {

        changePassword()

    // show error massege if email or password was invalid

    } else {

        fillCorrectlyMassege.classList.remove('hidden')

        setTimeout(() => {
            fillCorrectlyMassege.classList.add('hidden')
        }, 4000);
    }

})