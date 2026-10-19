import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Rola ao topo a cada página nova e até a âncora quando a URL traz um hash. */
export function useScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash.slice(1)
    const frame = requestAnimationFrame(() => {
      const target = id ? document.getElementById(id) : null
      if (target) {
        target.scrollIntoView()
        if (target.tabIndex === -1) target.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
}
