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
					<Box
						flexDirection="column"
						width="100%"
						padding={1}
						borderStyle="classic"
						justifyContent="center"
					>
						<Header />
						<Weather />
					</Box>
				</ThemeProvider>
			</ForecastProvider>
		</WeatherOptionsProvider>
	);
};
