import { Languages } from "../types/languages.js";

export enum Methods {
  Get = "GET",
  Post = "POST",
  Patch = "PATCH",
  Put = "PUT",
  Delete = "DELETE",
  Head = "HEAD",
}

export enum API_STATUS {
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}
export const BASE_URL = "http://api.weatherapi.com";

export const API_VERSION = "v1";

export enum API {
  Current = "Current",
  Forecast = "Forecast",
  Search = "Search",
  History = "History",
  Future = "Future",
  Astronomy = "Astronomy",
  Timezone = "Timezone",
}

export enum API_METHODS {
  getCurrent = "getCurrent",
  getForecast = "getForecast",
  getSearch = "getSearch",
  getHistory = "getHistory",
  getFuture = "getFuture",
  getAstronomy = "getAstronomy",
  getTimezone = "getTimezone",
}

export type TAPIs = Array<{ api: API; method: Methods }>;

export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

export type TQuery = {
  q: string;
  days?: string;
  dt?: string;
  unixd?: string;
  end_dt?: string;
  unixend_dt?: string;
  hour?: string;
  alerts?: "yes" | "no";
  aqi?: "yes" | "no";
  tides?: "yes" | "no";
  tz?: string;
  lang?: Languages;
};

export type TApiData = {
  data: { [key: string]: string | number };
  status: number;
  error?: any;
};
