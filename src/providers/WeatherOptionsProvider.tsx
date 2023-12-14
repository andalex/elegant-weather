import React, { useContext, useState, createContext } from "react";
import {
	TempScale,
	TWeatherOptionsContextState,
	LOCATION_QUERY_DEFAULT,
} from "./types.js";
import { HeaderFonts } from "../types/headerFonts.js";
import { db } from "../db/index.js";


//TODO split out into an updateProvider and and optionsProvider
const WeatherOptionsContext = createContext<TWeatherOptionsContextState>({
	locationQuery: LOCATION_QUERY_DEFAULT,
	setLocationQuery: (): void => {},
	tempScale: TempScale.Fahrenheit,
	setTempScale: (): void => {},
	forecastDays: "3",
	persistForecastDays: (): void => {},
	headerFont: HeaderFonts.Chrome,
	persistHeaderFont: (): void => {},
});

export const useWeatherOptions = () => {
	const contextState = useContext(WeatherOptionsContext);

	if (contextState === undefined) {
		throw new Error(
			"useForecast must be used with WeatherOptionsProvider as a parent component"
		);
	}
	return contextState;
};

export function WeatherOptionsProvider({ children }) {
	const [tempScale, setTempScale] = useState(TempScale.Fahrenheit);
	const [locationQuery, setLocationQuery] = useState(LOCATION_QUERY_DEFAULT);
	const [forecastDays, setForecastDays] = useState(db.data.forecastDays);
	const [headerFont, setHeaderFont] = useState(db.data.headerFont);

	const persistForecastDays = (days: string) => {
		db.data.forecastDays = days;
		db.write();
		setForecastDays(db.data.forecastDays);
	}

	const persistHeaderFont = (headerFont: HeaderFonts) => {
		db.data.headerFont = headerFont;
		db.write();
		setHeaderFont(db.data.headerFont);
	}

	return (
		<WeatherOptionsContext.Provider
			value={{
				tempScale,
				setTempScale,
				locationQuery,
				setLocationQuery,
				forecastDays,
				persistForecastDays,
				headerFont,
				persistHeaderFont,
			}}
		>
			{children}
		</WeatherOptionsContext.Provider>
	);
}
