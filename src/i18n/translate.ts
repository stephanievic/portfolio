import enDict from './en.json'

export type Lang = 'pt' | 'en'

export const STORAGE_KEY = 'sv-site-lang'
const DICT = enDict as Record<string, string>

// Índice sem diferença entre maiúsculas e minúsculas, para variações de caixa do mesmo texto.
const LOWER = new Map<string, [string, string]>()
for (const [pt, en] of Object.entries(DICT)) LOWER.set(pt.toLowerCase(), [pt, en])

const norm = (s: string) => s.replace(/\s+/g, ' ').trim()
const isUpper = (s: string) => s === s.toUpperCase() && s !== s.toLowerCase()
const warned = new Set<string>()

/** Traduz um trecho em português; devolve o próprio texto se não houver tradução. */
export function translate(text: string, lang: Lang): string {
  if (lang === 'pt') return text
  const key = norm(text)
  if (!key) return text

  const direct = DICT[key]
  if (direct !== undefined) return direct

  const hit = LOWER.get(key.toLowerCase())
  if (hit) {
    if (isUpper(key)) return hit[1].toUpperCase()
    if (/[A-ZÀ-Ý]/.test(key.charAt(0)) && !/[A-ZÀ-Ý]/.test(hit[0].charAt(0))) {
      return hit[1].charAt(0).toUpperCase() + hit[1].slice(1)
    }
    return hit[1]
  }

  const counter = /^(\d+) de (\d+)$/.exec(key)
  if (counter) return `${counter[1]} of ${counter[2]}`

  const goTo = /^Ir para: (.+)$/.exec(key)
  if (goTo) return `Go to: ${translate(goTo[1], lang)}`

  if (import.meta.env.DEV && /\p{L}{3,}/u.test(key) && !warned.has(key)) {
    warned.add(key)
    console.warn(`[i18n] sem tradução: "${key}"`)
  }
  return text
}

