import React from "react";
import { Box } from "ink";
import { ForecastProvider } from "../api/DataProviders/ForecastProvider.js";
import { WeatherOptionsProvider } from "../providers/WeatherOptionsProvider.js";
import { ThemeProvider } from "../providers/ThemeProvider.js";
import { Header } from "./Header.js";
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
