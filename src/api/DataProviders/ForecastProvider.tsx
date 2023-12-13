import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { TDataContextState, TForecastApiData } from "./types.js";
import { API_STATUS, API_METHODS, TQuery } from "../types.js";
import { createDataHook } from "./CreateDataHook.js";
import { handleApiRequeset } from "../handleApiRequest.js";
import { useWeatherOptions } from "../../providers/WeatherOptionsProvider.js";

const DEFAULT_CITY = "Portland, OR";

const ForecastContext = createContext<TDataContextState | null>(null);

export const useForecast = createDataHook(ForecastContext);

export const ForecastProvider = (props: PropsWithChildren ) => {
  const [apiDataState, setApiDataState] = useState<TForecastApiData>({
    status: API_STATUS.LOADING,
    data: null,
  });
  const { forecastDays, locationQuery } = useWeatherOptions();

  const getForecast = async (query: TQuery) => {
    await handleApiRequeset(
      API_METHODS.getForecast,
      { q: query.q, aqi: "yes", alerts: "yes", days: forecastDays },
      setApiDataState,
    );
  }

  // Fetch initial data
  useEffect(() => {
    (async (): Promise<void> => {
      await getForecast({ q: DEFAULT_CITY })
    })();
  }, []);

  //TODO see if you can conviently combine these two side effects
  useEffect(() => {
    (async (): Promise<void> => {
      await getForecast({ q: locationQuery, aqi: 'yes', alerts: 'yes', days: forecastDays });
    })();
  }, [forecastDays])

  return (
    <ForecastContext.Provider value={{ apiData: apiDataState, getForecast }}>
      {props.children}
    </ForecastContext.Provider>
  );
};

export const TestForecastProvider = (
  value: TDataContextState,
  props: PropsWithChildren,
) => (
  <ForecastContext.Provider value={value}>{props.children}</ForecastContext.Provider>
);
