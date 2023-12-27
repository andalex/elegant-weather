import React, { useState, useEffect } from "react";
import { Box, Text } from "ink";
import { useTheme } from "../providers/ThemeProvider.js";
import { useSelectedDay } from "../providers/SelectedDayProvider.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";
import { THourForecast } from "../api/transforms/types.js";

type THourWeatherElementProps = {
	hourForecast: THourForecast;
};

const HourWeatherElement = (props: THourWeatherElementProps) => {
	const {
		theme: { styles },
	} = useTheme();
	const { tempScale } = useWeatherOptions();
	const { hourForecast: { tempC, tempF, time }} = props;

	return (
		<Box
			borderStyle={
				time.now > time.hour ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
			}
			borderColor={
				time.now > time.hour ? styles.secondaryElement : styles.secondaryAccent
			}
			flexGrow={0}
			flexShrink={0}
			flexBasis="25%"
			flexDirection="row"
			justifyContent="center"
		>
			<Text bold color={styles.primaryElement}>
				{time.readableTime}
			</Text>
			<Text bold color={styles.primaryElement}>
				{" - "}
				{tempScale === TempScale.Fahrenheit
					? `${tempF} °F`
					: `${tempC} °C`}
			</Text>
		</Box>
	);
};

export const DayForecast = () => {
	const {
		theme: { styles },
	} = useTheme();
	const { selectedDay } = useSelectedDay();

	return (
		<Box
			flexDirection="column"
			borderStyle={styles.secondaryBorderStyle}
			paddingLeft={2}
			paddingRight={2}
		>
			<Box flexDirection="row" width="100%" justifyContent="center">
				<Box justifyContent="center" padding={1}>
					<Text bold color={styles.primaryElement}>
						Hourly Forecast for {selectedDay.dayReadable.dayName}
					</Text>
				</Box>
			</Box>
			<Box flexDirection="row" flexWrap="wrap" justifyContent="center">
				{selectedDay.hours.map((hourForecast) => {
					return <HourWeatherElement hourForecast={hourForecast} />;
				})}
			</Box>
		</Box>
	);
};
