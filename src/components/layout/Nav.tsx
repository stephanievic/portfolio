import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { T, useLang, type Lang } from '../../i18n'
import { useActiveSection } from '../../hooks/useActiveSection'
import { CloseIcon, MenuIcon } from '../ui/icons'

const items = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'abordagem', label: 'Abordagem' },
  { id: 'contato', label: 'Contato' },
] as const

const HOME_IDS = items.map((i) => i.id)
const CASE_IDS = ['contato']

export function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const activeId = useActiveSection(isHome ? HOME_IDS : CASE_IDS)

  // Em estudos de caso, "Projetos" continua marcado até o contato entrar na tela.
  const current = isHome ? activeId : activeId === 'contato' ? 'contato' : 'projetos'

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const hrefFor = (id: string) =>
    isHome || id === 'contato' ? { pathname, hash: `#${id}` } : { pathname: '/', hash: `#${id}` }

  const langButton = (value: Lang, label: string, full: string, htmlLang: string) => (
    <button
      type="button"
      className="lang-opt min-h-9 min-w-12 cursor-pointer rounded-full border-0 px-3 text-[13px] leading-4 font-semibold tracking-[0.04em]"
      style={{
        background: lang === value ? 'var(--color-clay)' : 'transparent',
        color: lang === value ? 'var(--color-on-clay)' : 'var(--color-graphite-muted)',
      }}
      aria-pressed={lang === value}
      lang={htmlLang}
      aria-label={`${label}, ${full}`}
      onClick={() => setLang(value)}
    >
      {label}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 h-0">
      <div className="flex justify-center px-[clamp(12px,3.34vw,48px)] pt-5">
        <nav
          className="fnav flex max-w-full items-center gap-2 rounded-full border border-line bg-paper p-1.5 shadow-float"
          aria-label={t('Principal')}
          data-open={open}
        >
          <span className="fnav-scrim" aria-hidden="true" onClick={() => setOpen(false)} />
          <Link
            to={isHome ? { pathname: '/', hash: '#topo' } : '/'}
            className="logo-pill inline-flex h-11 min-w-11 flex-none items-center justify-center rounded-full bg-clay px-4 text-xl leading-none font-semibold tracking-[-0.02em] text-on-clay no-underline hover:text-on-clay"
            aria-label={t('Stephanie Victoria, voltar ao início')}
          >
            <span aria-hidden="true">S</span>
            <span className="logo-rest text-on-clay" aria-hidden="true">
              tephanie Victoria
            </span>
          </Link>

          <button
            type="button"
            ref={toggleRef}
            className="fnav-toggle"
            aria-expanded={open}
            aria-controls="menu-links"
            onClick={() => setOpen((v) => !v)}
          >
            <span>
              <T>Menu</T>
            </span>
            <MenuIcon className="ico-open" />
            <CloseIcon className="ico-close" />
          </button>

          <ul
            id="menu-links"
            className="m-0 flex list-none flex-nowrap gap-0.5 overflow-x-auto px-1 text-[15px] leading-5 font-medium whitespace-nowrap [scrollbar-width:none]"
          >
            {items.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={hrefFor(id)}
                  className="fnav-link"
                  aria-current={current === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <T>{label}</T>
                </Link>
              </li>
            ))}
          </ul>

          <div
            role="group"
            aria-label={t('Idioma do site')}
            className="inline-flex flex-none items-center gap-1 rounded-full bg-clay-soft p-1"
          >
            {langButton('pt', 'PT', 'Português', 'pt-BR')}
            {langButton('en', 'EN', 'English', 'en')}
          </div>
        </nav>
      </div>
    </header>
  )
}
