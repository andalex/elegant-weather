import React, { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';

enum TInkBorderStyles {
    single = 'single',
    double = 'double',
    round = 'round',
    bold = 'bold',
    singleDouble = 'singleDouble',
    doubleSingle = 'doubleSingle',
    classic = 'classic'
}

// TODO add enum for supported colors
type TTheme = {
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

const CLASSIC_THEME = {
    themeName: 'classic',
    styles: {
        primaryElement: 'greenBright',
        secondaryElement: 'green',
        tertiaryElement: 'magentaBright',
        primaryAccent: 'cyan',
        secondaryAccent: 'gray',
        primaryBorderStyle: TInkBorderStyles.classic,
        secondaryBorderStyle: TInkBorderStyles.round,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}

const TEST_THEME = {
    themeName: 'test',
    styles: {
        primaryElement: 'red',
        secondaryElement: 'redBright',
        tertiaryElement: 'redBright',
        primaryAccent: 'gray',
        secondaryAccent: 'white',
        primaryBorderStyle: TInkBorderStyles.singleDouble,
        secondaryBorderStyle: TInkBorderStyles.classic,
        tertiaryBorderStyle: TInkBorderStyles.single
    }
}

const ELEGANT_WEATHER_THEMES: Array<TTheme> = [
    CLASSIC_THEME,
    TEST_THEME
];

type TThemeUpdateContextState = {
    setTheme: Dispatch<SetStateAction<TTheme>>
}

type TThemeContextState = {
    theme: TTheme,
    themes: Array<TTheme>
}

const ThemeContext = createContext<TThemeContextState>({ theme: CLASSIC_THEME, themes: ELEGANT_WEATHER_THEMES });

const ThemeUpdateContext = createContext<TThemeUpdateContextState | null>(null);

export const useTheme = () => {
    const contextState = useContext(ThemeContext);

    if (contextState === undefined) {
      throw new Error(
        "useForecast must be used with ThemeProvider as a parent component",
      );
    }

    return contextState;
}

export const useThemeUpdate = () => {
    const contextState = useContext(ThemeContext);

    if (contextState === undefined) {
      throw new Error(
        "useForecast must be used with ThemeProvider as a parent component",
      );
    }

    return contextState;
}

export const ThemeProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState(CLASSIC_THEME);

    return (
        <ThemeContext.Provider value={{ theme, themes: ELEGANT_WEATHER_THEMES }}>
            <ThemeUpdateContext.Provider value={{ setTheme }}>
                {props.children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
};

