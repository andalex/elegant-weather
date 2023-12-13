import React from "react";
import { Text, Box } from "ink";
import { useTheme } from "../providers/ThemeProvider.js";

type TAQIIndexProps = {
	index: number;
};

const AQIIndex = (props: TAQIIndexProps) => {
	type aqi = {
		color: string;
		qualityIndex: number;
	};

	const aqiLevels: Array<aqi> = [
		{ color: "green", qualityIndex: 1 },
		{ color: "yellow", qualityIndex: 2 },
		{ color: "#ff7e00", qualityIndex: 3 },
		{ color: "redBright", qualityIndex: 4 },
		{ color: "#903f97", qualityIndex: 5 },
		{ color: "#7e0023", qualityIndex: 6 },
	];

	return (
		<>
			{aqiLevels.map(({ color, qualityIndex }) => {
				return props.index === qualityIndex ? (
					<Text key={color} backgroundColor={color}>
						{"  "}
						{props.index}
						{"   "}
					</Text>
				) : (
					<Text key={color} backgroundColor={color}>
						{"     "}
					</Text>
				);
			})}
		</>
	);
};

type TAQIProps = {
	location: {
		city: string;
		region: string;
	};
	aqi: {
		index: number;
		pm25: number;
		pm10: number;
		co: number;
		o3: number;
		no2: number;
		so2: number;
	};
};

export const AQI = (props: TAQIProps) => {
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box
			flexDirection="column"
			width="100%"
			borderStyle={styles.secondaryBorderStyle}
		>
			{/* Make box header component */}
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					Air Quality
				</Text>
			</Box>
			<Box flexDirection="row" margin={1} width="100%" justifyContent="center">
				<Box
					flexDirection="row"
					width="auto"
					justifyContent="center"
					borderColor={styles.primaryElement}
					borderStyle={styles.secondaryBorderStyle}
				>
					<Text color={styles.secondaryElement}>EPA Index: </Text>
					<AQIIndex index={props.aqi.index} />
				</Box>
			</Box>
			<Box flexDirection="row" width="100%" justifyContent="center">
				<Text color={styles.primaryElement}>
					PM10:{" "}
					<Text backgroundColor={styles.secondaryAccent}>{props.aqi.pm10}</Text>{" "}
					PM2.5:{" "}
					<Text backgroundColor={styles.secondaryAccent}>{props.aqi.pm25}</Text>{" "}
					Carbon Monoxide:{" "}
					<Text backgroundColor={styles.secondaryAccent}>{props.aqi.co}</Text>{" "}
					Ozone:{" "}
					<Text backgroundColor={styles.secondaryAccent}>{props.aqi.o3}</Text>{" "}
					<Text bold color={styles.secondaryAccent}>
						(μg/m3)
					</Text>
				</Text>
			</Box>
		</Box>
	);
};
