import { API_METHODS } from "../types.js";
import { v4 as uuidv4 } from "uuid";
import { toCamelCase } from "./utils/toCamelCase.js";
import { getDayReadable } from "./utils/getDayReadable.js";
import { convertChanceToBoolean } from "./utils/convertChanceToBoolean.js";

const getTimeReadable = (time: string, timeZone) => {
	const readableTime = new Date(time).toLocaleString("en-US", {
		hour: "numeric",
		hour12: true,
		timeZone
	})
	const hour = new Date(time).toLocaleString("en-US", {
		hour: "numeric",
		hour12: false,
		timeZone
	}).split(' ').join('');

	const now = new Date().toLocaleString("en-US", {
		hour: "numeric",
		hour12: false,
		timeZone
	}).split(' ').join('');

	return { readableTime, hour: Number(hour), now }
}

const forecastHoursTransformer = (foreCastHour, tz_id: string) => {
	const forecastHours = foreCastHour.map(hour => {
		return {
			timeEpoc: hour.time_epoch,
			time: getTimeReadable(hour.time, tz_id),
			tempC: hour.temp_c,
			tempF: hour.temp_f,
			condition: hour.condition.text,
			conditionType: toCamelCase(hour.condition.text),
			windMPH: hour.wind_mph,
			windDir: hour.wind_dir,
			feelsLikeC: hour.feelslike_c,
			feelsLikeF: hour.feelslike_f,
			chanceOfRain: hour.chance_of_rain,
			chanceOfSnow: hour.chance_of_snow,
			willItRain: convertChanceToBoolean(hour.will_it_rain),
			willItSnow: convertChanceToBoolean(hour.will_it_snow),
		};
	});

	/**
	 * WeatherAPI returns hour 24 first in the list which asthetically looks odd when rendering hourly forecasts in order.
	 * Put the first element in the hours array last.
	 */
	forecastHours.push(forecastHours.shift());

	return forecastHours;
}

//TODO memoize this
const forecastTransformer = (response: { [key: string]: any }) => {
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
					hours: forecastHoursTransformer(forecast.hour, data.location.tz_id)
				};
			}
		),
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
			return forecastTransformer(response);
		default:
			return new Error("Please include a value from enum API_METHOD");
	}
};
