import { component$ } from "@builder.io/qwik";
import {
  library,
  icon,
  IconDefinition,
} from "@fortawesome/fontawesome-svg-core";

interface IFaIconProps {
  icon: IconDefinition;
  class?: string;
  tooltip?: string;
}

export const FaIcon = component$((props: IFaIconProps) => {
  library.add(props.icon);
  const { html } = icon(
    {
      prefix: props.icon.prefix,
      iconName: props.icon.iconName,
    },
    { classes: props.class }
  );

  return (
    <i
      title={props.tooltip}
      data-tooltip={!!props.tooltip}
      dangerouslySetInnerHTML={`${html}`}
    ></i>
  );
});
