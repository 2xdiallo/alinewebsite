import { create } from "zustand";
import { copy, type Lang } from "./copy";

type LangStore = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangStore>((set) => ({
  lang: "fr",
  setLang: (lang) => set({ lang }),
}));

export function useCopy() {
  const lang = useLang((s) => s.lang);
  return copy[lang];
}
