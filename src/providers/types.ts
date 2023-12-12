import { Dispatch, SetStateAction } from 'react';

export enum TempScale {
    Fahrenheit ='fahrenheit',
    Celsius ='celsius'
}

export const LOCATION_QUERY_DEFAULT = "Portland, OR"

export type TWeatherOptionsContextState = |
    {
        tempScale: TempScale.Fahrenheit | TempScale.Celsius,
        setTempScale: Dispatch<SetStateAction<TempScale>>,
        locationQuery: string,
        setLocationQuery: Dispatch<SetStateAction<string>>,
        forecastDays: string,
        setForecastDays: Dispatch<SetStateAction<string>>,
    }
