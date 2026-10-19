import { useLang } from '../../i18n'

/** Faixa em loop. A lista é repetida só visualmente (a cópia fica oculta para leitores de tela). */
export function Marquee({
  items,
  label,
  className,
}: {
  items: string[]
  label: string
  className: string
}) {
  const { t } = useLang()
  const list = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="t-label m-0 flex list-none items-center p-0 font-medium whitespace-nowrap text-paper"
    >
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-6 pr-6">
          {t(item)}
          <span aria-hidden="true" className="text-sm leading-4 text-clay-light">
            ✱
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div role="region" aria-label={t(label)} className={`marquee ${className}`}>
      <div className="marquee-track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  )
}
