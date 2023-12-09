import { TQuery } from "./types.js";

export const constructParams = (query: TQuery) => {
  return new URLSearchParams(query).toString();
};
