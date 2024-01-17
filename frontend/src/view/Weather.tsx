import React from "react";
import { Text, Box } from "ink";
import Spinner from "ink-spinner";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { API_STATUS } from "../api/types.js";
import { Header } from "./Header.js";
import { AQI } from "./AQI.js";
import { DailyForecast } from "./DailyForecast.js";
import { WeatherOptions } from "./WeatherOptions.js";
import { useTheme } from "../providers/ThemeProvider.js";
import { CurrentConditions } from "./CurrentConditions.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { ForecastErrorFallback } from './ForecastErrorFallback.js';
import { DayForecast } from "./DayForecast.js";
import { useStdoutDimensions } from "../utils/useStdoutDimensions.js";
import { useResponsiveLayout } from "../providers/ResponsiveLayoutProvider.js";
import { WeatherAlerts } from "./WeatherAlerts.js";


export const Weather: React.FC<{}> = ({}) => {
	const {
		apiData: { status },
	} = useForecast();
	const { theme: { styles } } = useTheme();
	const [columns, rows] = useStdoutDimensions();
	const { layoutType } = useResponsiveLayout();

	return (
		<Box
			flexDirection="column"
			width="100%"
			padding={1}
			borderStyle={styles.primaryBorderStyle}
			justifyContent="center"
		>
			<Header />
			{status === API_STATUS.LOADING ? (
				<Text color={styles.primaryAccent}>
					Loading weather <Spinner type="weather" />
				</Text>
			) : (
				<>
					<ErrorBoundary fallbackComponent={<ForecastErrorFallback />}>
						{/* <Text>c: {columns} r: {rows} LT: {layoutType}</Text> */}
						<CurrentConditions />
						<DailyForecast />
						<DayForecast />
						<AQI />
						{/* <WeatherAlerts /> */}
					</ErrorBoundary>
					<WeatherOptions />
				</>
			)}
		</Box>
	);
};
