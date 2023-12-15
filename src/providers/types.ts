import { Dispatch, SetStateAction } from "react";
import { HeaderFonts } from "../types/headerFonts.js";


export type THeaderFontsState = Array<HeaderFonts>;

export enum TempScale {
	Fahrenheit = "fahrenheit",
	Celsius = "celsius",
}

export type TWeatherOptionsContextState = {
	tempScale: TempScale.Fahrenheit | TempScale.Celsius;
	persistTempScale: (tempScale: TempScale) => void;
	locationQuery: string;
	persistLocationQuery: (locationQuery: string) => void;
	forecastDays: string;
	persistForecastDays: (days: string) => void;
	headerFont: HeaderFonts;
	persistHeaderFont: (headerFont: HeaderFonts) => void;
};
