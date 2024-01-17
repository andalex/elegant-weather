import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Text, Box, useFocus, useFocusManager } from "ink";
import SelectInput from "ink-select-input";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useTheme } from "../providers/ThemeProvider.js";

type TToggleWeatherAlertsProps  = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	id: string;
};

const ToggleWeatherAlerts = (props: TToggleWeatherAlertsProps) => {
	const { isFocused } = useFocus({ id: props.id });
	const { focus } = useFocusManager();
	const { theme: { styles } } = useTheme();

	useEffect(() => {
		focus(props.id);
	}, []);

	return (
		<Box flexDirection="column" width="20%">
			<Box justifyContent="center" padding={1}>
				<Text bold color={styles.primaryElement}>
					Weather Alerts
				</Text>
			</Box>
			<Box
				flexDirection="column"
				paddingLeft={1}
				paddingRight={1}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				<SelectInput
					items={[
						{ label: "show alerts", value: true },
						{ label: "hide alerts", value: false },
					]}
					itemComponent={props => {
						return (
							<Text wrap="truncate-middle" color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
					limit={1}
					onSelect={({ value }) => props.setIsOpen(value)}
					isFocused={isFocused}
				/>
			</Box>

		</Box>
	);
};
/**
 
	area: alert.areas,
	headline: alert.headline,
	severity: alert.severity,
	urgency: alert.urgency,
	areas: alert.areas,
	certainty: alert.certainty,
	event: alert.event,
	effective: alert.effective,
	expires: alert.expires,
	desc: alert.desc,
	instruction: alert.instruction
 */
export const WeatherAlerts = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		theme: { styles },
	} = useTheme();
	const {
		apiData: {
			data: { alerts },
		},
	} = useForecast();

	return (
		<>
			<Box
				flexDirection="column"
				borderStyle={styles.secondaryBorderStyle}
				marginTop={0}
				marginBottom={0}
				paddingBottom={1}
			>
				<Box flexDirection="row" width="100%" justifyContent="center">
					<ToggleWeatherAlerts isOpen={isOpen} setIsOpen={setIsOpen} id="20" />
				</Box>
				{isOpen && (
					<Box flexDirection="column" width="100%" alignItems="center">
						{alerts.map(alert => {
							return (
								<Box 
									flexDirection="column"
									width="100%"
									alignItems="center"
									borderStyle={styles.primaryBorderStyle}
									borderColor={styles.primaryAccent}
									>
									<Text color={styles.primaryElement}>{alert.headline}</Text>
									<Text color={styles.secondaryElement}>-----------------------</Text>
									<Text color={styles.primaryElement}>{alert.event}</Text>
									<Text color={styles.secondaryElement}>-----------------------</Text>
									<Text wrap="truncate" color={styles.tertiaryElement}>{alert.desc}</Text>
									<Text color={styles.secondaryElement}>-----------------------</Text>
									{alert.instruction &&
										<Text wrap="truncate" color={styles.tertiaryElement}>{alert.instruction}</Text>
									}
								</Box>
							)
						})}
					</Box>
				)}
			</Box>
		</>
	);
}