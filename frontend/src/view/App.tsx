import React from "react";
import { ForecastProvider } from "../api/DataProviders/ForecastProvider.js";
import { WeatherOptionsProvider } from "../providers/WeatherOptionsProvider.js";
import { ThemeProvider } from "../providers/ThemeProvider.js";
import { Weather } from "./Weather.js";
import { SelectedDayProvider } from "../providers/SelectedDayProvider.js";
import { RefreshResultsProvider } from "../providers/RefreshResultsProvider.js";


export const App = () => {
	return (
		<WeatherOptionsProvider>
			<RefreshResultsProvider>
				<ForecastProvider>
					<ThemeProvider>
						<SelectedDayProvider>
							<Weather />
						</SelectedDayProvider>
					</ThemeProvider>
				</ForecastProvider>
			</RefreshResultsProvider>
		</WeatherOptionsProvider>
	);
};
