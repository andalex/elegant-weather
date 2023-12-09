import React, { useEffect } from 'react'
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import TextInput from 'ink-text-input';
// TODO add directory indexes to cleanup this imports
import { useWeatherOptions } from '../providers/WeatherOptionsProvider.js';
import { TempScale } from '../providers/types.js';


export const WeatherSelector = () => {
    const { tempScale, setTempScale, locationQuery, setLocationQuery} = useWeatherOptions();

    return (
			<Box flexDirection="column" width="100%" borderStyle="classic">
				<Box justifyContent="center" padding={1}>
					<Text bold color="greenBright">
						Weather Options
					</Text>
				</Box>
				<Box flexDirection="row">
					<Box flexDirection="column" margin={1}>
						<Text color="greenBright">Weather Location</Text>
						<Box
							flexDirection="column"
							margin={0}
							padding={0}
							borderStyle="round"
						>
							<TextInput
								value={locationQuery}
								placeholder="Enter Location"
								onChange={(value) => setLocationQuery(value)}
							/>
						</Box>
					</Box>

					<Box flexDirection="column" margin={1}>
						<Text color="greenBright">Temp Scale</Text>
						<Box
							flexDirection="column"
							margin={0}
							padding={0}
							borderStyle="round"
						>
							<SelectInput
								initialIndex={tempScale === TempScale.Fahrenheit ? 0 : 1}
								onSelect={(item) => setTempScale(item.value)}
								items={[
									{
										label: "°F",
										value: TempScale.Fahrenheit,
									},
									{
										label: "°C",
										value: TempScale.Celsius,
									},
								]}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		);
}