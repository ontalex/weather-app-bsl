export type TWeatherHour = {
    date: string,
    name_state: string,
    probability: number | null,
    temperature: number,
    icon: string,
}
export type TWeatherDay = {
    date: string,
    name_state: string,
    probability: number | null,
    temperature: number,
    icon: string,
    hours: TWeatherHour[]
}