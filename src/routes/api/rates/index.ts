import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ json, headers }) => {
  headers.set(
    "Access-Control-Allow-Origin",
    "http://127.0.0.1 https://travelcalc.pages.dev"
  );

  const date = new Date().toISOString().split("T")[0];
  const apiLayerKey = import.meta.env["VITE_API_LAYER_KEY"];
  const apiLayerUrl = import.meta.env["VITE_API_LAYER_URL"];

  const response = await fetch(`${apiLayerUrl}${date}?symbols=&base=EUR`, {
    headers: {
      "Content-Type": "text/json",
      apikey: apiLayerKey,
    },
  });

  json(200, await response.json());
};
