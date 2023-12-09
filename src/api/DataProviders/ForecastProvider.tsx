import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { TDataContextState } from "./types.js";
import { API_STATUS, API_METHODS } from "../types.js";
import { createDataHook } from "./CreateDataHook.js";
import { handleApiRequeset } from "../handleApiRequest.js";

const ForecastContext = createContext<TDataContextState | null>(null);

export const useForecast = createDataHook(ForecastContext);

export const ForecastProvider = (props: PropsWithChildren ) => {
  const [state, setState] = useState<TDataContextState>({
    status: API_STATUS.LOADING,
    data: null,
  });

  useEffect(() => {
    (async (): Promise<void> => {
      await handleApiRequeset(
        API_METHODS.getForecast,
        { q: "portland", aqi: "yes", alerts: "yes", days: "5" },
        setState,
      );
    })();

    // Empty useEffect dependency array, run onMount.
  }, []);

  return (
    <ForecastContext.Provider value={state}>
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
