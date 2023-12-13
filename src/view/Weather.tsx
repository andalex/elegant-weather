import React from "react";
import { Text, Box } from "ink";
import BigText from "ink-big-text";
import Spinner from "ink-spinner";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { API_STATUS } from "../api/types.js";
import { ConditionIcon } from "./ConditionIcon.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";
import { Header } from "./Header.js";
import { AQI } from "./AQI.js";
import { DailyForecast } from "./DailyForecast.js";
import { WeatherOptions } from "./WeatherOptions.js";
import { Time } from "./Time.js";
import { useTheme } from "../providers/ThemeProvider.js";

export const Weather: React.FC<{}> = ({}) => {
	const {
		apiData: { data, status },
	} = useForecast();
	const { tempScale } = useWeatherOptions();
	const { theme: { styles } } = useTheme();

	return (
		<Box
			flexDirection="column"
			width="100%"
			padding={1}
			borderStyle={styles.primaryBorderStyle}
			justifyContent="center"
		>
			<Box width="100%" flexDirection="row" justifyContent="center">
				<Header />
			</Box>
			{status === API_STATUS.LOADING ? (
				<Text color={styles.primaryAccent}>
					Loading weather <Spinner type="weather" />
				</Text>
			) : (
				<>
					<Box justifyContent="center" padding={1}>
						<Text bold color={styles.primaryElement}>
							Current Conditions for {data.location.city},{" "}
							{data.location.region} <Time tz={data.location.tz} />
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
							<Text wrap="truncate" color={styles.tertiaryElement}>Condition</Text>
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
							<Text wrap="truncate" color={styles.tertiaryElement}>Wind</Text>
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
								<Text color={styles.secondaryElement}>{data.current.feelsLikeF}</Text>
							) : (
								<Text color={styles.secondaryElement}>{data.current.feelsLikeC}</Text>
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
					<DailyForecast />
					<AQI location={data.location} aqi={data.current.aqi} />
					<WeatherOptions />
				</>
			)}
		</Box>
	);
};
