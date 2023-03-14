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
  const lines = parsed.ParsedResults[0].TextOverlay.Lines;

  if (!lines.length) {
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

export const processImage = async (image: string) => {
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
};
