function validate() {
    const email = document.getElementById('email')
    email.addEventListener('change', changed)

    function changed(e){
        const regex = /[a-z@]+[.][a-z]+/g;
        // console.log(e.target.value)
        let result = e.target.value.match(regex)
        if (!result){
            e.target.classList.add('error')
        }else{
            e.target.classList.remove('error')
        }
    }
}