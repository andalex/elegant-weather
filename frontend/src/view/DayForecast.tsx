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
	const { hourForecast: { tempC, tempF, time, willItRain, chanceOfRain, condition }} = props;

	const computeBorderStyles = (now, hour) => {
		if (now > hour) {
			return {
				borderStyle: styles.primaryBorderStyle,
				borderColor: styles.primaryAccent
			}
		} else if (now < hour && !(now === hour)) {
			return {
				borderStyle: styles.secondaryBorderStyle,
				borderColor: styles.secondaryAccent
			}
		} else {
			return {
				borderStyle: styles.tertiaryBorderStyle,
				borderColor: styles.tertiaryElement
			}
		}
	}

	const computeTextStyles = (now, hour) => {
		if (now > hour) {
			return {
				color: styles.secondaryElement
			}
		} else if (now < hour && !(now === hour)) {
			return {
				bold: true,
				color: styles.primaryElement
			}
		} else {
			return {
				bold: true,
				color: styles.primaryAccent
			}
		}
	}

	return (
		<Box
			{...computeBorderStyles(time.now, time.hour)}
			flexGrow={0}
			flexShrink={0}
			flexBasis="25%"
			flexDirection="column"
			alignItems="center"
		>
			<Box flexDirection="row" justifyContent="center">
				<Text underline {...computeTextStyles(time.now, time.hour)}>
					{time.readableTime}
				</Text>
				<Text {...computeTextStyles(time.now, time.hour)}>
					{' - '}
					{tempScale === TempScale.Fahrenheit
						? `${tempF} °F`
						: `${tempC} °C`}
				</Text>
			</Box>
			<Box flexDirection="row" justifyContent="center">
				<Text wrap="truncate-middle" {...computeTextStyles(time.now, time.hour)}>
					{condition}
				</Text>
			</Box>
			<Box flexDirection="row" justifyContent="center">
				<Text wrap="truncate-middle" {...computeTextStyles(time.now, time.hour)}>
					{willItRain ? `💧 ${chanceOfRain}%` : ''}
				</Text>
			</Box>
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
