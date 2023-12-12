import React from 'react'
import BigText from 'ink-big-text';
import { Box } from 'ink';
import { useWeatherOptions } from '../providers/WeatherOptionsProvider.js';

export const Header = () => {
	const { headerFont } = useWeatherOptions();
  return (
	<Box marginLeft={2} marginRight={2}>
		<BigText
			text="Elegant Weather"
			font={headerFont}
			align="center"
			colors={["cyan", "greenBright"]}
		/>
	</Box>
	);
}
