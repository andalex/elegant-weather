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

export const MONOKAY = {
    themeName: 'monokay',
    styles: {
        primaryElement: '#ab9df2',
        secondaryElement: '#fdf9f3',
        tertiaryElement: '#78dce8',
        primaryAccent: '#a9dc76',
        secondaryAccent: '#ff6188',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.round,
        tertiaryBorderStyle: TInkBorderStyles.singleDouble
    }
}

export const PLAIN_JANE = {
    themeName: 'plainjane',
    styles: {
        primaryElement: '#fdf9f3',
        secondaryElement: '#fdf9f3',
        tertiaryElement: '#fdf9f3',
        primaryAccent: '#fdf9f3',
        secondaryAccent: '#fdf9f3',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.round,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}

export const HIGH_CONTRAST = {
    themeName: 'highcontrast',
    styles: {
        primaryElement: '#3a86ff',
        secondaryElement: '#fdf9f3',
        tertiaryElement: '#fb5607',
        primaryAccent: '#ff006e',
        secondaryAccent: '#8338ec',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.single,
        tertiaryBorderStyle: TInkBorderStyles.round
    }
}

export const FOREST = {
    themeName: 'forest',
    styles: {
        primaryElement: '#9ef01a',
        secondaryElement: '#70e000',
        tertiaryElement: '#38b000',
        primaryAccent: '#008000',
        secondaryAccent: '#ccff33',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.classic,
        tertiaryBorderStyle: TInkBorderStyles.round
    }
}

export const ELEGANT_WEATHER_THEMES: Array<TTheme> = [
    BLOOD_MOON_THEME,
    CLASSIC_THEME,
    FOREST,
    HIGH_CONTRAST,
    MONOKAY,
    PLAIN_JANE,
];