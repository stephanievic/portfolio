import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { T, useLang } from '../../i18n'
import { useActiveSection } from '../../hooks/useActiveSection'
import { HeroGlow } from '../ui/Glow'
import { BackToProjects } from '../ui/Links'

const eyebrow = 't-label m-0 text-clay-label'

/** Abertura do estudo de caso: título, resumo, ficha do projeto e imagem principal. */
export function CaseHero({
  kind,
  name,
  title,
  lead,
  meta,
  image,
  alt,
}: {
  kind: string
  name: string
  title: string
  lead: string
  meta: { label: string; value: ReactNode }[]
  image: string
  alt: string
}) {
  const { t } = useLang()
  return (
    <section
      aria-labelledby="case-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f9f4f3_0%,#f7efed_55%,#f9f4f3_100%)] pt-[clamp(112px,8.9vw,128px)] pb-[clamp(48px,4.45vw,64px)]"
    >
      <HeroGlow compact />
      <div className="container-x">
        <BackToProjects />
        <p className={`${eyebrow} mt-8`}>
          <T>{kind}</T>
        </p>
        <h1 id="case-title" className="t-display mt-4 mb-0 max-w-[17em] text-heading">
          <span className="text-clay">
            <T>{`${name}:`}</T>
          </span>{' '}
          <T>{title}</T>
        </h1>
        <p className="t-lead mt-6 mb-0 max-w-[40em] text-graphite">
          <T>{lead}</T>
        </p>
        <dl className="reveal mt-10 mb-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-6 rounded-card border border-card-line bg-card p-8">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="t-label text-clay">
                <T>{m.label}</T>
              </dt>
              <dd className="t-body-s m-0 mt-2 text-graphite">{m.value}</dd>
            </div>
          ))}
        </dl>
        <figure className="reveal m-0 mt-8">
          <img
            src={image}
            alt={t(alt)}
            width={2400}
            height={960}
            className="block aspect-[5/2] h-auto w-full rounded-card border border-card-line bg-[#e9e2de] object-cover"
          />
        </figure>
      </div>
    </section>
  )
}

/** Seção de estudo de caso: título à esquerda, conteúdo à direita. */
export function CaseSection({
  id,
  num,
  title,
  children,
  wide,
  aside,
}: {
  id: string
  num?: string
  title: string
  children: ReactNode
  /** Conteúdo em largura total, abaixo do bloco título + texto. */
  wide?: ReactNode
  /** Texto curto sob o título, na coluna da esquerda. */
  aside?: ReactNode
}) {
  return (
    <section aria-labelledby={id}>
      <div className="container-x">
        <div className="border-t border-line py-12">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="min-w-60 flex-[0_1_300px]">
              {num && (
                <p className="m-0 mb-3 font-display text-[19px] leading-[26px] font-semibold text-clay tabular-nums">
                  {num}
                </p>
              )}
              <h2 id={id} className="reveal t-title-1 m-0 font-bold text-heading">
                <T>{title}</T>
              </h2>
              {aside}
            </div>
            <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-6">{children}</div>
          </div>
          {wide}
        </div>
      </div>
    </section>
  )
}

export function H3({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`mt-8 mb-0 font-display text-[23px] leading-[30px] font-bold tracking-[-0.01em] text-heading ${className}`}>
      {children}
    </h3>
  )
}

export function P({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 max-w-[66ch] text-graphite ${className}`}>{children}</p>
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-clay">{children}</strong>
}

/** Bloco de destaque em fundo de cartão. */
export function Highlight({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="reveal mt-4 rounded-card border border-card-line bg-card p-8">
      <p className="t-label m-0 text-clay">
        <T>{label}</T>
      </p>
      <p className="mt-3 mb-0 max-w-[32em] font-display text-[clamp(21px,1.8vw,26px)] leading-[1.35] font-semibold tracking-[-0.01em] text-heading">
        {children}
      </p>
    </div>
  )
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <li className="rounded-card border border-card-line bg-card p-6">
      <p className="m-0 font-display text-[clamp(40px,3.9vw,56px)] leading-none font-bold tracking-[-0.03em] text-clay tabular-nums">
        {value}
      </p>
      <p className="t-body-s m-0 mt-3 text-graphite-muted">
        <T>{label}</T>
      </p>
    </li>
  )
}

/** Cartão informativo com título e lista de marcadores. */
export function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="reveal rounded-card border border-card-line bg-card p-8">
      <h3 className="m-0 font-display text-[19px] leading-[26px] font-bold text-clay">
        <T>{title}</T>
      </h3>
      <ul className="t-body-s m-0 mt-3 flex list-disc flex-col gap-2 pl-5 text-graphite">
        {items.map((item) => (
          <li key={item}>
            <T>{item}</T>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Faixa de destaque com ✱ (aprendizado central, equipe, etc.). */
export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="reveal mt-4 flex items-start gap-4 rounded-card bg-clay-soft p-8">
      <span aria-hidden="true" className="text-[21px] leading-7 text-clay">
        ✱
      </span>
      <div>
        <h3 className="t-title-3 m-0 font-bold text-heading">
          <T>{title}</T>
        </h3>
        <p className="t-body mt-2 mb-0 max-w-[60ch] text-graphite">{children}</p>
      </div>
    </div>
  )
}

/** Imagem com legenda, com rolagem horizontal no celular. */
export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  background = '#fafafa',
  fit = 'contain',
}: {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  background?: string
  fit?: 'contain' | 'cover'
}) {
  const { t } = useLang()
  return (
    <figure className="reveal m-0 mt-2">
      <div className="wide-scroll" tabIndex={0} role="group" aria-label={t('Fluxograma com rolagem horizontal')}>
        <img
          src={src}
          alt={t(alt)}
          width={width}
          height={height}
          loading="lazy"
          style={{ aspectRatio: `${width} / ${height}`, background, objectFit: fit }}
          className="block h-auto w-full rounded-card border border-card-line"
        />
      </div>
      <p className="sol-hint" aria-hidden="true">
        <T>Deslize para ver todas as telas →</T>
      </p>
      {caption && (
        <figcaption className="t-caption mt-3 text-graphite-muted">
          <T>{caption}</T>
        </figcaption>
      )}
    </figure>
  )
}

/** Índice lateral fixo com a seção ativa. */
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  const { t } = useLang()
  const active = useActiveSection(items.map((i) => i.id))
  return (
    <nav className="toc" aria-label={t('Nesta página')}>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={`toc-link ${active === item.id ? 'is-active' : ''}`}>
              <span className="toc-label">
                <T>{item.label}</T>
              </span>
              <span className="toc-bar" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Navegação ao fim do estudo de caso: projeto anterior e próximo. */
export function CaseNav({
  prev,
  next,
}: {
  prev?: { to: string; label: string }
  next: { to: string; label: string }
}) {
  const { t } = useLang()
  return (
    <nav aria-label={t('Navegação entre estudos de caso')}>
      <div className="container-x pb-[clamp(40px,3.34vw,48px)]">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-8 border-t border-line pt-8">
          {prev ? (
            <div className="flex flex-col items-start gap-2">
              <p className="t-label m-0 text-clay">
                <T>Projeto anterior</T>
              </p>
              <Link to={prev.to} className="next-link t-title-2 font-semibold">
                <span className="arrow arrow-back" aria-hidden="true">
                  ←
                </span>{' '}
                {prev.label}
              </Link>
            </div>
          ) : (
            <BackToProjects />
          )}
          <div className="ml-auto flex flex-col items-end gap-2 text-right">
            <p className="t-label m-0 text-clay">
              <T>Próximo projeto</T>
            </p>
            <Link to={next.to} className="next-link t-title-2 font-semibold">
              {next.label}{' '}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

/** Lista de etiquetas arredondadas. */
export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="reveal m-0 flex list-none flex-wrap gap-2 p-0">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-card-line bg-card px-3.5 py-1.5 text-sm leading-5 font-medium text-heading"
        >
          <T>{item}</T>
        </li>
      ))}
    </ul>
  )
}

/** Lista numerada com fios entre os itens (01, 02, 03…). */
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {items.map((item, i) => (
        <li key={item} className="reveal flex items-baseline gap-6 border-t border-line py-4">
          <span
            aria-hidden="true"
            className="flex-[0_0_40px] font-display text-[19px] leading-[26px] font-bold text-clay tabular-nums"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="m-0 max-w-[60ch] text-base leading-[26px] text-graphite">
            <T>{item}</T>
          </p>
        </li>
      ))}
    </ol>
  )
}

/** Cartão com título e parágrafos. */
export function CardBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="reveal mt-2 rounded-card border border-card-line bg-card p-8">
      <h3 className="m-0 font-display text-[19px] leading-[26px] font-bold text-clay">
        <T>{title}</T>
      </h3>
      <div className="t-body-s mt-3 flex max-w-[66ch] flex-col gap-4 text-graphite">{children}</div>
    </div>
  )
}
