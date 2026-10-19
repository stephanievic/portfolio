# Portfólio — Stephanie Victoria

Portfólio de UX/UI & Product Designer, bilíngue (PT/EN), com home e três estudos de caso: Donare, Onda Cultural e Troca Páginas.

React 19, TypeScript, Vite e Tailwind CSS v4, seguindo o design system "Stephanie" (tema Papel). As regras de design e de código estão em [CLAUDE.md](CLAUDE.md).

## Rodar

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build    # verifica os tipos e gera dist/
npm run preview  # serve o build localmente
npm run lint     # oxlint
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/donare` | Estudo de caso Donare |
| `/onda-cultural` | Estudo de caso Onda Cultural |
| `/troca-paginas` | Estudo de caso Troca Páginas |

## Publicar

O build estático fica em `dist/`. Como o site usa `BrowserRouter`, a hospedagem precisa redirecionar qualquer caminho para `index.html` (Vercel e Netlify precisam de uma regra de rewrite; no GitHub Pages, troque para `HashRouter`).
