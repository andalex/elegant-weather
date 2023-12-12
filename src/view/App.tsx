import React from "react";
import { ForecastProvider } from "../api/DataProviders/ForecastProvider.js";
import { WeatherOptionsProvider } from "../providers/WeatherOptionsProvider.js";
import { Header } from './Header.js'
import { Weather } from "./Weather.js";
import { WeatherSelector } from "./WeatherSelector.js";

export const App = () => {
  return (
		<WeatherOptionsProvider>
			<ForecastProvider>
				<Header />
				<WeatherSelector />
				<Weather />
			</ForecastProvider>
		</WeatherOptionsProvider>
	);
}
