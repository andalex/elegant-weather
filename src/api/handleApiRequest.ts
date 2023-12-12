import { WeatherApi } from "./WeatherApi.js";
import { API_METHODS, API_STATUS } from "./types.js";
import { TQuery } from "./types.js";
import { transformApiResponse } from "./transforms/transformApiResponse.js";

type HandleApiRequestFunction = (
	apiMethod: API_METHODS,
	querys: TQuery,
	setApiDataState: (data: any) => void,
) => Promise<void>;

export const handleApiRequeset: HandleApiRequestFunction = async (apiMethod, query, setApiDataState) => {
  try {
    const response = await WeatherApi[apiMethod](query);
    if (response.status >= 200) {
      const data = transformApiResponse(response, apiMethod);

      setApiDataState({
				status: API_STATUS.LOADED,
				data,
			});
    } else {
			setApiDataState({
				status: API_STATUS.ERROR,
				data: response.error,
			});
		}
  } catch (error) {
    setApiDataState({
			status: API_STATUS.ERROR,
			data: error,
		});
  }
};
