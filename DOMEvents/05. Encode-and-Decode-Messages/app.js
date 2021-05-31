function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button')
    for (let button of buttons){
        button.addEventListener('click', clicked)
    }

    function clicked(e){
        let textAreas = Array.from(document.getElementsByTagName('textarea'))
        if(e.target.innerText == 'Encode and send it'){
            let textToSend = textAreas[0].value
            let codedText = ''
            for (let ch of textToSend){
                codedText += String.fromCharCode((ch.charCodeAt(0)+1))
            }
            textAreas[1].value = codedText
            textAreas[0].value = ''
        }
        if(e.target.innerText == 'Decode and read it'){
            let textToDecode = textAreas[1].value
            let decodedText = ''
            for (let ch of textToDecode){
                decodedText += String.fromCharCode((ch.charCodeAt(0)-1))
            }
            textAreas[1].value = decodedText
        }
    }
}