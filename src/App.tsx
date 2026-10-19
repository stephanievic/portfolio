import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { LangProvider } from './i18n'
import Donare from './pages/Donare'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OndaCultural from './pages/OndaCultural'
import TrocaPaginas from './pages/TrocaPaginas'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="donare" element={<Donare />} />
            <Route path="onda-cultural" element={<OndaCultural />} />
            <Route path="troca-paginas" element={<TrocaPaginas />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
