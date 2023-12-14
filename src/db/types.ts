import { Dispatch, SetStateAction } from 'react';
import { HeaderFonts } from '../types/headerFonts.js';
import { TTheme } from '../types/themes.js';


export type TData = {
    theme: TTheme,
    headerFont: HeaderFonts,
    forecastDays: string
}

export type TDbDataContextState = {
    data: TData,
    setData: Dispatch<SetStateAction<TData>>
}
