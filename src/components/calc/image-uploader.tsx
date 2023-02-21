import { $, component$, useSignal } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon } from "@/components/ui";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { processImage } from "@/lib/image";
import { failure } from "@/lib/toast";

export const ImageUploader = component$(() => {
  const uploader = useSignal<HTMLInputElement>();
  const errMsg = t("app.network_error");

  const changeHandler = $(() => {
    if (!uploader.value?.files || !uploader.value?.files[0]) return;

    const fileReader = new FileReader();

    fileReader.addEventListener("load", async function (e) {
      const image = e.target?.result;
      const result = await processImage(image as string);

      console.log(result);

      if (422 === result.status) {
        failure(errMsg);
      }
    });

    fileReader.readAsDataURL(uploader.value?.files[0]);
  });

  return (
    <>
      <button
        class="btn btn-icon"
        onClick$={() => uploader.value?.click()}
        data-tooltip
        title={t("app.get_from_image@@Get data from image")}
      >
        <FaIcon icon={faImage} class="w-4 h-4" />
      </button>

      <input
        type="file"
        class="hidden"
        accept="image/*"
        ref={uploader}
        onChange$={changeHandler}
      />
    </>
  );
});
