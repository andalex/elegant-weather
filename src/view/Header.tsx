import React from "react";
import BigText from "ink-big-text";
import { Box } from "ink";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { useTheme } from "../providers/ThemeProvider.js";

export const Header = () => {
	const { headerFont } = useWeatherOptions();
	const { theme: { styles }} = useTheme();

	return (
		<BigText
			text="Elegant Weather"
			font={headerFont}
			backgroundColor="white"
			space={false}
			colors={[styles.tertiaryElement, styles.secondaryElement, styles.primaryElement ]}
		/>
	);
};
