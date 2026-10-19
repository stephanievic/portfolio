import { useEffect, useState } from 'react'

interface Target {
  id: string
  node: Element
}

/**
 * Devolve o id da seção que cruza a faixa de leitura (perto do topo da janela).
 * Cada id pode apontar para a própria seção ou para um título dentro dela.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join('|')

  useEffect(() => {
    const targets: Target[] = []
    for (const id of key.split('|')) {
      const el = document.getElementById(id)
      if (el) targets.push({ id, node: el.closest('section') ?? el })
    }
    if (targets.length === 0) return

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        const first = targets.find((t) => visible.has(t.node))
        if (first) setActive(first.id)
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    targets.forEach((t) => observer.observe(t.node))
    return () => observer.disconnect()
  }, [key])

  return active
}
