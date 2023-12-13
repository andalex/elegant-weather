import { API_METHODS } from "../types.js";
import { v4 as uuidv4 } from "uuid";
import { toCamelCase } from "./utils/toCamelCase.js";
import { getDayReadable } from "./utils/getDayReadable.js";
import { convertChanceToBoolean } from "./utils/convertChanceToBoolean.js";

// AA Notes
// This file serves as the main transform from the raw API data, which is very dense and detailed.
// As I add new features to the UI, this transform will expand and require better patterns to better use the rich and detailed weather data provided.
const foreCastTransformer = (response: { [key: string]: any }) => {
	const { data } = response;

	return {
		current: {
			aqi: {
				index: data.current.air_quality["us-epa-index"],
				pm25: data.current.air_quality.pm2_5,
				pm10: data.current.air_quality.pm10,
				co: data.current.air_quality.co,
				o3: data.current.air_quality.o3,
				no2: data.current.air_quality.no2,
				so2: data.current.air_quality.so2,
			},
			condition: data.current.condition.text,
			conditionType: toCamelCase(data.current.condition.text),
			tempC: data.current.temp_c,
			tempF: data.current.temp_f,
			windMPH: data.current.wind_mph,
			feelsLikeC: data.current.feelslike_c,
			feelsLikeF: data.current.feelslike_f,
		},
		forecastDay: data.forecast.forecastday.map(
			(forecast: { [key: string]: any }) => {
				return {
					dayId: uuidv4(),
					dayReadable: getDayReadable(forecast.date),
					condition: forecast.day.condition.text,
					conditionType: toCamelCase(forecast.day.condition.text),
					avgTempC: forecast.day.avgtemp_c,
					avgTempF: forecast.day.avgtemp_f,
					windMPH: forecast.day.wind_mph,
					maxTempC: forecast.day.maxtemp_c,
					maxTempF: forecast.day.maxtemp_f,
					minTempC: forecast.day.mintemp_c,
					minTempF: forecast.day.mintemp_f,
					dailyChanceOfRain: forecast.day.daily_chance_of_rain,
					dailyChanceOfSnow: forecast.day.daily_chance_of_snow,
					dailyWillItRain: convertChanceToBoolean(
						forecast.day.daily_will_it_rain
					),
					dailyWillItSnow: convertChanceToBoolean(
						forecast.day.daily_will_it_snow
					),
					astro: {
						sunrise: forecast.astro.sunrise,
						sunset: forecast.astro.sunset,
						moonPhase: toCamelCase(forecast.astro.moon_phase),
					},
				};
			}
		),

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

export const transformApiResponse = (response: {}, apiMethod: API_METHODS) => {
	switch (apiMethod) {
		case API_METHODS.getForecast:
			return foreCastTransformer(response);
		default:
			return new Error("Please include a value from enum API_METHOD");
	}
};
