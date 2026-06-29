"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "vi" | "en";
interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: (vi: string, en: string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "vi",
  toggle: () => {},
  t: (vi) => vi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");
  const toggle = () => setLang((l) => (l === "vi" ? "en" : "vi"));
  const t = (vi: string, en: string) => (lang === "vi" ? vi : en);
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
