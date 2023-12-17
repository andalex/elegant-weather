import { Days } from "../../types/days.js";
import { MoonPhases } from "../../types/moonPhase.js";

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
};
