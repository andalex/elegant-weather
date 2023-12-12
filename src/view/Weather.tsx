import React from "react";
import { Text, Box } from "ink";
import BigText from "ink-big-text";
import Spinner from "ink-spinner";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { API_STATUS } from "../api/types.js";
import { ConditionIcon } from "./ConditionIcon.js";
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { TempScale } from "../providers/types.js";
import { AQI } from "./AQI.js";
import { DailyForecast } from "./DailyForecast.js";

export const Weather: React.FC<{}> = ({}) => {
	const {
		apiData: { data, status },
	} = useForecast();
	const { tempScale } = useWeatherOptions();

	return (
		<>
			{status === API_STATUS.LOADING ? (
				<Text color="cyan">
					Loading weather <Spinner type="weather" />
				</Text>
			) : (
				<Box flexDirection="column" width="100%" borderStyle="classic">
					<Box justifyContent="center" padding={1}>
						<Text bold color="greenBright">
							Current Conditions for {data.location.city},{" "}
							{data.location.region}{" "}
							<ConditionIcon conditionType={data.current.conditionType} />
						</Text>
					</Box>
					{/* ROW */}
					<Box
						marginLeft={1}
						marginRight={1}
						marginTop={0}
						marginBottom={0}
						justifyContent="space-around"
					>
						<Box
							width="15%"
							borderStyle="single"
							justifyContent="center"
							paddingTop={0}
							paddingLeft={1}
						>
							<Text color="magentaBright">Condition</Text>
						</Box>

						<Box
							width="15%"
							borderStyle="single"
							justifyContent="center"
							paddingTop={0}
							paddingLeft={1}
						>
							<Text color="magentaBright">
								Temp {tempScale === TempScale.Fahrenheit ? "°F" : "°C"}
							</Text>
						</Box>

						<Box
							width="15%"
							borderStyle="single"
							justifyContent="center"
							paddingTop={0}
							paddingLeft={1}
						>
							<Text color="magentaBright">
								Feels Like {tempScale === TempScale.Fahrenheit ? "°F" : "°C"}
							</Text>
						</Box>
						<Box
							width="15%"
							borderStyle="single"
							justifyContent="center"
							paddingTop={0}
							paddingLeft={1}
						>
							<Text color="magentaBright">Wind</Text>
						</Box>
					</Box>
					{/* ROW */}
					<Box
						marginLeft={1}
						marginRight={1}
						marginTop={0}
						marginBottom={0}
						justifyContent="space-around"
					>
						<Box
							width="15%"
							alignItems="center"
							borderStyle="round"
							paddingTop={0}
							flexDirection="column"
						>
							<Text color="green">{data.current.condition}</Text>
						</Box>
						<Box
							width="15%"
							alignItems="center"
							borderStyle="round"
							paddingTop={0}
							flexDirection="column"
						>
							{tempScale === TempScale.Fahrenheit ? (
								<Text color="green">{data.current.tempF}</Text>
							) : (
								<Text color="green">{data.current.tempC}</Text>
							)}
						</Box>
						<Box
							width="15%"
							alignItems="center"
							borderStyle="round"
							paddingTop={0}
							flexDirection="column"
						>
							{tempScale === TempScale.Fahrenheit ? (
								<Text color="green">{data.current.feelsLikeF}</Text>
							) : (
								<Text color="green">{data.current.feelsLikeC}</Text>
							)}
						</Box>
						<Box
							width="15%"
							alignItems="center"
							borderStyle="round"
							paddingTop={0}
							flexDirection="column"
						>
							<Text color="green">{data.current.windMPH}MPH</Text>
						</Box>
					</Box>
					<Box marginLeft={1} marginRight={1} marginTop={0} marginBottom={0}>
						<DailyForecast />
					</Box>
					<Box marginLeft={1} marginRight={1} marginTop={0} marginBottom={0}>
						<AQI location={data.location} aqi={data.current.aqi} />
					</Box>
				</Box>
			)}
		</>
	);
};
