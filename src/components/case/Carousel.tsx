import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { T, useLang } from '../../i18n'
import { ChevronLeft, ChevronRight } from '../ui/icons'

export interface SlideImage {
  src: string
  alt: string
  /** Rótulo do botão que alterna entre imagens do mesmo slide. */
  label?: string
}

export interface Slide {
  title: string
  text: string
  images: SlideImage[]
  /** Nome do grupo de botões, quando o slide tem mais de uma imagem. */
  groupLabel?: string
}

interface CarouselProps {
  label: string
  slides: Slide[]
  width: number
  height: number
  fit: 'cover' | 'contain'
  background: string
}

/** Carrossel de telas: um slide por vez, com setas, pontos e teclado. */
export function Carousel({ label, slides, width, height, fit, background }: CarouselProps) {
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  const [variants, setVariants] = useState<Record<number, number>>({})
  const rootRef = useRef<HTMLDivElement>(null)
  const uid = useId()
  const last = slides.length - 1

  const go = (next: number) => setIndex(Math.min(last, Math.max(0, next)))

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLButtonElement && e.target.dataset.pill) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      go(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      go(last)
    }
  }

  return (
    <div
      ref={rootRef}
      className="mt-10"
      role="group"
      aria-roledescription="carrossel"
      aria-label={t(label)}
      onKeyDown={onKeyDown}
    >
      <div className="overflow-hidden">
        <div
          className="m-0 flex list-none p-0 transition-transform duration-[460ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((slide, i) => {
            const active = i === index
            const variant = variants[i] ?? 0
            const image = slide.images[variant]
            return (
              <div
                key={slide.title}
                className="min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
                aria-label={t(`${i + 1} de ${slides.length}`)}
                aria-hidden={!active}
                inert={!active}
              >
                <div className="sol-grid">
                  <div>
                    <div
                      className="sol-media"
                      tabIndex={active ? 0 : -1}
                      role="group"
                      aria-label={t('Imagem com rolagem horizontal')}
                    >
                      <img
                        src={image.src}
                        alt={t(image.alt)}
                        width={width}
                        height={height}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        style={{ aspectRatio: `${width} / ${height}`, objectFit: fit, background }}
                        className="block h-auto w-full rounded-card"
                      />
                    </div>
                    <p className="sol-hint" aria-hidden="true">
                      <T>Deslize para ver todas as telas →</T>
                    </p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="m-0 font-display text-[clamp(22px,2vw,28px)] leading-[1.2] font-bold tracking-[-0.01em] text-heading">
                      <T>{slide.title}</T>
                    </h3>
                    <p className="t-body-s mt-3 mb-0 max-w-[46ch] text-graphite">
                      <T>{slide.text}</T>
                    </p>
                    {slide.images.length > 1 && (
                      <div
                        role="group"
                        aria-label={t(slide.groupLabel ?? 'Escolher tela')}
                        className="mt-5 flex flex-wrap gap-2"
                      >
                        {slide.images.map((img, v) => (
                          <button
                            key={`${uid}-${img.label}`}
                            type="button"
                            data-pill
                            className="flow-pill"
                            tabIndex={active ? 0 : -1}
                            aria-pressed={variant === v}
                            onClick={() => setVariants((prev) => ({ ...prev, [i]: v }))}
                          >
                            <T>{img.label ?? ''}</T>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="-ml-2 flex items-center" role="group" aria-label={t('Escolher tela')}>
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className="inline-flex h-11 cursor-pointer items-center border-0 bg-transparent px-2"
              aria-label={t(`Ir para: ${slide.title}`)}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            >
              <span
                className="block h-2 rounded-full transition-[width,background-color] duration-300"
                style={{
                  width: i === index ? 28 : 8,
                  background: i === index ? 'var(--color-clay)' : '#d6c6c0',
                }}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="min-w-12 text-right text-sm leading-5 font-medium text-graphite-muted tabular-nums"
          >
            {t(`${index + 1} de ${slides.length}`)}
          </span>
          <button
            type="button"
            className="icon-btn"
            aria-label={t('Tela anterior')}
            aria-disabled={index === 0}
            style={{ opacity: index === 0 ? 0.4 : 1 }}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label={t('Próxima tela')}
            aria-disabled={index === last}
            style={{ opacity: index === last ? 0.4 : 1 }}
            onClick={() => go(index + 1)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}
