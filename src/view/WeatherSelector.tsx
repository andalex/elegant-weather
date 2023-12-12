import React, { useEffect, useState } from "react";
import { Box, Text, useFocus, useInput, useFocusManager } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
// TODO add directory indexes to cleanup this imports
import { useWeatherOptions } from "../providers/WeatherOptionsProvider.js";
import { HeaderFonts, TempScale } from "../providers/types.js";
import { useForecast } from "../api/DataProviders/ForecastProvider.js";

type TWeatherLocationProps = {
	id: string;
};

const WeatherLocationInput = (props: TWeatherLocationProps) => {
	const { getForecast } = useForecast();
	const { locationQuery, setLocationQuery } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });
	const { focus } = useFocusManager();

	useEffect(() => {
		focus("1");
	}, []);

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? "greenBright" : "white"}>Weather Location</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={isFocused ? "double" : "round"}
				borderColor={isFocused ? "green" : "white"}
			>
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

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? "greenBright" : "white"}>Temp Scale</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={isFocused ? "double" : "round"}
				borderColor={isFocused ? "green" : "white"}
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
	);
};

const HeaderFontSelect = (props: TTempScaleSelectProps) => {
	const { headerFont, setHeaderFont } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });

    // TODO make this simpler
	const fontItems = [
		{
			label: HeaderFonts["3d"],
			value: HeaderFonts["3d"],
		},
		{
			label: HeaderFonts.Block,
			value: HeaderFonts.Block,
		},
		{
			label: HeaderFonts.Chrome,
			value: HeaderFonts.Chrome,
		},
		{
			label: HeaderFonts.Grid,
			value: HeaderFonts.Grid,
		},
		{
			label: HeaderFonts.Huge,
			value: HeaderFonts.Huge,
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
			label: HeaderFonts.Simple3D,
			value: HeaderFonts.Simple3D,
		},
		{
			label: HeaderFonts.SimpleBlock,
			value: HeaderFonts.SimpleBlock,
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
			<Text color={isFocused ? "greenBright" : "white"}>Header Font</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={isFocused ? "double" : "round"}
				borderColor={isFocused ? "green" : "white"}
			>
				<SelectInput
					initialIndex={fontItems.findIndex(item => item.value === headerFont )}
					onSelect={(item) => setHeaderFont(item.value)}
					items={fontItems}
				/>
			</Box>
		</Box>
	);
};

const ForecastDaysInput = (props: TWeatherLocationProps) => {
	const { getForecast } = useForecast();
	const { forecastDays, locationQuery, setForecastDays } = useWeatherOptions();
	const { isFocused } = useFocus({ id: props.id });

	return (
		<Box flexDirection="column" margin={1}>
			<Text color={isFocused ? "greenBright" : "white"}>Forecast Days</Text>
			<Box
				flexDirection="column"
				margin={0}
				padding={0}
				borderStyle={isFocused ? "double" : "round"}
				borderColor={isFocused ? "green" : "white"}
			>
				<TextInput
					value={forecastDays}
					placeholder="Enter # Days"
					focus={isFocused}
					// TODO find a way to not need to pass through the locationQuery here
					// Have the provider check the state or use useMemo to see if the value has changed.
					onSubmit={() => getForecast({ q: locationQuery })}
					onChange={(value) => setForecastDays(value)}
				/>
			</Box>
		</Box>
	);
};

// TODO: handle field focus behavior (tab)
export const WeatherSelector = () => {
	return (
		<Box flexDirection="column" width="100%" borderStyle="classic">
			<Box justifyContent="center" padding={1}>
				<Text bold color="greenBright">
					Weather Options
				</Text>
			</Box>
			<Box flexDirection="row">
				<WeatherLocationInput id="1" />
				<TempScaleSelect id="2" />
				<ForecastDaysInput id="3" />
                <HeaderFontSelect id="4" />
			</Box>
			<Box justifyContent="center">
				<Text bold color="greenBright">
					TAB: {"->"} / SHIFT+TAB: {"<-"} / ENTER to select
				</Text>
			</Box>
		</Box>
	);
};
