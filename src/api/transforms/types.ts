import { Days } from "../../types/days.js";
import { MoonPhases } from "../../types/moonPhase.js";

export type THourForecast = {
	timeEpoc: string
	time: {
		readableTime: string,
		hour: number,
		now: number
	}
	tempC: string,
	tempF: string,
	condition: string,
	conditionType: string,
	windMPH: string,
	windDir: string,
	feelsLikeC: string,
	feelsLikeF: string,
	chanceOfRain: number,
	chanceOfSnow: number,
	willItRain: boolean,
	willItSnow: boolean,
}

export type TforecastDay = {
	dayId: string;
	dayReadable: {
		dayName: Days;
		shortFormat: string;
	};
	condition: string;
	conditionType: string;
	avgTempC: string;
	avgTempF: string;
	windMPH: string;
	maxTempC: string;
	maxTempF: string;
	minTempC: string;
	minTempF: string;
	dailyChanceOfRain: number;
	dailyChanceOfSnow: number;
	dailyWillItRain: boolean;
	dailyWillItSnow: boolean;
	astro: {
		sunrise: string;
		sunset: string;
		moonPhase: MoonPhases;
	};
	hours: Array<THourForecast>
};
