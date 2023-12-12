import React from "react";
import { Box, Text } from "ink";
import { MoonPhaseIcon } from "./MoonPhaseIcon.js";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";

type Props = {};

export const DailyForecast = () => {
	const {
		apiData: { data, status },
	} = useForecast();
	const { forecastDays, tempScale } = useWeatherOptions();
	
	return (
		<Box flexDirection="column" width="100%" borderStyle="classic">
			<Box justifyContent="center" padding={1}>
				<Text bold color="greenBright">
					{forecastDays} Day Forecast
				</Text>
			</Box>
			{/* ROW */}
			<Box
				marginLeft={1}
				marginRight={1}
				marginTop={0}
				marginBottom={0}
				justifyContent="space-around"
			>
				{data.forecastDay.map((day) => {
					return (
						<Box flexDirection="column" key={day.dayId}>
							<Box
								borderStyle="single"
								justifyContent="center"
								paddingTop={0}
								paddingLeft={1}
								paddingRight={1}
							>
								<Text color="blue">{day.dayReadable}</Text>
							</Box>
							<Box
								borderStyle="round"
								flexDirection="column"
								paddingTop={0}
								paddingLeft={1}
								paddingRight={1}
							>
								<Text>Condition: <Text color="green">{day.condition}</Text></Text>
								<Text>High: <Text color="green">{tempScale === TempScale.Fahrenheit ? day.maxTempF + "°F" : day.maxTempC + "°C"}</Text></Text>
								<Text>Avg: <Text color="green">{tempScale === TempScale.Fahrenheit ? day.avgTempF + "°F" : day.avgTempC + "°C"}</Text></Text>
								<Text>Low: <Text color="green">{tempScale === TempScale.Fahrenheit ? day.minTempF + "°F" : day.minTempC + "°C"}</Text></Text>
								<Text>Rain: <Text color="green">{day.dailyWillItRain}</Text></Text>
								<Text>Rain Chance: <Text color="green">{day.dailyChanceOfRain}%</Text></Text>
							</Box>
							<Box
								flexDirection="column"
								paddingTop={0}
								paddingLeft={1}
								paddingRight={1}
							>
								<Text color="green">🌅 {day.astro.sunrise} 🌇 {day.astro.sunset}</Text>
							</Box>
							<Box
								flexDirection="column"
								paddingTop={1}
								paddingLeft={1}
								paddingRight={1}
							>
								<Text color="green"><MoonPhaseIcon moonPhaseType={day.astro.moonPhase}/></Text>
							</Box>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};
