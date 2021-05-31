function solve() {
    const button = document.getElementsByTagName('button')[0]
    button.addEventListener('click', clicked)

    function clicked(e) {
        e.preventDefault()
        let shouldAddNewModule = true
        let h3ToUsedToFindWhereToAppend
        // const [lectureName, date, module] = document.getElementsByClassName('form-control')
        const lectureName = document.getElementsByClassName('form-control')[0]
        const date = document.getElementsByClassName('form-control')[1]
        const module = document.getElementsByClassName('form-control')[2]

        if (!(lectureName.children[1].value === '' || date.children[1].value === '' || module.children[1].selectedIndex === 0)) {
            const alreadyAddedModules = document.getElementsByTagName('h3')
            for (let mod of alreadyAddedModules) {
                if ((module.children[1].children[module.children[1].selectedIndex].value+'-MODULE').toUpperCase() === mod.innerText) {
                    shouldAddNewModule = false
                    h3ToUsedToFindWhereToAppend = mod
                    break
                }
            }
            if ((shouldAddNewModule)) {
                const parenDiv = document.getElementsByClassName('modules')[0]

                const div = document.createElement('DIV')
                div.className = 'module'
                parenDiv.appendChild(div)

                const h3 = document.createElement('H3')
                h3.textContent = (module.children[1].children[module.children[1].selectedIndex].value).toUpperCase() + '-MODULE'
                div.appendChild(h3)

                const ul = document.createElement('UL')
                div.appendChild(ul)

                const li = document.createElement('LI')
                li.className = 'flex'
                const h4 = document.createElement('H4')
                const dateFormatted = date.children[1].value.split('-').join('/').split('T').join(' - ')
                h4.textContent = `${lectureName.children[1].value} - ${dateFormatted}`
                const buttonDel = document.createElement('BUTTON')
                buttonDel.className = 'red'
                buttonDel.textContent = 'Del'
                ul.appendChild(li)
                li.appendChild(h4)
                li.appendChild(buttonDel)
                buttonDel.addEventListener('click', deleteEl)
            } else {
                const li = document.createElement('LI')
                li.className = 'flex'
                const h4 = document.createElement('H4')
                const dateFormatted = date.children[1].value.split('-').join('/').split('T').join(' - ')
                h4.textContent = `${lectureName.children[1].value} - ${dateFormatted}`
                const buttonDel = document.createElement('BUTTON')
                buttonDel.className = 'red'
                buttonDel.textContent = 'Del'
                h3ToUsedToFindWhereToAppend.parentNode.children[1].appendChild(li)
                li.appendChild(h4)
                li.appendChild(buttonDel)
                buttonDel.addEventListener('click', deleteEl)
                let someTestSorted = h3ToUsedToFindWhereToAppend.parentNode.children[1].children
                // console.log(someTestSorted)
                someTestSorted = Array.from(someTestSorted)
                // console.log(someTestSorted)
                someTestSorted.sort((a,b)=>a.children[0].innerText.split(' - ',2)[1].localeCompare(b.children[0].innerText.split(' - ',2)[1]))
                console.log(someTestSorted[0].children[0].innerText.split(' - ',2)[1])

                for (let el of someTestSorted){
                    el.parentNode.appendChild(el)
                }
            }
        }
    }

    function deleteEl(e) {
        e.preventDefault()
        if (e.target.parentElement.parentElement.childElementCount<=1){
            e.target.parentElement.parentElement.parentElement.remove()
        }else{
            e.target.parentElement.remove()
        }
    }
}