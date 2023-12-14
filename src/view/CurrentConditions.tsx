import React from "react";
import { Box, Text } from "ink";
import { TempScale } from "../providers/types.js";
import { Time } from "./Time.js";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { useTheme } from "../providers/ThemeProvider.js";


export const CurrentConditions = () => {
	const {
		apiData: { data },
	} = useForecast();
	const { tempScale } = useWeatherOptions();
	const {
		theme: { styles },
	} = useTheme();

	return (
		<>
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					Current Conditions for {data.location.city}, {data.location.region}{" "}
					<Time tz={data.location.tz} />
				</Text>
			</Box>
			{/* ROW */}
			<Box
				marginLeft={1}
				marginRight={1}
				marginTop={0}
				marginBottom={0}
				justifyContent="center"
			>
				<Box
					width="15%"
					borderStyle={styles.tertiaryBorderStyle}
					borderColor={styles.tertiaryElement}
					justifyContent="center"
					paddingTop={0}
					paddingLeft={1}
				>
					<Text wrap="truncate" color={styles.tertiaryElement}>
						Condition
					</Text>
				</Box>

				<Box
					width="15%"
					borderStyle={styles.tertiaryBorderStyle}
					borderColor={styles.tertiaryElement}
					justifyContent="center"
					paddingTop={0}
					paddingLeft={1}
				>
					<Text wrap="truncate" color={styles.tertiaryElement}>
						Temp {tempScale === TempScale.Fahrenheit ? "°F" : "°C"}
					</Text>
				</Box>

				<Box
					width="15%"
					borderStyle={styles.tertiaryBorderStyle}
					borderColor={styles.tertiaryElement}
					justifyContent="center"
					paddingTop={0}
					paddingLeft={1}
				>
					<Text wrap="truncate" color={styles.tertiaryElement}>
						Feels Like {tempScale === TempScale.Fahrenheit ? "°F" : "°C"}
					</Text>
				</Box>
				<Box
					width="15%"
					borderStyle={styles.tertiaryBorderStyle}
					borderColor={styles.tertiaryElement}
					justifyContent="center"
					paddingTop={0}
					paddingLeft={1}
				>
					<Text wrap="truncate" color={styles.tertiaryElement}>
						Wind
					</Text>
				</Box>
			</Box>
			{/* ROW */}
			<Box
				marginLeft={1}
				marginRight={1}
				marginTop={0}
				marginBottom={0}
				justifyContent="center"
			>
				<Box
					width="15%"
					alignItems="center"
					borderStyle={styles.secondaryBorderStyle}
					borderColor={styles.secondaryElement}
					paddingTop={0}
					flexDirection="column"
				>
					<Text color={styles.secondaryElement}>{data.current.condition}</Text>
				</Box>
				<Box
					width="15%"
					alignItems="center"
					borderStyle={styles.secondaryBorderStyle}
					borderColor={styles.secondaryElement}
					paddingTop={0}
					flexDirection="column"
				>
					{tempScale === TempScale.Fahrenheit ? (
						<Text color={styles.secondaryElement}>{data.current.tempF}</Text>
					) : (
						<Text color={styles.secondaryElement}>{data.current.tempC}</Text>
					)}
				</Box>
				<Box
					width="15%"
					alignItems="center"
					borderStyle={styles.secondaryBorderStyle}
					borderColor={styles.secondaryElement}
					paddingTop={0}
					flexDirection="column"
				>
					{tempScale === TempScale.Fahrenheit ? (
						<Text color={styles.secondaryElement}>
							{data.current.feelsLikeF}
						</Text>
					) : (
						<Text color={styles.secondaryElement}>
							{data.current.feelsLikeC}
						</Text>
					)}
				</Box>
				<Box
					width="15%"
					alignItems="center"
					borderStyle={styles.secondaryBorderStyle}
					borderColor={styles.secondaryElement}
					paddingTop={0}
					flexDirection="column"
				>
					<Text color={styles.secondaryElement}>{data.current.windMPH}MPH</Text>
				</Box>
			</Box>
		</>
	);
};
