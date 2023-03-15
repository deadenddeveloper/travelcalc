export interface IImageData {
  image: string;
  values: IParsingValue[];
}

export interface IParsingWord {
  Height: number;
  Left: number;
  Top: number;
  Width: number;
  WordText: string;
}

export interface IParsingValue extends IParsingWord {
  content: string;
}

interface IParsingLine {
  Words: IParsingWord[];
}

interface IParsingTextOverlay {
  TextOverlay: { Lines: IParsingLine[] };
}

interface IParsingData {
  ParsedResults: IParsingTextOverlay[];
}

export const processParsedResult = (parsed: IParsingData) => {
  const lines = parsed.ParsedResults[0].TextOverlay?.Lines;

  if (!lines || !lines.length) {
    return [];
  }

  return lines
    .map((line) => line.Words)
    .flat()
    .map((word) => ({
      ...word,
      content: word.WordText.trim().replaceAll(",", "."),
    }))
    .filter((word) => +word.content);
};

const resizeImage = (
  img: HTMLImageElement,
  maxHeight = 1000,
  maxWidth = 1000,
  quality = 0.7
) => {
  const canvas = document.createElement("canvas");

  let { width, height } = img;

  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height *= maxWidth / width));
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width *= maxHeight / height));
      height = maxHeight;
    }
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.drawImage(img, 0, 0, width, height);
  }

  return canvas.toDataURL("image/jpeg", quality);
};

const loadImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (e) => {
      reject(e);
    };
  });
};

const prepareImage = async (base64image: string) => {
  return resizeImage((await loadImage(base64image)) as HTMLImageElement);
};

export const processImage = async (base64image: string) => {
  try {
    const image = await prepareImage(base64image);

    const response = await fetch("/api/image", {
      method: "POST",
      body: JSON.stringify({
        image,
      }),
    });

    if (200 !== response.status) {
      return {
        status: response.status,
      };
    }

    // TODO hash image
    // TODO save into storage

    return {
      status: response.status,
      data: {
        image,
        values: processParsedResult(await response.json()),
      },
    };
  } catch (e) {
    return {
      status: 500,
    };
  }
};
