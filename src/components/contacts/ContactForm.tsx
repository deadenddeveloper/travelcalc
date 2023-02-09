import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { FaIcon, FormError } from "@/components/ui";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
//import { success, failure } from "@/lib/toast";
import { action$, Form, zod$ } from "@builder.io/qwik-city";
import { send } from "@/lib/feedback";
import { feedbackSchema } from "@/lib/validation";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

export const sendFeedback = action$((data: IFormData) => {
  return send(data.name, data.email, data.message);
}, zod$(feedbackSchema));

export const ContactForm = component$(() => {
  const action = sendFeedback.use();

  //const errMsg = t("app.network_error@@Something went wrong");
  //const scsMsg = t("app.feedback.success@@Your message has been successfully sent");

  const submitButton = action.isRunning ? (
    <button class="btn" disabled>
      <FaIcon icon={faSpinner} class="h-4 w-4 animate-spin" />
      <span>{t("app.loading@@Loading")}...</span>
    </button>
  ) : (
    <button class="btn" type="submit">
      <FaIcon icon={faPaperPlane} class="h-4 w-4" />
      <span>{t("app.send_message@@Send message")}</span>
    </button>
  );

  return (
    <Form action={action} class="mx-auto w-full sm:w-1/2 space-y-4">
      {JSON.stringify(action)}

      <div class="form-block">
        <label class="label" for="name">
          {t("app.name@@Your name")}
        </label>
        <input class="input" type="text" id="name" name="name" />
      </div>

      <div class="form-block">
        <label class="label" for="email">
          {t("app.email@@Your email")}
        </label>
        <input class="input" type="text" id="email" name="email" />
        {action.value?.fieldErrors?.email && (
          <FormError error={{ msg: action.value.fieldErrors.email[0] }} />
        )}
      </div>

      <div class="form-block">
        <label class="label" for="message">
          {t("app.message@@Message")}
        </label>
        <textarea class="input h-24" name="message" id="message"></textarea>
        {action.value?.fieldErrors?.message && (
          <FormError
            error={{
              msg: action.value.fieldErrors.message[0],
              params: { min: 10 },
            }}
          />
        )}
      </div>

      <div class="text-center">{submitButton}</div>
    </Form>
  );
});
