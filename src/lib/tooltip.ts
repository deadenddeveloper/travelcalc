import { useClientEffect$ } from "@builder.io/qwik";
import tippy from "tippy.js";

export const useTooltips = () => {
  useClientEffect$(() => {
    tippy("[data-tooltip]", {
      content: (reference) => reference.getAttribute("title") as string,
      onShow: (instance) => {
        instance.setContent(instance.reference.getAttribute("title") as string);
      },
    });
  });
};
