export const processImage = async (image: string) => {
  const response = await fetch("/api/image", {
    method: "POST",
    body: JSON.stringify({
      image,
    }),
  });

  return {
    status: response.status,
    data: await response.json(),
  };
};
