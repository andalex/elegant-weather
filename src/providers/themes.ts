import { TInkBorderStyles, TTheme } from "./types.js"

export const CLASSIC_THEME = {
    themeName: 'classic',
    styles: {
        primaryElement: 'greenBright',
        secondaryElement: 'green',
        tertiaryElement: 'white',
        primaryAccent: 'cyan',
        secondaryAccent: 'gray',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.round,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}

export const BLOOD_MOON_THEME = {
    themeName: 'bloodmoon',
    styles: {
        primaryElement: 'redBright',
        secondaryElement: 'red',
        tertiaryElement: 'redBright',
        primaryAccent: 'gray',
        secondaryAccent: 'white',
        primaryBorderStyle: TInkBorderStyles.singleDouble,
        secondaryBorderStyle: TInkBorderStyles.classic,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}


export const ELEGANT_WEATHER_THEMES: Array<TTheme> = [
    CLASSIC_THEME,
    BLOOD_MOON_THEME
];