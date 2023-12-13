import { Dispatch, SetStateAction } from "react";

export enum HeaderFonts {
	Chrome = "chrome",
	Grid = "grid",
	Pallet = "pallet",
	Shade = "shade",
	Simple = "simple",
	Slick = "slick",
	Tiny = "tiny",
}

export type THeaderFontsState = Array<HeaderFonts>;

export enum TempScale {
	Fahrenheit = "fahrenheit",
	Celsius = "celsius",
}

export const LOCATION_QUERY_DEFAULT = "Portland, OR";

export type TWeatherOptionsContextState = {
	tempScale: TempScale.Fahrenheit | TempScale.Celsius;
	setTempScale: Dispatch<SetStateAction<TempScale>>;
	locationQuery: string;
	setLocationQuery: Dispatch<SetStateAction<string>>;
	forecastDays: string;
	setForecastDays: Dispatch<SetStateAction<string>>;
	headerFont: HeaderFonts;
	setHeaderFont: Dispatch<SetStateAction<HeaderFonts>>;
};

export enum TInkBorderStyles {
    single = 'single',
    double = 'double',
    round = 'round',
    bold = 'bold',
    singleDouble = 'singleDouble',
    doubleSingle = 'doubleSingle',
    classic = 'classic'
}

// TODO add enum for supported colors
export type TTheme = {
    themeName: string,
    styles: {
        primaryElement: string,
        secondaryElement: string,
        tertiaryElement: string,
        primaryAccent: string,
        secondaryAccent: string,
        primaryBorderStyle: TInkBorderStyles,
        secondaryBorderStyle: TInkBorderStyles,
        tertiaryBorderStyle: TInkBorderStyles
    }
}
