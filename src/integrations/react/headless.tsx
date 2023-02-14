/** @jsxImportSource react */

import type { ICountry } from "@/lib/countries";

import { qwikify$ } from "@builder.io/qwik-react";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import "@/assets/flags.css";

interface ICountrySelectProps {
  id: string;
  value: string;
  countries: ICountry[];
  onChange: (value: string) => string;
  displayValue: string;
  placeholder?: string;
  nothing?: string;
}

export const CountrySelect = qwikify$((props: ICountrySelectProps) => {
  const [selected, setSelected] = useState<ICountry | null>(null);
  const [query, setQuery] = useState("");
  const changeHandler = (country: ICountry) => {
    setSelected(country);
    props.onChange(country?.code);
  };

  useEffect(() => {
    const country = props.countries.find((c) => c.code === props.value);
    if (country) {
      setSelected(country);
    }
  }, [props.value]);

  const filteredCountries =
    query === ""
      ? props.countries
      : props.countries.filter((country) =>
          (country.name + country.currency)
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox
        nullable={true}
        defaultValue={null}
        value={selected}
        onChange={changeHandler}
        by="code"
      >
        <div className="relative mt-1">
          <div className="relative w-full">
            <Combobox.Input
              id={props.id}
              className="w-full input"
              displayValue={() =>
                selected && props.displayValue
                  ? `${props.displayValue} (${selected.currency})`
                  : ""
              }
              onChange={(event) => setQuery(event.target.value)}
              placeholder={props.placeholder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
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
                    className={({ selected, active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active || selected ? "bg-skin-brand" : ""
                      }`
                    }
                    value={country}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`flex items-center justify-between space-x-1 ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          <i
                            className={`flag ${country.code.toLowerCase()}`}
                          ></i>
                          <span className="truncate flex-grow">
                            {country.name}
                          </span>
                          <span>{country.currency}</span>
                        </span>
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
