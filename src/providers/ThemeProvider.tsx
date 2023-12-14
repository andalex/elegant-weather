import React, { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { CLASSIC_THEME, ELEGANT_WEATHER_THEMES } from '../types/themes.js';
import { TTheme } from '../types/themes.js';
import { db } from "../db/index.js";


type TThemeUpdateContextState = {
    persistTheme: (theme: TTheme) => void
}

type TThemeContextState = {
    theme: TTheme,
    themes: Array<TTheme>
}

const ThemeContext = createContext<TThemeContextState>({ theme: CLASSIC_THEME, themes: ELEGANT_WEATHER_THEMES });

const ThemeUpdateContext = createContext<TThemeUpdateContextState>({ persistTheme: (): void => {} });

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
    const [theme, setTheme] = useState(db.data.theme);

    const persistTheme = (theme: TTheme) => {
      db.data.theme = theme;
      db.write();
      setTheme(db.data.theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, themes: ELEGANT_WEATHER_THEMES }}>
            <ThemeUpdateContext.Provider value={{ persistTheme }}>
                {props.children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
};

