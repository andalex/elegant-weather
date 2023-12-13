import React, { useContext, useState, createContext } from "react";
import {
	TempScale,
	TWeatherOptionsContextState,
	LOCATION_QUERY_DEFAULT,
	HeaderFonts,
} from "./types.js";


//TODO split out into an updateProvider and and optionsProvider
const WeatherOptionsContext = createContext<TWeatherOptionsContextState>({
	locationQuery: LOCATION_QUERY_DEFAULT,
	setLocationQuery: (): void => {},
	tempScale: TempScale.Fahrenheit,
	setTempScale: (): void => {},
	forecastDays: "3",
	setForecastDays: (): void => {},
	headerFont: HeaderFonts.Chrome,
	setHeaderFont: (): void => {},
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
	const [forecastDays, setForecastDays] = useState("3");
	const [headerFont, setHeaderFont] = useState(HeaderFonts.Chrome);

	return (
		<WeatherOptionsContext.Provider
			value={{
				tempScale,
				setTempScale,
				locationQuery,
				setLocationQuery,
				forecastDays,
				setForecastDays,
				headerFont,
				setHeaderFont,
			}}
		>
			{children}
		</WeatherOptionsContext.Provider>
	);
}
