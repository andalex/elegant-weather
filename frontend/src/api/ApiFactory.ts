import { TQuery, TApiData, Methods, API, TAPIs } from "./types.js";
import { constructParams } from "./constructParams.js";
import { fetchFactory } from "./fetchFactory.js";

export class ApiFactory {
  private methods: {
    [methodName: string]: (query: TQuery) => Promise<TApiData>;
  } = {};

  constructor({ url, APIs }: { url: string; APIs: TAPIs }) {
    APIs.map((config) => {
      this.createMethod({ url, api: config.api, method: config.method });
    });
  }

  createMethod({
    api,
    method,
    url,
  }: {
    api: API;
    method: Methods;
    url: string;
  }) {
    this[`${method.toLowerCase()}${api}`] = async (
      query: TQuery,
    ): Promise<TApiData> => {
      const resourceUrl = `${url}/${api.toLowerCase()}.json?${constructParams(query)}`;
      const response = await fetchFactory({
        url: resourceUrl,
        method: Methods.Get,
        body: {},
      });

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();

      return { data, status: response.status };
    };
  }
}
