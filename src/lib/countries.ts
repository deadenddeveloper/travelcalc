import { getCurrency } from "@/lib/currencies";
import { $translate as t } from "qwik-speak";

export interface ICountry {
  code: string;
  name: string;
  currency: string;
}

export const countries = [
  {
    code: "AD",
    name: "Andorra",
    currency: "EUR",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    currency: "AED",
  },
  {
    code: "AF",
    name: "Afghanistan",
    currency: "AFN",
  },
  {
    code: "AG",
    name: "Antigua and Barbuda",
    currency: "XCD",
  },
  {
    code: "AI",
    name: "Anguilla",
    currency: "XCD",
  },
  {
    code: "AL",
    name: "Albania",
    currency: "ALL",
  },
  {
    code: "AM",
    name: "Armenia",
    currency: "AMD",
  },
  {
    code: "AO",
    name: "Angola",
    currency: "AOA",
  },
  {
    code: "AR",
    name: "Argentina",
    currency: "ARS",
  },
  {
    code: "AS",
    name: "American Samoa",
    currency: "USD",
  },
  {
    code: "AT",
    name: "Austria",
    currency: "EUR",
  },
  {
    code: "AU",
    name: "Australia",
    currency: "AUD",
  },
  {
    code: "AW",
    name: "Aruba",
    currency: "AWG",
  },
  {
    code: "AX",
    name: "Åland",
    currency: "EUR",
  },
  {
    code: "AZ",
    name: "Azerbaijan",
    currency: "AZN",
  },
  {
    code: "BA",
    name: "Bosnia and Herzegovina",
    currency: "BAM",
  },
  {
    code: "BB",
    name: "Barbados",
    currency: "BBD",
  },
  {
    code: "BD",
    name: "Bangladesh",
    currency: "BDT",
  },
  {
    code: "BE",
    name: "Belgium",
    currency: "EUR",
  },
  {
    code: "BF",
    name: "Burkina Faso",
    currency: "XOF",
  },
  {
    code: "BG",
    name: "Bulgaria",
    currency: "BGN",
  },
  {
    code: "BH",
    name: "Bahrain",
    currency: "BHD",
  },
  {
    code: "BI",
    name: "Burundi",
    currency: "BIF",
  },
  {
    code: "BJ",
    name: "Benin",
    currency: "XOF",
  },
  {
    code: "BL",
    name: "Saint Barthélemy",
    currency: "EUR",
  },
  {
    code: "BM",
    name: "Bermuda",
    currency: "BMD",
  },
  {
    code: "BN",
    name: "Brunei",
    currency: "BND",
  },
  {
    code: "BO",
    name: "Bolivia",
    currency: "BOB",
  },
  {
    code: "BQ",
    name: "Bonaire",
    currency: "USD",
  },
  {
    code: "BR",
    name: "Brazil",
    currency: "BRL",
  },
  {
    code: "BS",
    name: "Bahamas",
    currency: "BSD",
  },
  {
    code: "BT",
    name: "Bhutan",
    currency: "BTN",
  },
  {
    code: "BV",
    name: "Bouvet Island",
    currency: "NOK",
  },
  {
    code: "BW",
    name: "Botswana",
    currency: "BWP",
  },
  {
    code: "BY",
    name: "Belarus",
    currency: "BYN",
  },
  {
    code: "BZ",
    name: "Belize",
    currency: "BZD",
  },
  {
    code: "CA",
    name: "Canada",
    currency: "CAD",
  },
  {
    code: "CC",
    name: "Cocos [Keeling] Islands",
    currency: "AUD",
  },
  {
    code: "CD",
    name: "Democratic Republic of the Congo",
    currency: "CDF",
  },
  {
    code: "CF",
    name: "Central African Republic",
    currency: "XAF",
  },
  {
    code: "CG",
    name: "Republic of the Congo",
    currency: "XAF",
  },
  {
    code: "CH",
    name: "Switzerland",
    currency: "CHF",
  },
  {
    code: "CI",
    name: "Ivory Coast",
    currency: "XOF",
  },
  {
    code: "CK",
    name: "Cook Islands",
    currency: "NZD",
  },
  {
    code: "CL",
    name: "Chile",
    currency: "CLP",
  },
  {
    code: "CM",
    name: "Cameroon",
    currency: "XAF",
  },
  {
    code: "CN",
    name: "China",
    currency: "CNY",
  },
  {
    code: "CO",
    name: "Colombia",
    currency: "COP",
  },
  {
    code: "CR",
    name: "Costa Rica",
    currency: "CRC",
  },
  {
    code: "CU",
    name: "Cuba",
    currency: "CUP",
  },
  {
    code: "CV",
    name: "Cape Verde",
    currency: "CVE",
  },
  {
    code: "CW",
    name: "Curacao",
    currency: "ANG",
  },
  {
    code: "CX",
    name: "Christmas Island",
    currency: "AUD",
  },
  {
    code: "CY",
    name: "Cyprus",
    currency: "EUR",
  },
  {
    code: "CZ",
    name: "Czechia",
    currency: "CZK",
  },
  {
    code: "DE",
    name: "Germany",
    currency: "EUR",
  },
  {
    code: "DJ",
    name: "Djibouti",
    currency: "DJF",
  },
  {
    code: "DK",
    name: "Denmark",
    currency: "DKK",
  },
  {
    code: "DM",
    name: "Dominica",
    currency: "XCD",
  },
  {
    code: "DO",
    name: "Dominican Republic",
    currency: "DOP",
  },
  {
    code: "DZ",
    name: "Algeria",
    currency: "DZD",
  },
  {
    code: "EC",
    name: "Ecuador",
    currency: "USD",
  },
  {
    code: "EE",
    name: "Estonia",
    currency: "EUR",
  },
  {
    code: "EG",
    name: "Egypt",
    currency: "EGP",
  },
  {
    code: "EH",
    name: "Western Sahara",
    currency: "MAD",
  },
  {
    code: "ER",
    name: "Eritrea",
    currency: "ERN",
  },
  {
    code: "ES",
    name: "Spain",
    currency: "EUR",
  },
  {
    code: "ET",
    name: "Ethiopia",
    currency: "ETB",
  },
  {
    code: "FI",
    name: "Finland",
    currency: "EUR",
  },
  {
    code: "FJ",
    name: "Fiji",
    currency: "FJD",
  },
  {
    code: "FK",
    name: "Falkland Islands",
    currency: "FKP",
  },
  {
    code: "FM",
    name: "Micronesia",
    currency: "USD",
  },
  {
    code: "FO",
    name: "Faroe Islands",
    currency: "DKK",
  },
  {
    code: "FR",
    name: "France",
    currency: "EUR",
  },
  {
    code: "GA",
    name: "Gabon",
    currency: "XAF",
  },
  {
    code: "GB",
    name: "United Kingdom",
    currency: "GBP",
  },
  {
    code: "GD",
    name: "Grenada",
    currency: "XCD",
  },
  {
    code: "GE",
    name: "Georgia",
    currency: "GEL",
  },
  {
    code: "GF",
    name: "French Guiana",
    currency: "EUR",
  },
  {
    code: "GG",
    name: "Guernsey",
    currency: "GBP",
  },
  {
    code: "GH",
    name: "Ghana",
    currency: "GHS",
  },
  {
    code: "GI",
    name: "Gibraltar",
    currency: "GIP",
  },
  {
    code: "GL",
    name: "Greenland",
    currency: "DKK",
  },
  {
    code: "GM",
    name: "Gambia",
    currency: "GMD",
  },
  {
    code: "GN",
    name: "Guinea",
    currency: "GNF",
  },
  {
    code: "GP",
    name: "Guadeloupe",
    currency: "EUR",
  },
  {
    code: "GQ",
    name: "Equatorial Guinea",
    currency: "XAF",
  },
  {
    code: "GR",
    name: "Greece",
    currency: "EUR",
  },
  {
    code: "GS",
    name: "South Georgia and the South Sandwich Islands",
    currency: "GBP",
  },
  {
    code: "GT",
    name: "Guatemala",
    currency: "GTQ",
  },
  {
    code: "GU",
    name: "Guam",
    currency: "USD",
  },
  {
    code: "GW",
    name: "Guinea-Bissau",
    currency: "XOF",
  },
  {
    code: "GY",
    name: "Guyana",
    currency: "GYD",
  },
  {
    code: "HK",
    name: "Hong Kong",
    currency: "HKD",
  },
  {
    code: "HM",
    name: "Heard Island and McDonald Islands",
    currency: "AUD",
  },
  {
    code: "HN",
    name: "Honduras",
    currency: "HNL",
  },
  {
    code: "HR",
    name: "Croatia",
    currency: "HRK",
  },
  {
    code: "HT",
    name: "Haiti",
    currency: "HTG",
  },
  {
    code: "HU",
    name: "Hungary",
    currency: "HUF",
  },
  {
    code: "ID",
    name: "Indonesia",
    currency: "IDR",
  },
  {
    code: "IE",
    name: "Ireland",
    currency: "EUR",
  },
  {
    code: "IL",
    name: "Israel",
    currency: "ILS",
  },
  {
    code: "IM",
    name: "Isle of Man",
    currency: "GBP",
  },
  {
    code: "IN",
    name: "India",
    currency: "INR",
  },
  {
    code: "IO",
    name: "British Indian Ocean Territory",
    currency: "USD",
  },
  {
    code: "IQ",
    name: "Iraq",
    currency: "IQD",
  },
  {
    code: "IR",
    name: "Iran",
    currency: "IRR",
  },
  {
    code: "IS",
    name: "Iceland",
    currency: "ISK",
  },
  {
    code: "IT",
    name: "Italy",
    currency: "EUR",
  },
  {
    code: "JE",
    name: "Jersey",
    currency: "GBP",
  },
  {
    code: "JM",
    name: "Jamaica",
    currency: "JMD",
  },
  {
    code: "JO",
    name: "Jordan",
    currency: "JOD",
  },
  {
    code: "JP",
    name: "Japan",
    currency: "JPY",
  },
  {
    code: "KE",
    name: "Kenya",
    currency: "KES",
  },
  {
    code: "KG",
    name: "Kyrgyzstan",
    currency: "KGS",
  },
  {
    code: "KH",
    name: "Cambodia",
    currency: "KHR",
  },
  {
    code: "KI",
    name: "Kiribati",
    currency: "AUD",
  },
  {
    code: "KM",
    name: "Comoros",
    currency: "KMF",
  },
  {
    code: "KN",
    name: "Saint Kitts and Nevis",
    currency: "XCD",
  },
  {
    code: "KP",
    name: "North Korea",
    currency: "KPW",
  },
  {
    code: "KR",
    name: "South Korea",
    currency: "KRW",
  },
  {
    code: "KW",
    name: "Kuwait",
    currency: "KWD",
  },
  {
    code: "KY",
    name: "Cayman Islands",
    currency: "KYD",
  },
  {
    code: "KZ",
    name: "Kazakhstan",
    currency: "KZT",
  },
  {
    code: "LA",
    name: "Laos",
    currency: "LAK",
  },
  {
    code: "LB",
    name: "Lebanon",
    currency: "LBP",
  },
  {
    code: "LC",
    name: "Saint Lucia",
    currency: "XCD",
  },
  {
    code: "LI",
    name: "Liechtenstein",
    currency: "CHF",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    currency: "LKR",
  },
  {
    code: "LR",
    name: "Liberia",
    currency: "LRD",
  },
  {
    code: "LS",
    name: "Lesotho",
    currency: "LSL",
  },
  {
    code: "LT",
    name: "Lithuania",
    currency: "EUR",
  },
  {
    code: "LU",
    name: "Luxembourg",
    currency: "EUR",
  },
  {
    code: "LV",
    name: "Latvia",
    currency: "EUR",
  },
  {
    code: "LY",
    name: "Libya",
    currency: "LYD",
  },
  {
    code: "MA",
    name: "Morocco",
    currency: "MAD",
  },
  {
    code: "MC",
    name: "Monaco",
    currency: "EUR",
  },
  {
    code: "MD",
    name: "Moldova",
    currency: "MDL",
  },
  {
    code: "ME",
    name: "Montenegro",
    currency: "EUR",
  },
  {
    code: "MF",
    name: "Saint Martin",
    currency: "EUR",
  },
  {
    code: "MG",
    name: "Madagascar",
    currency: "MGA",
  },
  {
    code: "MH",
    name: "Marshall Islands",
    currency: "USD",
  },
  {
    code: "MK",
    name: "Macedonia",
    currency: "MKD",
  },
  {
    code: "ML",
    name: "Mali",
    currency: "XOF",
  },
  {
    code: "MM",
    name: "Myanmar [Burma]",
    currency: "MMK",
  },
  {
    code: "MN",
    name: "Mongolia",
    currency: "MNT",
  },
  {
    code: "MO",
    name: "Macao",
    currency: "MOP",
  },
  {
    code: "MP",
    name: "Northern Mariana Islands",
    currency: "USD",
  },
  {
    code: "MQ",
    name: "Martinique",
    currency: "EUR",
  },
  {
    code: "MR",
    name: "Mauritania",
    currency: "MRO",
  },
  {
    code: "MS",
    name: "Montserrat",
    currency: "XCD",
  },
  {
    code: "MT",
    name: "Malta",
    currency: "EUR",
  },
  {
    code: "MU",
    name: "Mauritius",
    currency: "MUR",
  },
  {
    code: "MV",
    name: "Maldives",
    currency: "MVR",
  },
  {
    code: "MW",
    name: "Malawi",
    currency: "MWK",
  },
  {
    code: "MX",
    name: "Mexico",
    currency: "MXN",
  },
  {
    code: "MY",
    name: "Malaysia",
    currency: "MYR",
  },
  {
    code: "MZ",
    name: "Mozambique",
    currency: "MZN",
  },
  {
    code: "NA",
    name: "Namibia",
    currency: "NAD",
  },
  {
    code: "NC",
    name: "New Caledonia",
    currency: "XPF",
  },
  {
    code: "NE",
    name: "Niger",
    currency: "XOF",
  },
  {
    code: "NF",
    name: "Norfolk Island",
    currency: "AUD",
  },
  {
    code: "NG",
    name: "Nigeria",
    currency: "NGN",
  },
  {
    code: "NI",
    name: "Nicaragua",
    currency: "NIO",
  },
  {
    code: "NL",
    name: "Netherlands",
    currency: "EUR",
  },
  {
    code: "NO",
    name: "Norway",
    currency: "NOK",
  },
  {
    code: "NP",
    name: "Nepal",
    currency: "NPR",
  },
  {
    code: "NR",
    name: "Nauru",
    currency: "AUD",
  },
  {
    code: "NU",
    name: "Niue",
    currency: "NZD",
  },
  {
    code: "NZ",
    name: "New Zealand",
    currency: "NZD",
  },
  {
    code: "OM",
    name: "Oman",
    currency: "OMR",
  },
  {
    code: "PA",
    name: "Panama",
    currency: "PAB",
  },
  {
    code: "PE",
    name: "Peru",
    currency: "PEN",
  },
  {
    code: "PF",
    name: "French Polynesia",
    currency: "XPF",
  },
  {
    code: "PG",
    name: "Papua New Guinea",
    currency: "PGK",
  },
  {
    code: "PH",
    name: "Philippines",
    currency: "PHP",
  },
  {
    code: "PK",
    name: "Pakistan",
    currency: "PKR",
  },
  {
    code: "PL",
    name: "Poland",
    currency: "PLN",
  },
  {
    code: "PM",
    name: "Saint Pierre and Miquelon",
    currency: "EUR",
  },
  {
    code: "PN",
    name: "Pitcairn Islands",
    currency: "NZD",
  },
  {
    code: "PR",
    name: "Puerto Rico",
    currency: "USD",
  },
  {
    code: "PS",
    name: "Palestine",
    currency: "ILS",
  },
  {
    code: "PT",
    name: "Portugal",
    currency: "EUR",
  },
  {
    code: "PW",
    name: "Palau",
    currency: "USD",
  },
  {
    code: "PY",
    name: "Paraguay",
    currency: "PYG",
  },
  {
    code: "QA",
    name: "Qatar",
    currency: "QAR",
  },
  {
    code: "RE",
    name: "Réunion",
    currency: "EUR",
  },
  {
    code: "RO",
    name: "Romania",
    currency: "RON",
  },
  {
    code: "RS",
    name: "Serbia",
    currency: "RSD",
  },
  {
    code: "RU",
    name: "Russia",
    currency: "RUB",
  },
  {
    code: "RW",
    name: "Rwanda",
    currency: "RWF",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    currency: "SAR",
  },
  {
    code: "SB",
    name: "Solomon Islands",
    currency: "SBD",
  },
  {
    code: "SC",
    name: "Seychelles",
    currency: "SCR",
  },
  {
    code: "SD",
    name: "Sudan",
    currency: "SDG",
  },
  {
    code: "SE",
    name: "Sweden",
    currency: "SEK",
  },
  {
    code: "SG",
    name: "Singapore",
    currency: "SGD",
  },
  {
    code: "SH",
    name: "Saint Helena",
    currency: "SHP",
  },
  {
    code: "SI",
    name: "Slovenia",
    currency: "EUR",
  },
  {
    code: "SJ",
    name: "Svalbard and Jan Mayen",
    currency: "NOK",
  },
  {
    code: "SK",
    name: "Slovakia",
    currency: "EUR",
  },
  {
    code: "SL",
    name: "Sierra Leone",
    currency: "SLL",
  },
  {
    code: "SM",
    name: "San Marino",
    currency: "EUR",
  },
  {
    code: "SN",
    name: "Senegal",
    currency: "XOF",
  },
  {
    code: "SO",
    name: "Somalia",
    currency: "SOS",
  },
  {
    code: "SR",
    name: "Suriname",
    currency: "SRD",
  },
  {
    code: "SS",
    name: "South Sudan",
    currency: "SSP",
  },
  {
    code: "ST",
    name: "São Tomé and Príncipe",
    currency: "STD",
  },
  {
    code: "SV",
    name: "El Salvador",
    currency: "USD",
  },
  {
    code: "SX",
    name: "Sint Maarten",
    currency: "ANG",
  },
  {
    code: "SY",
    name: "Syria",
    currency: "SYP",
  },
  {
    code: "SZ",
    name: "Swaziland",
    currency: "SZL",
  },
  {
    code: "TC",
    name: "Turks and Caicos Islands",
    currency: "USD",
  },
  {
    code: "TD",
    name: "Chad",
    currency: "XAF",
  },
  {
    code: "TF",
    name: "French Southern Territories",
    currency: "EUR",
  },
  {
    code: "TG",
    name: "Togo",
    currency: "XOF",
  },
  {
    code: "TH",
    name: "Thailand",
    currency: "THB",
  },
  {
    code: "TJ",
    name: "Tajikistan",
    currency: "TJS",
  },
  {
    code: "TK",
    name: "Tokelau",
    currency: "NZD",
  },
  {
    code: "TL",
    name: "East Timor",
    currency: "USD",
  },
  {
    code: "TM",
    name: "Turkmenistan",
    currency: "TMT",
  },
  {
    code: "TN",
    name: "Tunisia",
    currency: "TND",
  },
  {
    code: "TO",
    name: "Tonga",
    currency: "TOP",
  },
  {
    code: "TR",
    name: "Turkey",
    currency: "TRY",
  },
  {
    code: "TT",
    name: "Trinidad and Tobago",
    currency: "TTD",
  },
  {
    code: "TV",
    name: "Tuvalu",
    currency: "AUD",
  },
  {
    code: "TW",
    name: "Taiwan",
    currency: "TWD",
  },
  {
    code: "TZ",
    name: "Tanzania",
    currency: "TZS",
  },
  {
    code: "UA",
    name: "Ukraine",
    currency: "UAH",
  },
  {
    code: "UG",
    name: "Uganda",
    currency: "UGX",
  },
  {
    code: "UM",
    name: "U.S. Minor Outlying Islands",
    currency: "USD",
  },
  {
    code: "US",
    name: "United States",
    currency: "USD",
  },
  {
    code: "UY",
    name: "Uruguay",
    currency: "UYU",
  },
  {
    code: "UZ",
    name: "Uzbekistan",
    currency: "UZS",
  },
  {
    code: "VA",
    name: "Vatican City",
    currency: "EUR",
  },
  {
    code: "VC",
    name: "Saint Vincent and the Grenadines",
    currency: "XCD",
  },
  {
    code: "VE",
    name: "Venezuela",
    currency: "VEF",
  },
  {
    code: "VG",
    name: "British Virgin Islands",
    currency: "USD",
  },
  {
    code: "VI",
    name: "U.S. Virgin Islands",
    currency: "USD",
  },
  {
    code: "VN",
    name: "Vietnam",
    currency: "VND",
  },
  {
    code: "VU",
    name: "Vanuatu",
    currency: "VUV",
  },
  {
    code: "WF",
    name: "Wallis and Futuna",
    currency: "XPF",
  },
  {
    code: "WS",
    name: "Samoa",
    currency: "WST",
  },
  {
    code: "XK",
    name: "Kosovo",
    currency: "EUR",
  },
  {
    code: "YE",
    name: "Yemen",
    currency: "YER",
  },
  {
    code: "YT",
    name: "Mayotte",
    currency: "EUR",
  },
  {
    code: "ZA",
    name: "South Africa",
    currency: "ZAR",
  },
  {
    code: "ZM",
    name: "Zambia",
    currency: "ZMW",
  },
  {
    code: "ZW",
    name: "Zimbabwe",
    currency: "ZWL",
  },
];

export const getCountries = () => {
  return countries
    .map((c) => ({
      ...c,
      name: t(c.code),
    }))
    .sort((c1: ICountry, c2: ICountry) => {
      return c1.name.localeCompare(c2.name);
    });
};

export const getCountry = (code: string) => {
  return countries.find((c) => c.code === code);
};

export const getCurrencyByCountry = (countryCode: string) => {
  const country = getCountry(countryCode);

  if (country) {
    return getCurrency(country.currency);
  }
};
