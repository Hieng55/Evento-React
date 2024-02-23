import restClient from "./apiServices";

export function getData(link: string, params?: object) {
  return restClient({
    url: `${link}`,
    params,
  });
}
