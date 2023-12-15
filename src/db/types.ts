import { Dispatch, SetStateAction } from 'react';
import { HeaderFonts } from '../types/headerFonts.js';
import { TTheme } from '../types/themes.js';
import { TempScale } from '../providers/types.js';


export type TData = {
    theme: TTheme,
    headerFont: HeaderFonts,
    forecastDays: string,
    locationQuery: string,
    tempScale: TempScale,
}

export type TDbDataContextState = {
    data: TData,
    setData: Dispatch<SetStateAction<TData>>
}
