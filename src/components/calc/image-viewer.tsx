import type { IImageData, IParsingValue } from "@/lib/image";
import type { ICurrency } from "@/lib/currencies";
import type { PropFunction } from "@builder.io/qwik";

import { component$, useSignal } from "@builder.io/qwik";
import { FaIcon } from "@/components/ui";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { PriceValue } from "@/components/calc";
import { convert } from "@/lib/calc";

interface IImageViewerProps {
  data: IImageData;
  myCurrency: ICurrency;
  foreignCurrency: ICurrency;
  onClose$: PropFunction<() => void>;
}

export const ImageViewer = component$((props: IImageViewerProps) => {
  if (null === props.data) {
    return <></>;
  }

  const img = useSignal<HTMLImageElement>();
  const nw = img.value?.naturalWidth || 1;
  const nh = img.value?.naturalHeight || 1;

  const getTitle = async (value: IParsingValue) => {
    const v = Math.abs(+value.content);
    const c = (
      await convert(v, props.foreignCurrency.code, props.myCurrency.code)
    ).toFixed(props.myCurrency?.decimal_digits || 2);
    return `${v} ${props.foreignCurrency?.code} = ${c} ${props.myCurrency?.code}`;
  };

  return (
    <div class="absolute flex items-center justify-center w-full h-screen p-4 !m-0 top-0 left-0 bg-skin-base/90">
      <button
        onClick$={props.onClose$}
        class="absolute top-2 right-2 hover:text-skin-brand z-10"
      >
        <FaIcon icon={faTimes} class="w-10 h-10" />
      </button>

      <div
        class="relative w-full h-full bg-contain bg-center bg-no-repeat"
        style={`background-image:url('${props.data.image}');aspect-ratio:${nh}/${nw};max-height:${nh}px;max-width:${nw}px;width:calc((100vh - 2rem) * ${nw}/${nh} )`}
      >
        {props.data.values.map(async (value, index) => (
          <PriceValue
            key={index}
            title={await getTitle(value)}
            position={{
              top: (value.Top / nh) * 100,
              left: (value.Left / nw) * 100,
              width: (value.Width / nw) * 100,
              height: (value.Height / nh) * 100,
            }}
          />
        ))}
      </div>

      <img ref={img} src={props.data.image} class="hidden" />
    </div>
  );
});
