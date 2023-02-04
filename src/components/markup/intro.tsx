import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { Link } from "@builder.io/qwik-city";
import { FaIcon } from "@/components/ui";
import { faCog, faCompass } from "@fortawesome/free-solid-svg-icons";

export const Intro = component$(() => {
  return (
    <div class="mx-auto flex flex-col items-center justify-center space-y-8 w-full md:w-1/2">
      <div class="text-xl text-center">{t("app.hello")}!</div>
      <div class="text-center">
        <FaIcon
          icon={faCompass}
          class="h-6 w-6 animate-pulse text-skin-brand"
        />
      </div>
      <div class="text-center">{t("app.intro")}</div>
      <div>
        <Link class="btn" href="/settings">
          <FaIcon icon={faCog} class="h-4 w-4" />
          <span>{t("app.go_to_settings@@Go to settings")}</span>
        </Link>
      </div>
    </div>
  );
});
