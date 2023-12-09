import React, { useContext, useState, createContext } from 'react';
import { TempScale, TWeatherOptionsContextState, LOCATION_QUERY_DEFAULT } from './types.js';

const WeatherOptionsContext = createContext<TWeatherOptionsContextState>({
    locationQuery: LOCATION_QUERY_DEFAULT,
    setLocationQuery: (): void => {},
    tempScale: TempScale.Fahrenheit,
    setTempScale: ():void => {}
});


export const useWeatherOptions = () => {
    const contextState = useContext(WeatherOptionsContext)

    if (contextState === undefined) {
        throw new Error(
        "useForecast must be used with WeatherOptionsProvider as a parent component",
        );
    }
    return contextState;
}

export function WeatherOptionsProvider({ children }) {
    const [tempScale, setTempScale] = useState(TempScale.Fahrenheit);
    const [locationQuery, setLocationQuery] = useState(LOCATION_QUERY_DEFAULT);

    return (
        <WeatherOptionsContext.Provider value={{ tempScale, setTempScale, locationQuery, setLocationQuery}}>
            {children}
        </WeatherOptionsContext.Provider>
    )


}