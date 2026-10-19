import { Outlet } from 'react-router-dom'
import { T } from '../../i18n'
import { useScrollManager } from '../../hooks/useScrollManager'
import { Footer } from './Footer'
import { Nav } from './Nav'

export function Layout() {
  useScrollManager()
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-paper">
      <a className="skip-link" href="#topo">
        <T>Pular para o conteúdo</T>
      </a>
      <Nav />
      <main id="topo" tabIndex={-1} className="relative z-[1]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
