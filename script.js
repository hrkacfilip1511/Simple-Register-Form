const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confPassInput = document.getElementById('confirm-password')
const submit = document.querySelector('.submit')
const errorUser = document.querySelector('.error-user')
const errorEmail = document.querySelector('.error-mail')
const errorPassword = document.querySelector('.error-password')
const errorConfPass = document.querySelector('.error-confirm-password')

usernameInput.addEventListener('input', (e) => {
    if(e.target.value !== '') {
        if(e.target.value.charCodeAt(0) >= 65 && e.target.value.charCodeAt(0) <= 90){
            errorUser.style.display = 'none'
            e.target.classList.add('correct')
            e.target.classList.remove('wrong')
        }
        else{
            errorUser.style.display = 'block'
            e.target.classList.add('wrong')
            e.target.classList.remove('correct')
        }
    }
    else{
        errorUser.style.display = 'none'
        e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
    }
})
emailInput.addEventListener('input', (e) => {
    const mailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(e.target.value !== ''){
        if(e.target.value.match(mailValidator)){
            errorEmail.style.display = 'none'
            e.target.classList.add('correct')
            e.target.classList.remove('wrong')
        }
        else{
            errorEmail.style.display = 'block'
            e.target.classList.add('wrong')
            e.target.classList.remove('correct')
        }
    }
    else{
        errorEmail.style.display = 'none'
        e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
    }
})
let confirPas = ''
passwordInput.addEventListener('input', (e) => {
    if(e.target.value !== '') {
        if(e.target.value.length >= 6){
            errorPassword.style.display = 'none'
            e.target.classList.add('correct')
            e.target.classList.remove('wrong')
            
        }
        else{
            errorPassword.style.display = 'block'
            e.target.classList.add('wrong')
            e.target.classList.remove('correct')
        }
    }
    else{
        errorPassword.style.display = 'none'
        e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
    }
    confirPas = passwordInput.value.slice(0, password.length)
})

confPassInput.addEventListener('input', (e) => {
    if(confirPas){
        if(e.target.value !== '') {
            if(e.target.value === confirPas){
                errorConfPass.style.display = 'none'
                e.target.classList.add('correct')
                e.target.classList.remove('wrong')
            }
            else{
                errorConfPass.style.display = 'block'
                e.target.classList.add('wrong')
                e.target.classList.remove('correct')
            }
        }
        else{
            errorConfPass.style.display = 'none'
            e.target.classList.remove('correct')
            e.target.classList.remove('wrong')
        }
    }
    else{
        console.log('Find error')
    }
})

submit.addEventListener('click', edit)

function edit() {
    if(usernameInput.classList.contains('correct') && emailInput.classList.contains('correct')
     && passwordInput.classList.contains('correct') &&confPassInput.classList.contains('correct')){
        alert(`Welcome ${usernameInput.value}!`)
    }
    else{
        alert('Something went wrong')
    }
}


