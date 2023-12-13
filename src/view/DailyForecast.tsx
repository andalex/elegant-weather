import React from "react";
import { Box, Text, Spacer } from "ink";
import { MoonPhaseIcon } from "./MoonPhaseIcon.js";
import Spinner from "ink-spinner";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";
import { API_STATUS } from "../api/types.js";
import { useTheme } from "../providers/ThemeProvider.js";

type Props = {};

export const DailyForecast = () => {
	const {
		apiData: { data, status },
	} = useForecast();
	const { forecastDays, tempScale } = useWeatherOptions();
	const { theme: { styles } } = useTheme();

	return (
		<Box flexDirection="column" width="100%" borderStyle={styles.secondaryBorderStyle}>
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					{forecastDays} Day Forecast
				</Text>
			</Box>
			{/* ROW */}
			{status === API_STATUS.LOADING ? (
				<Text color={styles.primaryAccent}>
					Loading Daily Forecast <Spinner type="weather" />
				</Text>
			) : (
				<Box
					width="100%"
					justifyContent="center"
					flexBasis="max-content"
					gap={1}
				>
					{data.forecastDay.map((day, index) => {
						return (
							<Box flexDirection="column" height="100%" key={day.dayId}>
								<Box
									borderStyle={styles.tertiaryBorderStyle}
									borderColor={styles.tertiaryElement}
									justifyContent="center"
									paddingTop={0}
									paddingLeft={1}
									paddingRight={1}
								>
									<Text color={styles.tertiaryElement}>
										{index === 0
											? `Today ${day.dayReadable.shortFormat}`
											: `${day.dayReadable.dayName} ${day.dayReadable.shortFormat}`}
									</Text>
								</Box>
								<Box
									borderStyle={styles.secondaryBorderStyle}
									borderColor={styles.secondaryElement}
									flexDirection="column"
									paddingTop={0}
									paddingLeft={1}
									paddingRight={1}
								>
									<Box justifyContent="center" padding={1}>
										<Text bold color={styles.primaryElement}>
											Forecast
										</Text>
									</Box>
									<Box marginBottom={1} justifyContent="center">
										<Text color={styles.primaryAccent}>{day.condition}</Text>
									</Box>
									<Box marginBottom={1} justifyContent="center">
										<Text color={styles.secondaryElement}>
											{tempScale === TempScale.Fahrenheit
												? day.maxTempF + "°F"
												: day.maxTempC + "°C"}
											{" - "}
										</Text>
										<Text color={styles.secondaryElement}>
											{tempScale === TempScale.Fahrenheit
												? day.minTempF + "°F"
												: day.minTempC + "°C"}
										</Text>
									</Box>
									<Text>
										<Text color={styles.secondaryElement}>{day.dailyWillItRain}</Text>
									</Text>
									<Box marginBottom={1} justifyContent="center">
										{day.dailyWillItRain && (
											<Text>
												💧 <Text color={styles.secondaryElement}>{day.dailyChanceOfRain}%</Text>{' '}
											</Text>
										)}
										{day.dailyWillItSnow && (
											<Text>
												⛄️ <Text color={styles.secondaryElement}>{day.dailyChanceOfSnow}%</Text>
											</Text>
										)}
									</Box>
									<Box
										flexDirection="column"
										paddingTop={0}
										paddingLeft={1}
										paddingRight={1}
									>
										<Box justifyContent="center" padding={1}>
											<Text bold color={styles.primaryElement}>
												Astro
											</Text>
										</Box>
										<Text color={styles.secondaryElement}>🌅 {day.astro.sunrise}</Text>
										<Box marginTop={1}>
											<Text color={styles.secondaryElement}>🌇 {day.astro.sunset}</Text>
										</Box>
										<Box marginTop={1}>
											<Text color={styles.secondaryElement}>
												<MoonPhaseIcon moonPhaseType={day.astro.moonPhase} />
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>
						);
					})}
				</Box>
			)}
		</Box>
	);
};
