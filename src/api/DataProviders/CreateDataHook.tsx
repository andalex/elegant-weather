import { useContext } from "react";
import { TDataContextState } from "./types.js";


export const createDataHook = (ApiContext: any) => () => {
  const contextState = useContext<TDataContextState>(ApiContext);

  if (contextState === undefined) {
    throw new Error(
      "useForecast must be used with ForecastProvider as a parent component",
    );
  }

  return contextState
};
