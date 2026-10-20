import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { T, useLang } from '../../i18n'
import { CloseIcon } from '../ui/icons'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Janela de diálogo acessível: foco preso, Esc fecha e o foco volta ao botão de origem. */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  const { t } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const nodes = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (nodes.length === 0) return
      const first = nodes[0]
      const lastNode = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        lastNode.focus()
      } else if (!e.shiftKey && document.activeElement === lastNode) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  // Portal no body: o diálogo fica acima da navegação flutuante, que vive em outro contexto de empilhamento.
  return createPortal(
    <div
      className="fixed inset-0 z-[2147483000] flex items-center justify-center bg-espresso/55 p-4 backdrop-blur-[2px] sm:p-8"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="flex max-h-full w-full max-w-[1100px] flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-float"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
          <h2 id="modal-title" className="m-0 font-display text-[clamp(20px,2vw,26px)] leading-tight font-bold text-heading">
            <T>{title}</T>
          </h2>
          <button ref={closeRef} type="button" className="icon-btn flex-none" onClick={onClose} aria-label={t('Fechar')}>
            <CloseIcon />
          </button>
        </div>
        <div tabIndex={0} aria-label={t('Conteúdo rolável')} className="flex flex-col gap-8 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}
