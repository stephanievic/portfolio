import { useContext, useEffect } from 'react'
import { LangContext, type LangContextValue } from './context'

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang deve ser usado dentro de <LangProvider>')
  return ctx
}

/** Atualiza `document.title`; "Estudo de caso" vira "Case study" em inglês. */
export function usePageTitle(title: string) {
  const { lang } = useLang()
  useEffect(() => {
    document.title = lang === 'en' ? title.replace('Estudo de caso', 'Case study') : title
  }, [title, lang])
}
