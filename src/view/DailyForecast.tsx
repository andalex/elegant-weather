import React from "react";
import { Box, Text, Spacer } from "ink";
import { MoonPhase } from "./MoonPhase.js";
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
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box
			flexDirection="column"
			width="100%"
			borderStyle={styles.secondaryBorderStyle}
		>
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
					flexDirection="row"
					gap={1}
				>
					{data.forecastDay.map((day, index) => {
						return (
							<Box flexDirection="column" key={day.dayId}>
								<Box
									borderStyle={styles.tertiaryBorderStyle}
									borderColor={styles.tertiaryElement}
									justifyContent="center"
									paddingTop={0}
									paddingLeft={1}
									paddingRight={1}
								>
									<Text color={styles.tertiaryElement} wrap="truncate-middle">
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
										<Text wrap="truncate" bold color={styles.primaryElement}>
											Forecast
										</Text>
									</Box>
									<Box marginBottom={1} justifyContent="center">
										<Text wrap="truncate-middle" color={styles.primaryAccent}>{day.condition}</Text>
									</Box>
									<Box marginBottom={1} justifyContent="center">
										<Text wrap="truncate-middle" color={styles.secondaryElement}>
											{tempScale === TempScale.Fahrenheit
												? day.maxTempF + "°F"
												: day.maxTempC + "°C"}
											{" - "}
											{tempScale === TempScale.Fahrenheit
												? day.minTempF + "°F"
												: day.minTempC + "°C"}
										</Text>
									</Box>
									<Text>
										<Text color={styles.secondaryElement}>
											{day.dailyWillItRain}
										</Text>
									</Text>
									<Box marginBottom={1} justifyContent="center">
										{day.dailyWillItRain ? (
											<Text>
												💧{" "}
												<Text color={styles.secondaryElement}>
													{day.dailyChanceOfRain}%
												</Text>{" "}
											</Text>
										) : (
											<Text>
												💧{" "}<Text color={styles.secondaryElement}>No</Text>{" "}
											</Text>
										)}
										{day.dailyWillItSnow && (
											<Text>
												⛄️{" "}
												<Text color={styles.secondaryElement}>
													{day.dailyChanceOfSnow}%
												</Text>
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
											<Text wrap="truncate" bold color={styles.primaryElement}>
												Astro
											</Text>
										</Box>
										<Text wrap="truncate-middle" color={styles.secondaryElement}>
											🌅 {day.astro.sunrise}
										</Text>
										<Box marginTop={1}>
											<Text wrap="truncate-middle" color={styles.secondaryElement}>
												🌇 {day.astro.sunset}
											</Text>
										</Box>
										<Box marginTop={1}>
											<MoonPhase moonPhaseType={day.astro.moonPhase} />
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
