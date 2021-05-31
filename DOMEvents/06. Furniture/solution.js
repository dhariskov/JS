function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'))
    buttons.forEach(b => b.addEventListener('click', clicked))


    function clicked(e) {
        const textAres = document.getElementsByTagName('textarea')

        let parsedData = JSON.parse(textAres[0].value)
        for (let obj of parsedData) {
            if (e.target.innerText === 'Generate') {
                const tBody = document.getElementsByTagName('tbody')[0]

                const newTr = document.createElement('TR')
                tBody.appendChild(newTr)

                const newTdImage = document.createElement('TD')
                const newIMGImage = document.createElement('IMG')
                newIMGImage.src = obj['img']
                newTr.appendChild(newTdImage)
                newTdImage.appendChild(newIMGImage)


                const newTdName = document.createElement('TD')
                const newPName = document.createElement('P')
                newPName.innerText = obj['name']
                newTr.appendChild(newTdName)
                newTdName.appendChild(newPName)

                const newTdPrice = document.createElement('TD')
                const newPPrice = document.createElement('P')
                newPPrice.innerText = obj['price']
                newTr.appendChild(newTdPrice)
                newTdPrice.appendChild(newPPrice)

                const newTdDecor = document.createElement('TD')
                const newPDecor = document.createElement('P')
                newPDecor.innerText = obj['decFactor']
                newTr.appendChild(newTdDecor)
                newTdDecor.appendChild(newPDecor)

                const newTdCheckBox = document.createElement('TD')
                const newPCheckBox = document.createElement('INPUT')
                newPCheckBox.setAttribute('type', 'checkbox')
                newTr.appendChild(newTdCheckBox)
                newTdCheckBox.appendChild(newPCheckBox)

            }
        }

        if (e.target.innerText === 'Buy') {
            const allTrs = document.querySelectorAll('tbody tr')
            let namesArr = []
            let totalPrice = 0
            let decorationFactors = 0
            for (let el of allTrs) {
                // console.log(el.children[4].children[0].checked)
                if (el.children[4].children[0].checked){
                    namesArr.push(el.children[1].children[0].textContent)
                    totalPrice += Number(el.children[2].children[0].textContent)
                    decorationFactors += Number(el.children[3].children[0].textContent)
                }
            }
            decorationFactors = (decorationFactors/namesArr.length)
            const result = `Bought furniture: ${namesArr.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactors}`
            textAres[1].value = result
        }
    }
}