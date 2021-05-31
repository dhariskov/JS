function addItem() {
    const itemText = document.getElementById('newItemText')
    const itemValue = document.getElementById('newItemValue')

    let newElOption = document.createElement('option')

    newElOption.textContent = itemText.value
    newElOption.value = itemValue.value
    console.log(newElOption)
    document.getElementById('menu').appendChild(newElOption)

    itemText.value = null
    itemValue.value = null
}