import React from "react";
import { Text, Box } from 'ink';
import BigText from 'ink-big-text';
import Spinner from 'ink-spinner';
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { API_STATUS } from "../api/types.js";
import { ConditionIcon } from "./ConditionIcon.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";


export const Weather: React.FC<{}> = ({}) => {
  const { data, status } = useForecast();
  const { tempScale } = useWeatherOptions();

    return (
		<>
			{status === API_STATUS.LOADING ? (
				<Text color="cyan">Loading weather{' '}<Spinner type="weather"/></Text>
			) : (
				<Box flexDirection="column" width="100%" borderStyle="classic">
					<Box justifyContent="center" padding={1}>
						<Text bold color="greenBright">
							Weather Conditions for {data.location.city}, {data.location.region} <ConditionIcon conditionType={data.current.conditionType} />
						</Text>
					</Box>
					{/* ROW */}
					<Box marginLeft={1} marginRight={1} marginTop={0} marginBottom={0} justifyContent="space-between">
						<Box width="25%" borderStyle="single" justifyContent="center" paddingTop={0} paddingLeft={1}>
							<Text color="blue">Condition</Text>
						</Box>

						<Box width="25%" borderStyle="single" justifyContent="center" paddingTop={0} paddingLeft={1}>
							<Text color="blue">Temp { tempScale === TempScale.Fahrenheit ? "°F" : "°C"}</Text>
						</Box>

						<Box width="25%" borderStyle="single" justifyContent="center" paddingTop={0} paddingLeft={1}>
							<Text color="blue">Feels Like { tempScale === TempScale.Fahrenheit ? "°F" : "°C"}</Text>
						</Box>
						<Box width="25%" borderStyle="single" justifyContent="center" paddingTop={0} paddingLeft={1}>
							<Text color="blue">Wind</Text>
						</Box>
					</Box>
					{/* ROW */}
					<Box marginLeft={1} marginRight={1} marginTop={0} marginBottom={0}>
						<Box width="25%" borderStyle="round" paddingTop={0} paddingLeft={1} flexDirection="column">
							<Text color="green">{data.current.condition}{' '}
								
							</Text>
						</Box>

						<Box width="25%" borderStyle="round" paddingTop={0} paddingLeft={1}>
							{tempScale === TempScale.Fahrenheit ? 
								<Text color="green">{data.current.tempF}</Text>
								: 
								<Text color="green">{data.current.tempC}</Text>}
						</Box>

						<Box width="25%" borderStyle="round" paddingTop={0} paddingLeft={1}>
							{tempScale === TempScale.Fahrenheit ? 
								<Text color="green">{data.current.feelsLikeF}</Text>
								: 
								<Text color="green">{data.current.feelsLikeC}</Text>}
						</Box>
						<Box width="25%" borderStyle="round" paddingTop={0} paddingLeft={1}>
							<Text color="green">{data.current.windMPH}</Text>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};
