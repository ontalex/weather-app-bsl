import ForecastCard from "./ForecastCard.vue";

export default {
  component: ForecastCard,
  title: "Forecast Card",
  tags: ['autodocs', 'weather', 'card'],

}

export const DayWeek = {
  args: {
    isHourMode: false,
    value: {
      day: {
        "date": "2024-11-25",
        "date_epoch": 1732492800,
        "day": {
          "maxtemp_c": -2.1,
          "maxtemp_f": 28.2,
          "mintemp_c": -6.5,
          "mintemp_f": 20.4,
          "avgtemp_c": -4.5,
          "avgtemp_f": 24,
          "maxwind_mph": 8.9,
          "maxwind_kph": 14.4,
          "totalprecip_mm": 0,
          "totalprecip_in": 0,
          "totalsnow_cm": 0,
          "avgvis_km": 6.7,
          "avgvis_miles": 4,
          "avghumidity": 92,
          "daily_will_it_rain": 0,
          "daily_chance_of_rain": 0,
          "daily_will_it_snow": 0,
          "daily_chance_of_snow": 0,
          "condition": {
            "text": "Mist",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
            "code": 1030
          },
          "uv": 1
        },
        "astro": {
          "sunrise": "08:26 AM",
          "sunset": "04:07 PM",
          "moonrise": "01:32 AM",
          "moonset": "02:12 PM",
          "moon_phase": "Waning Crescent",
          "moon_illumination": 33
        },
        "hour": null
      },
      hour: {
        "time_epoch": 1732654800,
        "time": "2024-11-27 00:00",
        "temp_c": -6.6,
        "temp_f": 20.1,
        "is_day": 0,
        "condition": {
          "text": "Clear ",
          "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
          "code": 1000
        },
        "wind_mph": 5.6,
        "wind_kph": 9,
        "wind_degree": 194,
        "wind_dir": "SSW",
        "pressure_mb": 1027,
        "pressure_in": 30.31,
        "precip_mm": 0,
        "precip_in": 0,
        "snow_cm": 0,
        "humidity": 90,
        "cloud": 2,
        "feelslike_c": -10.9,
        "feelslike_f": 12.4,
        "windchill_c": -10.9,
        "windchill_f": 12.4,
        "heatindex_c": -6.6,
        "heatindex_f": 20.1,
        "dewpoint_c": -7.9,
        "dewpoint_f": 17.8,
        "will_it_rain": 0,
        "chance_of_rain": 0,
        "will_it_snow": 0,
        "chance_of_snow": 0,
        "vis_km": 10,
        "vis_miles": 6,
        "gust_mph": 11.7,
        "gust_kph": 18.9,
        "uv": 0
      }
    }
  }
}

export const HourDay = {
  args: {
    isHourMode: true,
    value:
      { date: "2023-10-01T08:00:00", name_state: "Солнечно", probability: 5, temperature: 20, icon: "sunny.png" }
  }
}
