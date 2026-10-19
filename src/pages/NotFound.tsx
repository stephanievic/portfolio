import { Link } from 'react-router-dom'
import { usePageTitle } from '../i18n'

export default function NotFound() {
  usePageTitle('Página não encontrada — Stephanie Victoria')
  return (
    <section className="container-x py-[clamp(128px,12vw,176px)]">
      <p className="t-label m-0 text-clay-label">404</p>
      <h1 className="t-display mt-4 mb-0 text-heading">Página não encontrada</h1>
      <p className="t-lead mt-6 mb-8 max-w-[40em]">O endereço que você abriu não existe neste portfólio.</p>
      <Link to="/" className="btn">
        Voltar ao início
      </Link>
    </section>
  )
}
