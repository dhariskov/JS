function lockedProfile() {
    const buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
        button.addEventListener('click', display)
    }

    function display(e) {
        const radioBtn = e.target.parentNode.children[2].checked
        if (!radioBtn && e.target.parentNode.children[9].style.display == '') {
            e.target.parentNode.children[9].style.display = 'block'
            e.target.innerText = 'Hide it'
        }else if (!radioBtn && e.target.parentNode.children[9].style.display == 'block'){
            e.target.parentNode.children[9].style.display = ''
            e.target.innerText = 'Show more'
        }

    }
}