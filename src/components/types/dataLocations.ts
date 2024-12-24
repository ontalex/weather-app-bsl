import { reactive } from 'vue';

interface Temperature {
    currentTemp: number
    maxTemp: number
    minTemp: number
}

export interface Location {
    city: string
    statusId: string
    temperature: Temperature
}

interface LocationStatusId {
    id: string
    name: string
    img: string
    alt: string
}
export const locations: Location[] = reactive([])
export const locationStatusId: LocationStatusId[] = [
    {
        id: 'Overcast',
        name: 'Облачно',
        img: '/moon_cloud_fast_wind.svg',
        alt: 'Луна и облако с сильным ветром',
    },
    {
        id: 'Patchy light snow',
        name: 'Легкий снег',
        img: '/moon_cloud_fast_wind.svg',
        alt: 'Луна и облако с сильным ветром',
    },
    {
        id: 'Partly cloudy',
        name: 'Переменная облачность',
        img: '/moon_cloud_fast_wind.svg',
        alt: 'Луна и облако с переменной облачностью',
    },
    {
        id: 'Light sleet',
        name: 'Легкий дождь с дождем',
        img: '/moon_cloud_mid_rain.svg',
        alt: 'Луна и облако со средним дождем',
    },
    {
        id: 'Light rain',
        name: 'Легкий дождь',
        img: '/moon_cloud_mid_rain.svg',
        alt: 'Луна и облако со средним дождем',
    },
    {
        id: 'Light snow',
        name: 'Легкий снег',
        img: '/moon_cloud_mid_rain.svg',
        alt: 'Луна и облако со средним дождем',
    },
    {
        id: 'Freezing fog',
        name: 'Морозный туман',
        img: '/moon_cloud_fast_wind.svg',
        alt: 'Луна и облако с морозным туманом',
    },
    {
        id: 'Clear',
        name: 'Ясно',
        img: '/cloud_3_zap.svg',
        alt: 'Иконка ясной погоды',
    },
    {
        id: 'Heavy snow',
        name: 'Сильный снегопад',
        img: '/moon_cloud_fast_wind.svg',
        alt: 'Луна и облако с сильным снегопадом',
    },
    {
        id: 'Light freezing rain',
        name: 'Легкий ледяной дождь',
        img: '//moon_cloud_mid_rain.svg',
        alt: 'Луна и облако с легким ледяным дождем',
    },
]
