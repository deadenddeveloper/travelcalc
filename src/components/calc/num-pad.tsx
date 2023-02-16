import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { PropFunction } from "@builder.io/qwik";

import { $, component$, useResource$, useSignal } from "@builder.io/qwik";
import { FaIcon } from "@/components/ui";
import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  faArrowLeft,
  faArrowRight,
  faCircle,
  faDeleteLeft,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { spliceSlice } from "~/lib/str";

interface IButton {
  icon: IconDefinition;
  classes?: string;
  f: PropFunction<() => void>;
  disabled?: boolean | PropFunction<() => void>;
}

interface INumPadProps {
  value: string;
  controls: HTMLInputElement;
  onInput$: PropFunction<() => void>;
}

export const NumPad = component$((props: INumPadProps) => {
  const dotDisabled = useSignal(true);

  const insert = $((symbol: number | ".") => {
    const sel = props.controls.selectionStart || 0;
    props.controls.value = spliceSlice(
      props.controls.value,
      sel,
      0,
      "" + symbol
    );

    props.controls.selectionStart = sel + 1;
    props.controls.selectionEnd = sel + 1;

    props.onInput$();
  });

  const clear = $(() => {
    props.controls.value = "";
    props.onInput$();
  });

  const left = $(() => {
    if (props.controls.selectionStart) {
      props.controls.selectionStart -= 1;
      props.controls.selectionEnd = props.controls.selectionStart;
    }
  });

  const right = $(() => {
    if (null !== props.controls.selectionStart) {
      props.controls.selectionStart += 1;
      props.controls.selectionEnd = props.controls.selectionStart;
    }
  });

  const backspace = $(() => {
    const sel = props.controls.selectionStart || 0;
    if (sel > 0) {
      props.controls.value = spliceSlice(props.controls.value, sel - 1, 1);

      props.controls.selectionStart = sel - 1;
      props.controls.selectionEnd = sel - 1;

      props.onInput$();
    }
  });

  useResource$(async (ctx) => {
    ctx.track(() => props.value);
    dotDisabled.value = props.value.includes(".");
  });

  const handleClick = $((event: MouseEvent, button: IButton) => {
    if (!(event.target as Element)?.closest("button")?.disabled) {
      button.f();
    }

    props.controls.focus();
  });

  const buttons = [
    { icon: fa1, f: $(() => insert(1)) },
    { icon: fa2, f: $(() => insert(2)) },
    { icon: fa3, f: $(() => insert(3)) },
    { icon: fa4, f: $(() => insert(4)) },
    { icon: fa5, f: $(() => insert(5)) },
    { icon: fa6, f: $(() => insert(6)) },
    { icon: fa7, f: $(() => insert(7)) },
    { icon: fa8, f: $(() => insert(8)) },
    { icon: fa9, f: $(() => insert(9)) },
    {
      icon: faCircle,
      classes: "h-1 w-1",
      f: $(() => insert(".")),
      disabled: dotDisabled.value,
    },
    { icon: fa0, f: $(() => insert(0)) },
    { icon: faDeleteLeft, f: $(() => backspace()) },
    { icon: faArrowLeft, f: $(() => left()) },
    { icon: faRemove, f: $(() => clear()) },
    { icon: faArrowRight, f: $(() => right()) },
  ] as IButton[];

  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-2">
        {buttons.map((b) => (
          <button
            class="btn btn-icon"
            onClick$={(e) => handleClick(e as unknown as MouseEvent, b)}
            disabled={!!b.disabled}
          >
            <FaIcon icon={b.icon} class={b.classes || "h-4 w-4"} />
          </button>
        ))}
      </div>
    </div>
  );
});
