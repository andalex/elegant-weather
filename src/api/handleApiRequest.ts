import { WeatherApi } from "./WeatherApi.js";
import { API_STATUS } from "./types.js";
import { TQuery } from "./types.js";
import { transformApiResponse } from "./transforms/transformApiResponse.js";

export const handleApiRequeset = async (apiMethod, query: TQuery, setState) => {
  try {
    const response = await WeatherApi[apiMethod](query);
    if (response.status >= 200) {
      const data = transformApiResponse(response, apiMethod);

      setState({
        status: API_STATUS.LOADED,
        data,
      });
    } else {
      setState({
        status: API_STATUS.ERROR,
        data: response.error,
      });
    }
  } catch (error) {
    setState({
      status: API_STATUS.ERROR,
      data: error,
    });
  }
};
