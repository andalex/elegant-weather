import React, {
	useContext,
	useState,
	createContext,
} from "react";
import { TempScale, TWeatherOptionsContextState } from "./types.js";
import { HeaderFonts } from "../types/headerFonts.js";
import { db } from "../db/index.js";

//TODO split out into an updateProvider and and optionsProvider
const WeatherOptionsContext = createContext<TWeatherOptionsContextState>({
	locationQuery: db.data.locationQuery,
	persistLocationQuery: (): void => {},
	tempScale: TempScale.Fahrenheit,
	persistTempScale: (): void => {},
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
	const { data } = db;
	const [tempScale, setTempScale] = useState(data.tempScale);
	const [locationQuery, setLocationQuery] = useState(data.locationQuery);
	const [forecastDays, setForecastDays] = useState(data.forecastDays);
	const [headerFont, setHeaderFont] = useState(data.headerFont);


	const persistTempScale = (tempScale: TempScale) => {
		db.data.tempScale = tempScale;
		db.write();
		setTempScale(db.data.tempScale)
	};

	const persistLocationQuery = (locationQuery: string) => {
		db.data.locationQuery = locationQuery;
		db.write();
		setLocationQuery(db.data.locationQuery);
	};

	const persistForecastDays = (days: string) => {
		db.data.forecastDays = days;
		db.write();
		setForecastDays(db.data.forecastDays);
	};

	const persistHeaderFont = (headerFont: HeaderFonts) => {
		db.data.headerFont = headerFont;
		db.write();
		setHeaderFont(db.data.headerFont);
	};

	return (
		<WeatherOptionsContext.Provider
			value={{
				tempScale,
				persistTempScale,
				locationQuery,
				persistLocationQuery,
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
