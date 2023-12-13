import React, { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { CLASSIC_THEME, ELEGANT_WEATHER_THEMES } from './themes.js';
import { TTheme, TInkBorderStyles } from './types.js';



type TThemeUpdateContextState = {
    setTheme: Dispatch<SetStateAction<TTheme>>
}

type TThemeContextState = {
    theme: TTheme,
    themes: Array<TTheme>
}

const ThemeContext = createContext<TThemeContextState>({ theme: CLASSIC_THEME, themes: ELEGANT_WEATHER_THEMES });

const ThemeUpdateContext = createContext<TThemeUpdateContextState>({ setTheme: (): void => {} });

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
    const contextState = useContext(ThemeUpdateContext);

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

