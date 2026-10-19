import { Link, useLocation } from 'react-router-dom'
import { links } from '../../content/site'
import { T, useLang } from '../../i18n'
import { ExternalLink } from '../ui/Links'

const linkClass = 'plain inline-flex min-h-8 items-center text-graphite'

export function Footer() {
  const { pathname } = useLocation()
  const { t } = useLang()
  const isHome = pathname === '/'
  const hrefFor = (id: string) =>
    isHome || id === 'contato' ? { pathname, hash: `#${id}` } : { pathname: '/', hash: `#${id}` }

  return (
    <footer className="relative z-[1]">
      <div className="container-x">
        <div className="flex flex-wrap items-start justify-between gap-x-12 gap-y-8 border-t border-line pt-10 pb-8">
          <div className="min-w-0 flex-[1_1_260px]">
            <p className="m-0 font-display text-[30px] leading-9 font-semibold tracking-[-0.01em] text-heading">
              Stephanie Victoria
            </p>
            <p className="mt-2 mb-0 text-sm leading-5 text-graphite-muted">
              <T>UX/UI & Product Designer</T>
            </p>
          </div>

          <nav aria-label={t('Rodapé')} className="flex-[0_1_160px]">
            <p className="t-label mb-2 text-espresso">
              <T>Navegação</T>
            </p>
            <ul className="m-0 flex list-none flex-col items-start p-0 text-sm leading-5">
              {(['projetos', 'sobre', 'abordagem', 'contato'] as const).map((id) => (
                <li key={id}>
                  <Link to={hrefFor(id)} className={linkClass}>
                    <T>{id.charAt(0).toUpperCase() + id.slice(1)}</T>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-[0_1_auto]">
            <p className="t-label mb-2 text-espresso">
              <T>Contato</T>
            </p>
            <ul className="m-0 flex list-none flex-col items-start p-0 text-sm leading-5">
              <li>
                <a href={`mailto:${links.email}`} className={linkClass}>
                  <T>E-mail</T>
                </a>
              </li>
              <li>
                <ExternalLink href={links.linkedin} className={`${linkClass} gap-1`}>
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={links.behance} className={`${linkClass} gap-1`}>
                  Behance
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={links.curriculo} className={`${linkClass} gap-1`}>
                  <T>Currículo</T>
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="t-caption flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 pb-6 text-graphite-muted">
          <p className="m-0">© 2026 Stephanie Victoria</p>
          <Link
            to={{ pathname, hash: '#topo' }}
            className="plain inline-flex min-h-11 items-center gap-1.5 text-graphite-muted"
          >
            <T>Voltar ao topo</T> <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
