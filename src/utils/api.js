import { checkResponse } from "./newsApi";
import { baseUrl } from "./newsApi";

export function getItems(token) {
  return fetch(`${baseUrl}/items`, {
    headers: {
      ...headers,
    //   authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}
