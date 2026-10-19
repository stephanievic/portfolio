import { useLang } from './useLang'

/** Texto traduzível. Escreva o trecho em português; o inglês vem de `en.json`. */
export function T({ children }: { children: string }) {
  const { t } = useLang()
  return <>{t(children)}</>
}
