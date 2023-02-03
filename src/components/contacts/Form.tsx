import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon, FormError } from "@/components/ui";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { success, failure } from "@/lib/toast";
import type { IErrorBag } from "@/types/error";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

export const Form = component$(() => {
  const loading = useSignal(false);
  const formData = useStore<IFormData>({
    name: "",
    email: "",
    message: "",
  });
  const errors = useStore<{ bag: IErrorBag }>({ bag: {} });

  const errMsg = t("app.network_error@@Something went wrong");
  const scsMsg = t(
    "app.feedback.success@@Your message has been successfully sent"
  );

  const submitButton = loading.value ? (
    <button class="btn" disabled>
      <FaIcon icon={faSpinner} class="h-4 w-4 animate-spin" />
      <span>{t("app.loading@@Loading")}...</span>
    </button>
  ) : (
    <button class="btn">
      <FaIcon icon={faPaperPlane} class="h-4 w-4" />
      <span>{t("app.send_message@@Send message")}</span>
    </button>
  );

  const handleChange = $((event: InputEvent) => {
    const el = event.target as HTMLInputElement;
    formData[el.name as keyof IFormData] = el.value;
  });

  const processSuccess = $(() => {
    formData.name = "";
    formData.email = "";
    formData.message = "";
    success(scsMsg);
  });

  const handleSubmit = $(() => {
    loading.value = true;
    errors.bag = {};

    fetch(import.meta.env["VITE_FEEDBACK_ENDPOINT"], {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(async (r) => {
        if (422 === r.status) {
          errors.bag = await r.json();
        } else {
          processSuccess();
        }
      })
      .catch(() => {
        failure(errMsg);
      })
      .finally(() => (loading.value = false));
  });

  return (
    <form
      preventdefault:submit
      onSubmit$={handleSubmit}
      class="mx-auto w-full sm:w-1/2 space-y-4"
    >
      <div class="form-block">
        <label class="label" for="name">
          {t("app.name@@Your name")}
        </label>
        <input
          class="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onInput$={handleChange}
        />
        {errors.bag.name && <FormError error={errors.bag.name} />}
      </div>

      <div class="form-block">
        <label class="label" for="email">
          {t("app.email@@Your email")}
        </label>
        <input
          class="input"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onInput$={handleChange}
        />
        {errors.bag.email && <FormError error={errors.bag.email} />}
      </div>

      <div class="form-block">
        <label class="label" for="message">
          {t("app.message@@Message")}
        </label>
        <textarea
          class="input h-24"
          name="message"
          id="message"
          value={formData.message}
          oninput$={handleChange}
        ></textarea>
        {errors.bag.message && <FormError error={errors.bag.message} />}
      </div>

      <div class="text-center">{submitButton}</div>
    </form>
  );
});
