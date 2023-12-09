import "whatwg-fetch";
import { API_VERSION, API, BASE_URL, Methods, TApiData, TQuery } from "./types.js";
import { ApiFactory } from "./ApiFactory.js";

interface IWeatherApi {
  getCurrent(query: TQuery): Promise<TApiData>;
  getForecast(query: TQuery): Promise<TApiData>;
  getSearch(query: TQuery): Promise<TApiData>;
  getHistory(query: TQuery): Promise<TApiData>;
  getFuture(query: TQuery): Promise<TApiData>;
  getAstronomy(query: TQuery): Promise<TApiData>;
  getTimezone(query: TQuery): Promise<TApiData>;
}

export const weatherApi = new ApiFactory({
  url: `${BASE_URL}/${API_VERSION}`,
  APIs: [
    { api: API.Current, method: Methods.Get },
    { api: API.Forecast, method: Methods.Get },
    { api: API.Search, method: Methods.Get },
    { api: API.History, method: Methods.Get },
    { api: API.Future, method: Methods.Get },
    { api: API.Astronomy, method: Methods.Get },
    { api: API.Timezone, method: Methods.Get },
  ],
});

// TODO fix the unknown type casting here
export const WeatherApi = weatherApi as unknown as IWeatherApi;
