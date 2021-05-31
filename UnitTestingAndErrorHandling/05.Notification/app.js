function notify(message) {
  const element = document.getElementById('notification')
  element.addEventListener('click', clicked)
  element.innerText = message
  element.style.display = 'block'
  console.log(element)
  function clicked(e){
    e.target.style.display = 'none'
  }
}