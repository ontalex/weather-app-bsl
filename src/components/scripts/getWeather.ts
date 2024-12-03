import { locations } from './dataWeather'

const weatherApiUrlBase = 'https://api.weatherapi.com/v1'

const API_KEY = 'd34e32bf6a0e40cb9d503900240212' // add yor key
// const CITY = [
//   'Москва',
//   'Санкт-Петербург',
//   'Новосибирск',
//   'Екатеринбург',
//   'Казань',
//   'Нижний Новгород',
//   'Челябинск',
//   'Самара',
//   'Омск',
//   'Ростов-на-Дону',
//   'Уфа',
//   'Красноярск',
//   'Пермь',
//   'Воронеж',
//   'Волгоград',
//   'Саратов',
//   'Тюмень',
//   'Иркутск',
//   'Кемерово',
//   'Томск',
//   'Ульяновск',
//   'Барнаул',
//   'Ставрополь',
//   'Ярославль',
//   'Махачкала',
//   'Хабаровск',
//   'Минск',
//   'Астана',
//   'Владивосток',
//   'Сочи',
//   'Петрозаводск',
//   'Псков',
//   'Калуга',
//   'Архангельск',
//   'Кострома',
//   'Набережные Челны',
//   'Симферополь',

//   'Нью-Йорк',
//   'Лондон',
//   'Токио',
//   'Париж',
//   'Сидней',
//   'Берлин',
//   'Дубай',
//   'Стамбул',
//   'Тель-Авив',
//   'Рим',
//   'Барселона',
//   'Мадрид',
//   'Лос-Анджелес',
//   'Чикаго',
//   'Сан-Франциско',
//   'Мехико',
//   'Лиссабон',
//   'Кейптаун',
//   'Дели',
//   'Шанхай',
//   'Пекин',
//   'Гонконг',
//   'Торонто',
//   'Монреаль',
//   'Сингапур',
//   'Буэнос-Айрес',
//   'Киев',
//   'Сеул',
//   'Рио-де-Жанейро',
//   'Лагос',
//   'Бангкок',
//   'Лима',
//   'Сеул',
//   'Бангкок',
//   'Киото',
//   'Будапешт',
//   'Вена',
//   'Милан',
//   'Хельсинки',
//   'Копенгаген',
//   'Мельбурн',
//   'Сеул',
//   'Гамбург',
//   'Амстердам',
// ]

const CITIES_NAME = [
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

export const getWeatherCity = async () => {
  for (const cityName of CITIES_NAME) {
    const urlForecast = `${weatherApiUrlBase}/forecast.json?key=${API_KEY}&q=${cityName}&days=1`
    const urlCurrent = `${weatherApiUrlBase}/current.json?key=${API_KEY}&q=${cityName}`

    try {
      const responseForecast = await fetch(urlForecast)
      const responseCurrent = await fetch(urlCurrent)
      const dataForecast = await responseForecast.json()
      const dataCurrent = await responseCurrent.json()
      const forecast = dataForecast.forecast.forecastday[0].day

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
