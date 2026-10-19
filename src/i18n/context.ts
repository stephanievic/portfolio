import { createContext } from 'react'
import type { Lang } from './translate'

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: string) => string
}

export const LangContext = createContext<LangContextValue | null>(null)
