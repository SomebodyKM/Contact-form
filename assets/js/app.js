const form = document.querySelector('form')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const queryType = document.querySelectorAll('input[type="radio"]')
const message = document.querySelector('#message')
const agreement = document.querySelector('#agreement')
const fieldRequired = document.querySelectorAll('.field-required-msg')
const emailValidation = document.querySelector('.email-validation')
const submitMsg = document.querySelector('.submit-msg')

const queryTypeLabel = document.querySelectorAll('.query-type label')

queryTypeLabel.forEach(type => {
    const queryTypeInput = type.querySelector('input[type="radio"]')
    queryTypeInput.addEventListener('change', () => {
        queryTypeLabel.forEach(choice => choice.classList.remove('select'))
        if (queryTypeInput.checked) {
            type.classList.add('select')
        }
    })
})


form.addEventListener('submit', e => {
    let isValid = true
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!firstname.value.trim()) {
        fieldRequired[0].style.display = "block"
        firstname.classList.add('error')
        isValid = false
    } else {
        fieldRequired[0].style.display = "none"
        firstname.classList.remove('error')
    }

    firstname.addEventListener('change', () => {
        fieldRequired[0].style.display = "none"
        firstname.classList.remove('error')
    })

    if (!lastname.value.trim()) {
        fieldRequired[1].style.display = "block"
        lastname.classList.add('error')
        isValid = false
    } else {
        fieldRequired[1].style.display = "none"
        lastname.classList.remove('error')
    }

    lastname.addEventListener('change', () => {
        fieldRequired[1].style.display = "none"
        lastname.classList.remove('error')
    })

    if (!email.value.trim()) {
        fieldRequired[2].style.display = "block"
        email.classList.add('error')
        isValid = false
    } else if (!pattern.test(email.value)) {
        emailValidation.style.display = "block"
        fieldRequired[2].style.display = "none"
        email.classList.add('error')
        isValid = false
    } else {
        fieldRequired[2].style.display = "none"
        emailValidation.style.display = "none"
        email.classList.remove('error')
    }

    email.addEventListener('change', () => {
        fieldRequired[2].style.display = "none"
        emailValidation.style.display = "none"
        email.classList.remove('error')
    })

    let radioChecked = false
    queryType.forEach(radio => {
        if (radio.checked) {
            radioChecked = true
        }
    })

    if (!radioChecked) {
        fieldRequired[3].style.display = "block"
        isValid = false
    } else {
        fieldRequired[3].style.display = "none"
    }

    queryType.forEach(type => {
        type.addEventListener('change', () => {
            fieldRequired[3].style.display = "none"
        })
    })

    if (!message.value.trim()) {
        fieldRequired[4].style.display = "block"
        message.classList.add('error')
        isValid = false
    } else {
        fieldRequired[4].style.display = "none"
        message.classList.remove('error')
    }

    message.addEventListener('change', () => {
        fieldRequired[4].style.display = "none"
        message.classList.remove('error')
    })

    if (!agreement.checked) {
        fieldRequired[5].style.display = "block"
        isValid = false
    } else {
        fieldRequired[5].style.display = "none"
    }

    agreement.addEventListener('change', () => {
        fieldRequired[5].style.display = "none"
    })

    if (!isValid) {
        e.preventDefault()
    } else {
        submitMsg.style.top = "10px"
        e.preventDefault()
        form.reset()

        queryTypeLabel.forEach(select => select.classList.remove('select'))
    }
})