import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Box, Text, useFocus, useInput, useFocusManager } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
// TODO add directory indexes to cleanup this imports
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { HeaderFonts, TempScale } from "../providers/types.js";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";
import { useTheme, useThemeUpdate } from "../providers/ThemeProvider.js";

type TWeatherLocationProps = {
	id: string;
};

const WeatherLocationInput = (props: TWeatherLocationProps) => {
	const { getForecast } = useForecast();
	const { locationQuery, setLocationQuery } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
				Weather Location
			</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				{/* Change this to call getForecast when the locationQuery state changes, use a debounce */}
				<TextInput
					value={locationQuery}
					placeholder="Enter Location"
					focus={isFocused}
					onSubmit={(value) => getForecast({ q: value })}
					onChange={(value) => setLocationQuery(value)}
				/>
			</Box>
		</Box>
	);
};

type TTempScaleSelectProps = {
	id: string;
};

const TempScaleSelect = (props: TTempScaleSelectProps) => {
	const { tempScale, setTempScale } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });
	const {
		theme: { styles },
	} = useTheme();

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
				Temp Scale
			</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				<SelectInput
					initialIndex={tempScale === TempScale.Fahrenheit ? 0 : 1}
					onSelect={(item) => setTempScale(item.value)}
					isFocused={isFocused}
					limit={1}
					itemComponent={props => {
						return (
							<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
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
	);
};

const HeaderFontSelect = (props: TTempScaleSelectProps) => {
	const { headerFont, setHeaderFont } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });
	const {
		theme: { styles },
	} = useTheme();

	// TODO make this simpler
	const fontItems = [
		{
			label: HeaderFonts.Chrome,
			value: HeaderFonts.Chrome,
		},
		{
			label: HeaderFonts.Grid,
			value: HeaderFonts.Grid,
		},
		{
			label: HeaderFonts.Pallet,
			value: HeaderFonts.Pallet,
		},
		{
			label: HeaderFonts.Shade,
			value: HeaderFonts.Shade,
		},
		{
			label: HeaderFonts.Simple,
			value: HeaderFonts.Simple,
		},
		{
			label: HeaderFonts.Slick,
			value: HeaderFonts.Slick,
		},
		{
			label: HeaderFonts.Tiny,
			value: HeaderFonts.Tiny,
		},
	];
	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
				Header Font
			</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				<SelectInput
					initialIndex={fontItems.findIndex(
						(item) => item.value === headerFont
					)}
					itemComponent={props => {
						return (
							<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
					onSelect={(item) => setHeaderFont(item.value)}
					isFocused={isFocused}
					items={fontItems}
					limit={1}
				/>
			</Box>
		</Box>
	);
};

const ForecastDaysInput = (props: TWeatherLocationProps) => {
	const { forecastDays, setForecastDays } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });
	const {
		theme: { styles },
	} = useTheme();

	const forecastDaysItems = [
		{ label: "5", value: "5" },
		{ label: "4", value: "4" },
		{ label: "3", value: "3" },
		{ label: "2", value: "2" },
		{ label: "1", value: "1" },
	];

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
				Forecast Days
			</Text>
			<Box
				flexDirection="column"
				margin={0}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				<SelectInput
					items={forecastDaysItems}
					initialIndex={forecastDaysItems.findIndex(
						(item) => item.value === forecastDays
					)}
					itemComponent={props => {
						return (
							<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
					limit={1}
					onSelect={(item) => setForecastDays(item.value)}
					isFocused={isFocused}
				/>
			</Box>
		</Box>
	);
};

type TToggleWeatherOptionsProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	id: string;
};

const ToggleWeatherOptions = (props: TToggleWeatherOptionsProps) => {
	const { isFocused } = useFocus({ id: props.id });
	const { focus } = useFocusManager();
	const {
		theme: { styles },
	} = useTheme();

	useEffect(() => {
		focus(props.id);
	}, []);

	return (
		<Box flexDirection="column" width="20%">
			<Box justifyContent="center" padding={1}>
				<Text
					wrap="truncate"
					color={isFocused ? styles.primaryElement : styles.secondaryAccent}
				>
					Show Options
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
						{ label: "show", value: true },
						{ label: "hide", value: false },
					]}
					itemComponent={props => {
						return (
							<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
					limit={1}
					onSelect={(item) => props.setIsOpen(item.value)}
					isFocused={isFocused}
				/>
			</Box>
		</Box>
	);
};

type TSelectThemeProps = {
	id: string;
};

const SelectTheme = (props: TSelectThemeProps) => {
	const { isFocused } = useFocus({ id: props.id });
	const {
		theme: { styles, themeName },
		themes,
	} = useTheme();
	const { setTheme } = useThemeUpdate();
	const themeItems = themes.map((theme) => {
		return { label: theme.themeName, value: theme };
	});

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
				UI Theme
			</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={
					isFocused ? styles.tertiaryBorderStyle : styles.secondaryBorderStyle
				}
				borderColor={
					isFocused ? styles.secondaryElement : styles.secondaryAccent
				}
			>
				<SelectInput
					items={themeItems}
					initialIndex={themeItems.findIndex(
						(item) => item.label === themeName
					)}
					// TODO dry this up, it's reused in all of these
					itemComponent={props => {
						return (
							<Text color={isFocused ? styles.primaryElement : styles.secondaryAccent}>
								{props.label}
							</Text>
						)
					}}
					indicatorComponent={() =><Text color={isFocused ? styles.primaryElement : styles.primaryAccent}>{'> '}</Text>}
					limit={1}
					onSelect={(item) => setTheme(item.value)}
					isFocused={isFocused}
				/>
			</Box>
		</Box>
	);
};

export const WeatherOptions = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		theme: { styles },
	} = useTheme();

	return (
		<>
			<Box
				flexDirection="column"
				borderStyle={styles.secondaryBorderStyle}
				marginTop={0}
				marginBottom={0}
			>
				<Box flexDirection="row" width="100%" justifyContent="center">
					<ToggleWeatherOptions isOpen={isOpen} setIsOpen={setIsOpen} id="1" />
				</Box>
				{isOpen && (
					<>
						<Box justifyContent="center" padding={1}>
							<Text bold color={styles.primaryElement}>
								Weather Options
							</Text>
						</Box>
						<Box flexDirection="row" justifyContent="center">
							<WeatherLocationInput id="2" />
							<TempScaleSelect id="3" />
							<ForecastDaysInput id="4" />
							<HeaderFontSelect id="5" />
							<SelectTheme id="6" />
						</Box>
						<Box justifyContent="center">
							<Text bold color={styles.primaryElement}>
								TAB: {"->"} / SHIFT+TAB: {"<-"} / ENTER to select
							</Text>
						</Box>
					</>
				)}
			</Box>
		</>
	);
};
