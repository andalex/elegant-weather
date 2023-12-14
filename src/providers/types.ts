import { Dispatch, SetStateAction } from "react";
import { HeaderFonts } from "../types/headerFonts.js";


export type THeaderFontsState = Array<HeaderFonts>;

export enum TempScale {
	Fahrenheit = "fahrenheit",
	Celsius = "celsius",
}

export const LOCATION_QUERY_DEFAULT = "Portland, OR";

export type TWeatherOptionsContextState = {
	tempScale: TempScale.Fahrenheit | TempScale.Celsius;
	setTempScale: Dispatch<SetStateAction<TempScale>>;
	locationQuery: string;
	setLocationQuery: Dispatch<SetStateAction<string>>;
	forecastDays: string;
	persistForecastDays: (days: string) => void;
	headerFont: HeaderFonts;
	persistHeaderFont: (headerFont: HeaderFonts) => void;
};
