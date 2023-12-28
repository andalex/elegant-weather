import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { TDataContextState, TForecastApiData } from "./types.js";
import { API_STATUS, API_METHODS, TQuery } from "../types.js";
import { createDataHook } from "./CreateDataHook.js";
import { handleApiRequeset } from "../handleApiRequest.js";
import { useWeatherOptions } from "../../providers/WeatherOptionsProvider.js";
import { db } from "../../db/index.js";
import { useRefreshResults } from "../../providers/RefreshResultsProvider.js";

const ForecastContext = createContext<TDataContextState | null>(null);

export const useForecast = createDataHook(ForecastContext);

export const ForecastProvider = (props: PropsWithChildren ) => {
  const [apiDataState, setApiDataState] = useState<TForecastApiData>({
    status: API_STATUS.LOADING,
    data: null,
  });
  const { forecastDays, locationQuery } = useWeatherOptions();
  const { refreshResults } = useRefreshResults();

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
      await getForecast({ q: db.data.locationQuery })
    })();
  }, []);

  // useEffect(() => {
  //   (async (): Promise<void> => {
  //     await getForecast({ q: db.data.locationQuery })
  //   })();
  // }, [refreshResults]);

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
