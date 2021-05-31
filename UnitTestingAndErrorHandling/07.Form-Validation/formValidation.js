function validate() {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', clicked)

    const checkCompanyCheckBox = document.getElementById('company')
    checkCompanyCheckBox.addEventListener('change', () => {
        if (checkCompanyCheckBox.checked) {
            document.getElementById('companyInfo').style.display = 'block'
        } else {
            document.getElementById('companyInfo').style.display = 'none'
        }
    })

    function clicked(e) {
        e.preventDefault()
        const userName = document.getElementById('username')
        const regExUserName = /^[A-Za-z0-9]{3,20}$/g;
        const userNameValid = userName.value.match(regExUserName)

        let validUsername = false

        if (!Boolean(userNameValid)) {
            userName.style.border = ''
            userName.style['border-color'] = 'red'
            validUsername = false
        } else {
            // userName.style.borderColor = ''
            userName.style.border = 'none'
            validUsername = true
        }

        const email = document.getElementById('email')
        const regExEmail = /[@][A-Za-z0-9_]*[.]+/g;
        const emailValid = email.value.match(regExEmail)

        let validEmail = false
        if (!Boolean(emailValid)) {
            email.style.border = ''
            email.style['border-color'] = 'red'
            validEmail = false
        } else {
            // email.style.borderColor = ''
            email.style.border = 'none'
            validEmail = true
        }

        const userPassword = document.getElementById('password')
        const regPassword = /^[\w_]{5,15}$/g;
        const passwordValid = userPassword.value.match(regPassword)

        let validPassword = false
        if (!Boolean(passwordValid)) {
            userPassword.style.border = ''
            userPassword.style['border-color'] = 'red'
            validPassword = false
        } else {
            // userPassword.style.borderColor = ''
            userPassword.style.border = 'none'
            validPassword = true
        }

        const confirmPassword = document.getElementById('confirm-password')

        let validPassConfirm = false
        if (userPassword.value !== confirmPassword.value) {
            confirmPassword.style.border = ''
            confirmPassword.style['border-color'] = 'red'
            userPassword.style.border = ''
            userPassword.style['border-color'] = 'red'
            validPassConfirm = false
        } else {
            if (!Boolean(passwordValid)) {
                confirmPassword.style.border = ''
                confirmPassword.style['border-color'] = 'red'
                userPassword.style.border = ''
                userPassword.style['border-color'] = 'red'
                validPassConfirm = false
            } else {
                // confirmPassword.style.borderColor = ''
                confirmPassword.style.border = 'none'
                validPassConfirm = true
            }
        }
        // const checkCompanyCheckBox = document.getElementById('company')

        let validCard = true
        // if (checkCompanyCheckBox.checked) {
        if (document.getElementById('companyInfo').style.display === 'block') {
            const companyCard = document.getElementById('companyNumber')
            console.log(companyCard)
            if (!(Number(companyCard.value) >= 1000 && Number(companyCard.value) <= 9999)) {
                companyCard.style.border = ''
                companyCard.style['border-color'] = 'red'
                validCard = false
            } else {
                // companyCard.style.borderColor = ''
                companyCard.style.border = 'none'
                validCard = true
            }
        }
        const showValid = document.getElementById('valid')
        if (validUsername && validEmail && validPassword && validPassConfirm && validCard) {
            showValid.style.display = 'block'
        } else {
            showValid.style.display = 'none'
        }
    }
}
