import React, { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';

type TTheme = {
    themeName: string,
    styles: {
        primaryElement: string,
        secondaryElement: string,
        tertiaryElement: string,
        primaryAccent: string,
        secondaryAccent: string,
        primaryBorderStyle: string,
        secondaryBorderStyle: string
    }
}

type TThemeUpdateContextState = {
    setTheme: Dispatch<SetStateAction<Array<TTheme>>>
}

type TThemeContextState = Array<TTheme>

const ELEGANT_WEATHER_THEMES = {
    themeName: 'classic',
    styles: {
        primaryElement: 'green',
        secondaryElement: 'greenBright',
        tertiaryElement: 'magentaBright',
        primaryAccent: 'cyan',
        secondaryAccent: 'gray',
        primaryBorderStyle: 'classic',
        secondaryBorderStyle: 'round'
    }
}

const ThemeContext = createContext<TThemeContextState>([ELEGANT_WEATHER_THEMES]);

const ThemeUpdateContext = createContext<TThemeUpdateContextState>({
    setTheme: (): void => {}
});

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
    const [themes, setTheme] = useState([ELEGANT_WEATHER_THEMES]);

    return (
        <ThemeContext.Provider value={themes}>
            <ThemeUpdateContext.Provider value={{ setTheme }}>
                {props.children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
