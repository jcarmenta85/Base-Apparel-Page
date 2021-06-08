const input = document.querySelector('#input')
const button = document.querySelector('.circle')
const errorMessage = document.querySelector('.error-message')
const errorIcon = document.querySelector('.error-icon')


const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  

button.addEventListener('click', () => {
    if(!re.test(input.value)){
        input.style.border = 'solid 1px hsl(0, 93%, 68%)'
        errorMessage.style.visibility = 'visible'
        errorIcon.style.visibility = 'visible'

    }else{
        input.style.border = 'solid 1px rgba(0, 0, 0, 0.24)'
        errorMessage.style.visibility = 'hidden'
        errorIcon.style.visibility = 'hidden'
        
    }
})