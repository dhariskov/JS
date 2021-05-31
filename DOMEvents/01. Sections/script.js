function create(words) {
   const content = document.getElementById('content')
   for (let word of words){
      const divEl = document.createElement('DIV')
      const paragraphEl = document.createElement('P')
      paragraphEl.textContent = word
      paragraphEl.style.display = 'none'
      divEl.appendChild(paragraphEl)
      divEl.addEventListener('click', clicked)
      content.appendChild(divEl)
   }

   function clicked(el){
      el.target.children[0].style.display = 'block'
   }
}