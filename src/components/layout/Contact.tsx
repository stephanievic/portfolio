import { useEffect, useRef, useState } from 'react'
import { links } from '../../content/site'
import { T, useLang } from '../../i18n'
import { LinkedInIcon, MailIcon } from '../ui/icons'

function CopyEmailButton() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      const area = document.createElement('textarea')
      area.value = links.email
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      area.remove()
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2400)
  }

  return (
    <>
      <button
        type="button"
        className="ghost-night min-h-8 cursor-pointer rounded-control border border-line-night bg-transparent px-4 text-[13px] leading-4 font-medium text-on-night-muted"
        onClick={copy}
      >
        {t(copied ? 'Copiado ✓' : 'Copiar')}
      </button>
      <span role="status" className="sr-only-note">
        {copied ? t('E-mail copiado.') : ''}
      </span>
    </>
  )
}

/** Bloco escuro de contato: o único fundo escuro da página. */
export function Contact({ lead }: { lead?: string }) {
  return (
    <section
      id="contato"
      className="night reveal relative z-[1] mx-auto mb-[clamp(32px,3.34vw,48px)] w-[calc(100%-2*clamp(20px,3.34vw,48px))] max-w-[1248px] overflow-hidden rounded-3xl bg-night text-on-night"
      aria-labelledby="contato-title"
    >
      <div className="p-[clamp(40px,5vw,72px)]">
        <div className="flex flex-col gap-8">
          <h2
            id="contato-title"
            className="t-title-1 m-0 text-center font-bold text-on-night"
          >
            <T>Vamos conversar?</T>
          </h2>
          <p className="mx-auto max-w-[66ch] text-center text-[17px] leading-[1.65] text-pretty text-on-night">
            <T>
              {lead ??
                'Se você gostou do meu trabalho e acredita que podemos criar algo juntos, fico à disposição para conversarmos sobre novas oportunidades, projetos e parcerias.'}
            </T>
          </p>
          <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener"
              className="contact-card flex min-h-16 items-center gap-4 rounded-card border border-line-night bg-paper/[0.03] px-6 py-3 text-on-night no-underline"
            >
              <span className="text-clay-light">
                <LinkedInIcon />
              </span>
              <span className="text-base leading-6 font-semibold">
                <T>Meu LinkedIn</T>
              </span>
              <span aria-hidden="true" className="ml-auto text-clay-light">
                ↗
              </span>
              <span className="sr-only-note">
                <T>(abre em nova aba)</T>
              </span>
            </a>
            <div className="contact-card relative flex min-h-16 flex-wrap items-center gap-4 rounded-card border border-line-night bg-paper/[0.03] px-6 py-3">
              <span className="text-clay-light">
                <MailIcon />
              </span>
              <p className="m-0 min-w-0 flex-[1_1_200px] text-base leading-6 [overflow-wrap:anywhere] text-on-night">
                <strong className="font-semibold">
                  <T>E-mail:</T>
                </strong>{' '}
                <a href={`mailto:${links.email}`} className="text-on-night">
                  {links.email}
                </a>
              </p>
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
