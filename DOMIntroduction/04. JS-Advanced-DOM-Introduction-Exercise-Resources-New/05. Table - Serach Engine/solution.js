function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const input = document.querySelector('#searchField')
    const rows = document.querySelectorAll('tbody tr')

    function onClick() {
        if (input.value != '') {
            for (let row of rows) {
                console.log(row)
                if (row.textContent.toLowerCase().includes(input.value.toLowerCase())) {
                    row.classList.add('select')
                } else {
                    row.removeAttribute('class')
                }
            }
        }
    }
}