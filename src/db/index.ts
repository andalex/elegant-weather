import { LowSync } from 'lowdb';
import { JSONSyncPreset } from 'lowdb/node';
import { TData } from './types.js';
import { CLASSIC_THEME } from '../types/themes.js';
import { HeaderFonts } from '../types/headerFonts.js';
import { TempScale } from '../providers/types.js';


export const defaultData: TData = {
    theme: CLASSIC_THEME,
    headerFont: HeaderFonts.Chrome,
    forecastDays: '4',
    locationQuery: 'Portland, OR',
    tempScale: TempScale.Fahrenheit
}

export const db: LowSync<TData> = await JSONSyncPreset<TData>('./src/db/db.json', defaultData);
