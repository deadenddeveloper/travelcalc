/** @jsxImportSource react */

import type { ICountry } from "@/lib/countries";

import { qwikify$ } from "@builder.io/qwik-react";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { countries } from "@/lib/countries";

interface ICountrySelectProps {
  id: string;
  value: string;
  onChange: (value: string) => string;
  placeholder?: string;
  nothing?: string;
}

export const CountrySelect = qwikify$((props: ICountrySelectProps) => {
  const [selected, setSelected] = useState(
    countries.find((c) => c.code === props.value)
  );
  const [query, setQuery] = useState("");

  const changeHandler = (country: ICountry) => {
    setSelected(country);
    props.onChange(country.code);
  };

  const filteredCountries =
    query === ""
      ? countries
      : countries.filter((country) =>
          country.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={changeHandler}>
        <div className="relative mt-1">
          <div className="relative w-full">
            <Combobox.Input
              id={props.id}
              className="w-full input"
              displayValue={(country: ICountry) => country.name}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={props.placeholder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2"></Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 bg-skin-base text-base shadow-lg focus:outline-none sm:text-sm z-10">
              {filteredCountries.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4">
                  {props.nothing}
                </div>
              ) : (
                filteredCountries.map((country) => (
                  <Combobox.Option
                    key={country.code}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-skin-brand" : ""
                      }`
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {country.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "" : "text-skin-brand"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
});
