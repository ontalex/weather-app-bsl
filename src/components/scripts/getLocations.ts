import { locations } from '../types/dataLocations'

const weatherApiUrlBase = 'https://api.weatherapi.com/v1'

const API_KEY = 'd34e32bf6a0e40cb9d503900240212' // add yor key

export const CITIES_NAME = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Нижний Новгород',
    'Челябинск',
    'Самара',
    'Омск',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Пермь',
    'Воронеж',
    'Волгоград',
    'Нью-Йорк',
]

/**
 * Получаем список текущей погоды по городам с помощью API
 */
export const getWeatherCity = async () => {
    for await (const cityName of CITIES_NAME) {
        const urlForecast = `${weatherApiUrlBase}/forecast.json?key=${API_KEY}&q=${cityName}&days=1`
        const urlCurrent = `${weatherApiUrlBase}/current.json?key=${API_KEY}&q=${cityName}`

        try {
            const responseForecast = await fetch(urlForecast)
            const responseCurrent = await fetch(urlCurrent)
            const dataForecast = await responseForecast.json()
            const dataCurrent = await responseCurrent.json()
            const forecast = dataForecast.forecast.forecastday[0].day

            console.log(dataCurrent.current.condition.text)

            locations.push({
                city: cityName,
                statusId: dataCurrent.current.condition.text,
                temperature: {
                    currentTemp: dataCurrent.current.temp_c,
                    maxTemp: forecast.maxtemp_c,
                    minTemp: forecast.mintemp_c,
                },
            })
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error)
        }
    }
}
