import React from "react";
import { ForecastProvider } from "../api/DataProviders/ForecastProvider.js";
import { WeatherOptionsProvider } from "../providers/WeatherOptionsProvider.js";
import { ThemeProvider } from "../providers/ThemeProvider.js";
import { Weather } from "./Weather.js";


export const App = () => {
	return (
		<WeatherOptionsProvider>
			<ForecastProvider>
				<ThemeProvider>
					<Weather />
				</ThemeProvider>
			</ForecastProvider>
		</WeatherOptionsProvider>
	);
};
