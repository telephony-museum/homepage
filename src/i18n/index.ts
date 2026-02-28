import type { Translation } from "./types";
import { en } from "./en";
import { lt } from "./lt";
import { lv } from "./lv";
import { pl } from "./pl";
import { ru } from "./ru";
import { de } from "./de";
import { et } from "./et";
import { es } from "./es";
import { uk } from "./uk";

export type { Translation };

export const defaultLang = "en";

export const languages: Record<string, Translation> = {
  en,
  lt,
  lv,
  pl,
  ru,
  de,
  et,
  es,
  uk,
};

export const langCodes = Object.keys(languages);

export function getTranslation(lang: string): Translation {
  return languages[lang] ?? languages[defaultLang];
}

export function getLangPrefix(lang: string): string {
  return lang === defaultLang ? "" : `/${lang}`;
}

export function getAlternateLinks(pagePath: string) {
  return langCodes.map((code) => {
    const prefix = code === defaultLang ? "" : `/${code}`;
    const suffix = pagePath ? `/${pagePath}` : "/";
    return { lang: code, href: `${prefix}${suffix}` };
  });
}
