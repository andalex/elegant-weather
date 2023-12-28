import { API_STATUS, TQuery } from "../types.js";

export type TForecastApiData = | { status: API_STATUS.LOADING | API_STATUS.ERROR; data: null }
| { status: API_STATUS.LOADED; data: any };

export type TDataContextState = {
	apiData: TForecastApiData,
  getForecast: (query: TQuery) => void;
};

