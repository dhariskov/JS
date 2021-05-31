function solve() {
    const addButton = document.getElementById('add')
    addButton.addEventListener('click', clicked)
    const task = document.getElementById('task')
    const description = document.getElementById('description')
    const dueDate = document.getElementById('date')
    const [addTask , open, inProgress, complete] = document.getElementsByTagName('section')


    function clicked(e) {
        e.preventDefault()

        if (task.value && description.value && dueDate.value) {
            const article = addElement('article', '', '')
            const h3 = addElement('h3', task.value, '')
            const pDescription = addElement('p', ('Description: ' + description.value), '')
            const pDueDate = addElement('p', ('Due Date: ' + dueDate.value), '')
            const div = addElement('div', '', 'flex')
            const buttonStart = addElement('button', 'Start', 'green')
            const buttonDel = addElement('button', 'Delete', 'red')

            open.children[1].appendChild(article)
            article.appendChild(h3)
            article.appendChild(pDescription)
            article.appendChild(pDueDate)
            article.appendChild(div)
            div.appendChild(buttonStart)
            div.appendChild(buttonDel)

            const startButtons = Array.from(document.getElementsByClassName('green'))
            const delButtons = Array.from(document.getElementsByClassName('red'))
            startButtons.forEach(el => el.addEventListener('click', startFunc))
            delButtons.forEach(el => el.addEventListener('click', delFunc))


            function startFunc(e){
                // e.preventDefault()
                const articleToMove = e.target.parentNode.parentNode
                articleToMove.children[3].children[0].remove()
                const finishButton = addElement('button','Finish', 'orange')
                finishButton.addEventListener('click', finishFunc)
                articleToMove.children[3].appendChild(finishButton)
                inProgress.children[1].appendChild(articleToMove)
            }

            function delFunc(e){
                // e.preventDefault()
                e.target.parentNode.parentNode.remove()
            }

            function finishFunc(e){
                // e.preventDefault()
                const contentToMove = e.target.parentNode.parentNode
                contentToMove.children[3].remove()
                complete.children[1].appendChild(contentToMove)
            }
        }
    }

    function addElement(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}