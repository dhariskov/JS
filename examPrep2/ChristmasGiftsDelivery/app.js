function solution() {
    const buttonAddGift = document.getElementsByTagName('button')[0]
    buttonAddGift.addEventListener('click', clicked)

    function clicked(e) {
        const giftName = e.target.parentNode.children[0].value
        e.target.parentNode.children[0].value = ''

        const li = document.createElement('LI')
        li.className = 'gift'
        li.textContent = giftName
        const sendButton = document.createElement('button')
        sendButton.id = 'sendButton'
        sendButton.textContent = 'Send'
        sendButton.addEventListener('click', sendClicked)
        const discardButton = document.createElement('button')
        discardButton.id = 'discardButton'
        discardButton.textContent = 'Discard'
        discardButton.addEventListener('click', discardClicked)
        li.appendChild(sendButton)
        li.appendChild(discardButton)

        const listOfGiftsToAppend = document.getElementsByTagName('section')[1].getElementsByTagName('ul')[0]
        listOfGiftsToAppend.appendChild(li)
        let allListOfGifts = Array.from(document.getElementsByClassName('card')[1].children[1].children)
        console.log(allListOfGifts)
        allListOfGifts.sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
        for (let el of allListOfGifts) {
            el.parentNode.appendChild(el)
        }

        function sendClicked(e) {
            const elToMove = e.target.parentNode
            elToMove.children[0].remove()
            elToMove.children[0].remove()

            const sendGifts = document.getElementsByClassName('card')[2]
            sendGifts.children[1].appendChild(elToMove)
        }

        function discardClicked(e) {
            const elToMove = e.target.parentNode
            elToMove.children[0].remove()
            elToMove.children[0].remove()

            const discardGifts = document.getElementsByClassName('card')[3]
            discardGifts.children[1].appendChild(elToMove)
        }
    }
}
//
// function solution() {
//     // attach event listeners to input form
//     const [gifts, sent, discarded] = document.querySelectorAll('section ul');
//     const input = document.querySelector('input');
//     document.querySelector('button').addEventListener('click', addGift);
//
//     // create gift elements with buttons
//     function addGift() {
//         const name = input.value;
//         input.value = '';
//
//         const element = e('li', name, 'gift');
//         const sendBtn = e('button', 'Send', 'sendButton');
//         const discardBtn = e('button', 'Discard', 'discardButton');
//         element.appendChild(sendBtn);
//         element.appendChild(discardBtn);
//
//         sendBtn.addEventListener('click', () => sendGift(name, element));
//         discardBtn.addEventListener('click', () => discardGift(name, element));
//
//         gifts.appendChild(element);
//
//         sortGifts();
//     }
//
//     // logic for sending gifts
//     function sendGift(name, gift) {
//         gift.remove();
//         const element = e('li', name, 'gift');
//         sent.appendChild(element);
//     }
//
//     // logic for discarding gifts
//     function discardGift(name, gift) {
//         gift.remove();
//         const element = e('li', name, 'gift');
//         discarded.appendChild(element);
//     }
//
//     // sort gifts list
//     function sortGifts() {
//         Array
//             .from(gifts.children)
//             .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
//             .forEach(g => gifts.appendChild(g));
//     }
//
//     function e(type, content, className) {
//         const result = document.createElement(type);
//         result.textContent = content;
//         if (className) {
//             result.className = className;
//         }
//         return result;
//     }
// }