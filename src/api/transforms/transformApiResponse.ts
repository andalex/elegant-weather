import { API_METHODS } from "../types.js";

export const toCamelCase = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

// AA Notes
// This file serves as the main transform from the raw API data, which is very dense and detailed.
// As I add new features to the UI, this transform will expand and require better patterns to better use the rich and detailed weather data provided.
const foreCastTransformer = (response: { [key: string]: any} ) => {
  const { data } = response;
  return {
    current: {
      aqi: {
        index: data.current.air_quality["us-epa-index"],
        pm25: data.current.air_quality.pm2_5,
        pm10: data.current.air_quality.pm10,
      },
      condition: data.current.condition.text,
      conditionType: toCamelCase(data.current.condition.text),
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      windMPH: data.current.wind_mph,
      feelsLikeC: data.current.feelslike_c,
      feelsLikeF: data.current.feelslike_f,
    },
    forecastDay: data.forecast.forecastday.map((forecastday: {[key: string]: any}) => {
      return {
        condition: forecastday.day.condition.text,
        avgTempC: forecastday.day.avgtemp_c,
        avgTempF: forecastday.day.avgtemp_f,
        windMPH: forecastday.day.wind_mph,
        maxTempC: forecastday.day.maxtemp_c,
        maxTempF: forecastday.day.maxtemp_f,
        minTempC: forecastday.day.mintemp_c,
        minTempF: forecastday.day.mintemp_f,
        dailyChanceOfRain: forecastday.day.daily_chance_of_rain,
        dailyChanceOfSnow: forecastday.day.daily_chance_of_snow,
        dailyWillItRain: forecastday.day.daily_will_it_rain,
        dailyWillItSnow: forecastday.day.daily_will_it_snow,
      };
    }),

    //TODO: add transforms for hourly weather.
    forecastHour: [],
    location: {
      country: data.location.country,
      city: data.location.name,
      region: data.location.region,
      tz: data.location.tz_id,
    },
  };
};

export const transformApiResponse = (response:{}, apiMethod: API_METHODS) => {
  switch (apiMethod) {
    case API_METHODS.getForecast:
      return foreCastTransformer(response);
    default:
      return new Error("Please include a value from enum API_METHOD");
  }
};
