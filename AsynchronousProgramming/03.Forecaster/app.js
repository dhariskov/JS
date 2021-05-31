function attachEvents() {
    const button = document.getElementById('submit')
    button.addEventListener('click', clicked)

    async function clicked() {
        const forecastSection = document.getElementById('forecast')
        try {
            const input = document.getElementById('location').value

            const urlCity = 'http://localhost:3030/jsonstore/forecaster/locations/'
            const response = await fetch(urlCity)
            const data = await response.json()
            const city = data.filter(el => el.code == input)[0]

            const cityName = city.name

            const urlCurrent = 'http://localhost:3030/jsonstore/forecaster/today/' + city.code
            const responseCurrent = await fetch(urlCurrent)
            const dataCurrent = await responseCurrent.json()
            const currentWeatherDiv = document.getElementById('current')

            const div = document.createElement('div')
            div.innerHTML = ''
            let symbol = ''
            if (dataCurrent.forecast.condition === 'Sunny') {
                symbol = '&#x2600;'
            } else if (dataCurrent.forecast.condition === 'Partly sunny') {
                symbol = '&#x26C5;'
            } else if (dataCurrent.forecast.condition === 'Overcast') {
                symbol = '&#x2601;'
            } else if (dataCurrent.forecast.condition === 'Rain') {
                symbol = '&#x2614;'
            }
            const degreesSymbol = '&#176'

            let currentConditions = `<span class="condition symbol"> ${symbol} </span>
        <span class="condition">
        <span class="forecast-data">${dataCurrent.name}</span>
        <span class="forecast-data">${dataCurrent.forecast.low}${degreesSymbol}/${dataCurrent.forecast.high}${degreesSymbol}</span>
        <span class="forecast-data">${dataCurrent.forecast.condition}</span>
        </span>`
            currentWeatherDiv.appendChild(div)
            div.innerHTML = currentConditions


            const urlFuture = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + city.code
            const responseFuture = await fetch(urlFuture)
            const dataFuture = await responseFuture.json()
            const futureDiv = document.getElementById('upcoming')

            const divF = document.createElement('div')
            divF.className = 'forecast-info'
            futureDiv.appendChild(divF)

            let symbol1 = ''
            if (dataFuture.forecast[0].condition === 'Sunny') {
                symbol1 = '&#x2600;'
            } else if (dataFuture.forecast[0].condition === 'Partly sunny') {
                symbol1 = '&#x26C5;'
            } else if (dataFuture.forecast[0].condition === 'Overcast') {
                symbol1 = '&#x2601;'
            } else if (dataFuture.forecast[0].condition === 'Rain') {
                symbol1 = '&#x2614;'
            }

            let symbol2 = ''
            if (dataFuture.forecast[1].condition === 'Sunny') {
                symbol2 = '&#x2600;'
            } else if (dataFuture.forecast[1].condition === 'Partly sunny') {
                symbol2 = '&#x26C5;'
            } else if (dataFuture.forecast[1].condition === 'Overcast') {
                symbol2 = '&#x2601;'
            } else if (dataFuture.forecast[1].condition === 'Rain') {
                symbol2 = '&#x2614;'
            }

            let symbol3 = ''
            if (dataFuture.forecast[2].condition === 'Sunny') {
                symbol3 = '&#x2600;'
            } else if (dataFuture.forecast[2].condition === 'Partly sunny') {
                symbol3 = '&#x26C5;'
            } else if (dataFuture.forecast[2].condition === 'Overcast') {
                symbol3 = '&#x2601;'
            } else if (dataFuture.forecast[2].condition === 'Rain') {
                symbol3 = '&#x2614;'
            }

            let futureConditions = `<span class="upcoming">
        <span class="symbol"> ${symbol1} </span>
        <span class="forecast-data">${dataFuture.forecast[0].low}${degreesSymbol}/${dataFuture.forecast[0].high}${degreesSymbol}</span>
        <span class="forecast-data">${dataFuture.forecast[0].condition}</span>
        </span>
<span class="upcoming">
        <span class="symbol"> ${symbol2} </span>
        <span class="forecast-data">${dataFuture.forecast[1].low}${degreesSymbol}/${dataFuture.forecast[1].high}${degreesSymbol}</span>
        <span class="forecast-data">${dataFuture.forecast[1].condition}</span>
        </span>

<span class="upcoming">
        <span class="symbol"> ${symbol3} </span>
        <span class="forecast-data">${dataFuture.forecast[2].low}${degreesSymbol}/${dataFuture.forecast[2].high}${degreesSymbol}</span>
        <span class="forecast-data">${dataFuture.forecast[2].condition}</span>
        </span>`
            divF.innerHTML = ''
            divF.innerHTML = futureConditions
            // futureDiv.innerHTML = futureConditions



        } catch (Error){
            forecastSection.textContent = Error
        }
        forecastSection.style.display = 'block'
    }
}

attachEvents();