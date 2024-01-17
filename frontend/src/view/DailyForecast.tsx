import React, { useEffect } from "react";
import { Box, Text, useFocus } from "ink";
import { MoonPhase } from "./MoonPhase.js";
import Spinner from "ink-spinner";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";
import { API_STATUS } from "../api/types.js";
import { useTheme } from "../providers/ThemeProvider.js";
import { TforecastDay } from "../api/transforms/types.js";
import { useSelectedDay } from "../providers/SelectedDayProvider.js";
import { Layout, useResponsiveLayout } from "../providers/ResponsiveLayoutProvider.js";


type TForecastDayHeaderProps = {
	index: number,
	dayReadable: TforecastDay["dayReadable"]
}

const ForecastDayHeader = (props: TForecastDayHeaderProps) => {
	const {
		theme: { styles },
	} = useTheme();
	const { layoutType } = useResponsiveLayout();

	return layoutType === Layout.sm || layoutType === Layout.xs ?
		(
			<Text color={styles.tertiaryElement} wrap="truncate-middle">
				 {props.dayReadable.shortFormat}
			</Text>
		)
		:
		(
		<Text color={styles.tertiaryElement} wrap="truncate-middle">
			{props.index === 0
				? `Today ${props.dayReadable.shortFormat}`
				: `${props.dayReadable.dayName} ${props.dayReadable.shortFormat}`}
		</Text>
		)
		
}


type TForecastDayProps = {
	day: TforecastDay;
	index: number;
	id: string;
};

export const ForecastDay = (props: TForecastDayProps) => {
	const { day, id, index } = props;
	const {
		theme: { styles },
	} = useTheme();
	const { tempScale } = useWeatherOptions();
	const { isFocused } = useFocus({ id });
	const { setSelectedDay } = useSelectedDay();
	const { layoutType } = useResponsiveLayout();


	useEffect(() => {
		setSelectedDay(day);
	}, [isFocused]);

	return (
		<Box flexDirection="column" flexGrow={0} flexShrink={1}>
			<Box
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
				justifyContent="center"
				paddingTop={0}
				paddingLeft={1}
				paddingRight={1}
			>
				<ForecastDayHeader index={index} dayReadable={day.dayReadable} />
			</Box>
			<Box
				borderStyle={styles.secondaryBorderStyle}
				borderColor={styles.secondaryElement}
				flexDirection="column"
				flexGrow={0}
				flexShrink={1}
				paddingTop={0}
				paddingLeft={1}
				paddingRight={1}
			>
				<Box padding={1}>
					<Text wrap="truncate" bold color={styles.primaryElement}>
						Forecast
					</Text>
				</Box>
				<Box marginBottom={1}  paddingLeft={1} paddingRight={1}>
					<Text wrap="wrap" color={styles.primaryAccent}>
						{day.condition}
					</Text>
				</Box>
				<Box marginBottom={1} paddingLeft={1} paddingRight={1} flexDirection="column">
					<Text wrap="truncate-middle" color={styles.secondaryElement}>
						H: {tempScale === TempScale.Fahrenheit
							? day.minTempF + "°F"
							: day.minTempC + "°C"}
					</Text>
					<Text wrap="truncate-middle" color={styles.secondaryElement}>
						L: {tempScale === TempScale.Fahrenheit
							? day.maxTempF + "°F"
							: day.maxTempC + "°C"}
					</Text>
				</Box>
				<Text>
					<Text color={styles.secondaryElement}>{day.dailyWillItRain}</Text>
				</Text>
				<Box>
					{day.dailyWillItRain ? (
						<Text>
							💧{" "}
							<Text color={styles.secondaryElement}>
								{day.dailyChanceOfRain}%
							</Text>{" "}
						</Text>
					) : (
						<Text>
							💧 <Text color={styles.secondaryElement}>No</Text>{" "}
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
				{(layoutType === Layout.md || layoutType === Layout.lg) &&
					<Box
						flexDirection="column"
						paddingTop={0}
						paddingLeft={1}
						paddingRight={1}
					>
						<Box marginTop={1} flexDirection="column">
							<Text wrap="truncate" bold color={styles.primaryElement}>
								Astro
							</Text>
							<Text>{' '}</Text>
							<Text wrap="truncate-middle" color={styles.secondaryElement}>
								🌅 {day.astro.sunrise}
							</Text>
							<Text>{' '}</Text>
							<Text wrap="truncate-middle" color={styles.secondaryElement}>
								🌇 {day.astro.sunset}
							</Text>
						</Box>
						{(layoutType === Layout.md || layoutType === Layout.lg) &&
							<Box marginTop={1}>
								<MoonPhase moonPhaseType={day.astro.moonPhase} />
							</Box>
						}
					</Box>
				}
			</Box>
		</Box>
	);
};

export const DailyForecast = () => {
	const {
		apiData: { data, status },
	} = useForecast();
	const { forecastDays } = useWeatherOptions();
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box
			flexDirection="column"
			borderStyle={styles.secondaryBorderStyle}
			paddingLeft={2}
			paddingRight={2}
		>
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					{status === API_STATUS.LOADING ? "" : `${forecastDays} Day Forecast`}
				</Text>
			</Box>
			{/* ROW */}
			{status === API_STATUS.LOADING ? (
				<Text color={styles.primaryAccent}>
					Loading Daily Forecast <Spinner type="weather" />
				</Text>
			) : (
				<Box width="100%" justifyContent="center" flexDirection="row" gap={1}>
					{data.forecastDay.map((day, index) => {
						return (
							<ForecastDay
								day={day}
								id={day.dayId}
								index={index}
								key={day.dayId}
							/>
						);
					})}
				</Box>
			)}
		</Box>
	);
};
