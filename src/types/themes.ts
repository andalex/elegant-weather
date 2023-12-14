export enum TInkBorderStyles {
    single = 'single',
    double = 'double',
    round = 'round',
    bold = 'bold',
    singleDouble = 'singleDouble',
    doubleSingle = 'doubleSingle',
    classic = 'classic'
}

export enum ThemeNames {
    Classic = 'classic',
    Bloodmoon = 'bloodmoon',
    Monokay = 'monokay',
    Plainjane = 'plainjane',
    Highcontrast = 'highcontrast',
    Forest = 'forest'
}

// TODO add enum for supported colors
export type TTheme = {
    themeName: ThemeNames,
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

export const CLASSIC_THEME = {
    themeName: ThemeNames.Classic,
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
    themeName: ThemeNames.Bloodmoon,
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
    themeName: ThemeNames.Monokay,
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
    themeName: ThemeNames.Plainjane,
    styles: {
        primaryElement: '#fdf9f3',
        secondaryElement: 'gray',
        tertiaryElement: '#fdf9f3',
        primaryAccent: '#fdf9f3',
        secondaryAccent: '#fdf9f3',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.round,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}

export const HIGH_CONTRAST = {
    themeName: ThemeNames.Highcontrast,
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
    themeName: ThemeNames.Forest,
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