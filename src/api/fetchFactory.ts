import { Methods, DEFAULT_HEADERS } from "./types.js";

export const fetchFactory = async ({
  url,
  method,
  body = {},
}: {
  url: string;
  method: Methods;
  body: { [key: string]: any };
}) => {
  return fetch(url, {
    method: method,
    headers: {
      ...DEFAULT_HEADERS,
    },
    ...((method === Methods.Post ||
      method === Methods.Patch ||
      method === Methods.Put) &&
      body),
  });
};
