import { component$ } from "@builder.io/qwik";

interface IPriceValueProps {
  title: string;
  position: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

export const PriceValue = component$((props: IPriceValueProps) => {
  const { top, left, width, height } = props.position;

  return (
    <div
      data-tooltip
      title={props.title}
      class={`absolute border bg-gray-500/50`}
      style={`top:${top}%;left:${left}%;width:${width}%;height:${height}%`}
    ></div>
  );
});
