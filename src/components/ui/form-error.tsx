import { component$ } from "@builder.io/qwik";
import { $translate as t, Speak } from "qwik-speak";

interface IFormErrorProps {
  error: {
    msg: string;
    params?: object;
  };
}

export const FormError = component$((props: IFormErrorProps) => {
  const text = t(props.error.msg, props.error.params);

  return (
    <Speak assets={["validation"]}>
      <div class="text-sm text-red-500">{text}</div>
    </Speak>
  );
});
