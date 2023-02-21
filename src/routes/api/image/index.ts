import type { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler = async ({ json, headers, request }) => {
  headers.set(
    "Access-Control-Allow-Origin",
    "http://127.0.0.1 https://travelcalc.pages.dev"
  );

  const body = await request.json();

  if (!body || !body.image) {
    return json(422, { error: "image.invalid" });
  }

  console.log("IMAGE", body.image);
  const fd = new FormData();
  fd.append("base64image", body.image);
  fd.append("isOverlayRequired", "true");

  const response = await fetch(import.meta.env["VITE_OCR_URL"], {
    method: "POST",
    body: fd,
    headers: {
      apikey: import.meta.env["VITE_OCR_KEY"],
    },
  });
  const result = await response.json();

  console.log("RESULT", result);
  if (result.ErrorMessage && result.ErrorMessage.length) {
    return json(422, { error: "image.invalid" });
  }

  return json(200, result);
};
