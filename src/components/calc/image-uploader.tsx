import type { PropFunction, QwikMouseEvent } from "@builder.io/qwik";
import type { IImageData } from "@/lib/image";

import { $, component$, useSignal } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon } from "@/components/ui";
import { faImage, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { processImage } from "@/lib/image";
import { failure } from "@/lib/toast";

interface IImageUploaderProps {
  onSuccess$: PropFunction<(data: IImageData) => void>;
}

export const ImageUploader = component$((props: IImageUploaderProps) => {
  const loading = useSignal(false);
  const uploader = useSignal<HTMLInputElement>();
  const errMsg = t("app.network_error");

  const handleClick = $((event: QwikMouseEvent) => {
    if (!(event.target as Element)?.closest("button")?.disabled) {
      if (uploader.value && uploader.value?.value) {
        uploader.value.value = "";
      }
      uploader.value?.click();
    }
  });

  const handleChange = $(() => {
    if (!uploader.value?.files || !uploader.value?.files[0]) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.addEventListener("load", async function (e) {
      loading.value = true;
      const image = e.target?.result;

      const result = await processImage(image as string);

      if (200 === result.status) {
        props.onSuccess$(result.data as IImageData);
      }

      if (422 === result.status) {
        failure(errMsg);
      }

      loading.value = false;
    });

    fileReader.readAsDataURL(uploader.value?.files[0]);
  });

  return (
    <>
      <button
        class="btn btn-icon"
        onClick$={handleClick}
        data-tooltip
        disabled={loading.value}
        title={t("app.get_from_image@@Get data from image")}
      >
        {loading.value ? (
          <FaIcon icon={faSpinner} class="w-4 h-4 animate-spin" />
        ) : (
          <FaIcon icon={faImage} class="w-4 h-4" />
        )}
      </button>

      <input
        type="file"
        class="hidden"
        accept="image/*"
        ref={uploader}
        onChange$={handleChange}
      />
    </>
  );
});
