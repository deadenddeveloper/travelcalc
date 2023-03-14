import { useClientEffect$ } from "@builder.io/qwik";
import { delegate } from "tippy.js";

export const useTooltips = () => {
  useClientEffect$(() => {
    delegate("body", {
      target: "[data-tooltip]",
      content: (reference) => reference.getAttribute("title") as string,
      onShow: (instance) => {
        instance.setContent(instance.reference.getAttribute("title") as string);
      },
    });
  });
};
