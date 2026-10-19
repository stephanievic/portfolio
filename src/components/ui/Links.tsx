import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { T } from '../../i18n'

/** Link externo que abre em nova aba e avisa leitores de tela. */
export function ExternalLink({
  href,
  className,
  children,
  arrow = '↗',
  arrowClass = 'arrow arrow-up',
}: {
  href: string
  className?: string
  children: ReactNode
  arrow?: string | null
  arrowClass?: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener" className={className}>
      {children}
      {arrow && (
        <>
          {' '}
          <span className={arrowClass} aria-hidden="true">
            {arrow}
          </span>
        </>
      )}
      <span className="sr-only-note">
        <T>(abre em nova aba)</T>
      </span>
    </a>
  )
}

export function BackToProjects({ className = '' }: { className?: string }) {
  return (
    <Link
      to={{ pathname: '/', hash: '#projetos' }}
      className={`plain inline-flex min-h-11 items-center gap-2 text-[15px] leading-5 font-medium ${className}`}
    >
      <span className="arrow arrow-back" aria-hidden="true">
        ←
      </span>{' '}
      <T>Todos os projetos</T>
    </Link>
  )
}
