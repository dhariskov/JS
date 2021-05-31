function solve() {
    const author = document.getElementById('creator')
    const title = document.getElementById('title')
    const category = document.getElementById('category')
    const content = document.getElementById('content')
    const creteButton = document.getElementsByClassName('btn create')[0]
    creteButton.addEventListener('click', clicked)

    function clicked(e){
        e.preventDefault()
        const article = addElement('article', '', '')
        const h1 = addElement('h1', title.value, '')
        const pCategory = addElement('p', 'Category:', '')
        const strong1 = addElement('strong', category.value, '')
        const pCreator = addElement('p', 'Creator:', '')
        const strong2 = addElement('strong', author.value, '')
        const pContent = addElement('p', content.value, '')
        const div = addElement('div', '', 'buttons')
        const delButton = addElement('button', 'Delete', 'btn delete')

        const archiveButton = addElement('button', 'Archive', 'btn archive')

        article.appendChild(h1)
        article.appendChild(pCategory)
        pCategory.appendChild(strong1)
        article.appendChild(pCreator)
        pCreator.appendChild(strong2)
        article.appendChild(pContent)
        article.appendChild(div)
        div.appendChild(delButton)
        div.appendChild(archiveButton)

        const placeToAddArt = document.getElementsByTagName('section')[1]
        placeToAddArt.appendChild(article)
        delButton.addEventListener('click', ()=>delClicked(article))
        archiveButton.addEventListener('click', ()=>archClicked(article))


        function delClicked(article){
            article.remove()
        }

        function archClicked(article){
            const elToArch = article.children[0].textContent

            // const ol = addElement('ol','','')
            const li = addElement('li','','')
            const OLtoAppend = document.getElementsByTagName('OL')[0]
            OLtoAppend.appendChild(li)
            li.textContent = elToArch
            let arrLi = Array.from(document.getElementsByTagName('li'))
            arrLi.sort((a,b)=> a.textContent.localeCompare(b.textContent))
            for (let el of arrLi){
                OLtoAppend.appendChild(el)
            }
            article.remove()
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
