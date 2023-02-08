// TODO env vars
export const send = async (name: string, email: string, message: string) => {
  const response = await fetch(import.meta.env["VITE_FEEDBACK_ENDPOINT"], {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
  });

  return { result: await response.text() };
};
