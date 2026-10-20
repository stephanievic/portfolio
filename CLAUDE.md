# CLAUDE.md — Portfólio de Stephanie Victoria (UX/UI & Product Designer)

Guia para o Claude Code implementar e manter o portfólio. A referência visual e de conteúdo é o design "Portfólio — Product designer" (artefato Design no claude.ai, sistema de design `stephanie`, tema `papel`). Em caso de dúvida, o design vence; não invente estilos fora dele.

## Visão geral

SPA bilíngue (PT padrão / EN) com 4 rotas:

| Rota | Página (`src/pages/`) | Conteúdo |
|---|---|---|
| `/` | `Home.tsx` | Hero, projetos selecionados, sobre, abordagem, contato |
| `/donare` | `Donare.tsx` | Estudo de caso conceitual (2026): Discovery, UX e UI de app mobile de doações |
| `/onda-cultural` | `OndaCultural.tsx` | Projeto profissional (PUAH Consultoria, 2025): sistema web B2G de editais culturais |
| `/troca-paginas` | `TrocaPaginas.tsx` | Projeto acadêmico (2024): app mobile de troca de livros |

No design as páginas se ligam por `Main/Case/Onda/Troca.dc.html`; no código use as rotas acima. Âncoras da home: `/#projetos`, `/#sobre`, `/#abordagem`, `/#contato`.

## Tecnologias

- **React 19 + TypeScript**, componentes funcionais e hooks.
- **Vite** como bundler e dev server (`npm run dev`, `npm run build`, `npm run preview`).
- **Tailwind CSS v4** via `@tailwindcss/vite`, com os tokens do design system declarados em `@theme` (ver abaixo). Sem arquivo `tailwind.config.js`.
- **React Router** (`react-router-dom`) para as rotas; restaurar scroll no topo ao trocar de página e rolar até a âncora quando houver hash.
- **Fontes:** `Nunito` 300–800 (`font-display`) e `Inter` 400–700 (`font-sans`). Preferir `@fontsource-variable/nunito` e `@fontsource-variable/inter` (self-hosted); alternativa é Google Fonts com `preconnect` e `display=swap`.
- **Ícones:** SVG inline como componentes React, com traço. Sem emoji, sem biblioteca de ícones.
- **Sem outras bibliotecas** (animação, UI kit, i18n) a menos que sejam realmente necessárias. i18n é um contexto simples feito à mão.
- **Comportamentos a implementar (hooks/componentes):**
  - `useLang` / `LangProvider`: alternância PT/EN persistida em `localStorage` (try/catch; deve funcionar sem ele) e atualização de `<html lang>`;
  - `useActiveSection`: `IntersectionObserver` para destacar o item ativo do índice lateral nos estudos de caso;
  - `CopyEmailButton`: `navigator.clipboard` com mensagem de confirmação em `aria-live`;
  - `Nav` com menu mobile (`aria-expanded` / `aria-controls`) e `Modal` acessível (`aria-modal`, foco preso, Esc fecha);
  - `Reveal`: animação de entrada via classes CSS scroll-driven (`animation-timeline: view()` dentro de `@supports`), sem JS de animação;
  - `Marquee` das faixas de habilidades e ferramentas.
- **Ferramentas citadas no conteúdo (não são dependências do código):** Figma, FigJam, Miro, Notion, ClickUp, Google Forms.

## Design system "Stephanie" (tema Papel)

Declarar todos os tokens em `src/index.css` com `@theme` do Tailwind v4 (`--color-*`, `--font-*`, `--spacing-*`, `--radius-*`, `--text-*`), para gerar utilitários como `bg-paper`, `text-espresso`, `rounded-card`, `font-display`. Nomes de cor da tabela abaixo viram `--color-<nome>`. Nenhum hex solto em componentes e nenhum valor arbitrário (`[#744233]`) quando existir token. Um único tema claro; seções não alternam cor de fundo.

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#f9f4f3` | Fundo da página |
| `--paper-sunk` | `#f1e8e5` | Fundo de mídia (capas, figuras). Nunca atrás de texto longo |
| `--clay-soft` | `#efe1dc` | Realce discreto, tag de status, hover de lista |
| `--line` | `#e2d6d2` | Fios de 1px, divisores (decorativo) |
| `--line-strong` | `#8f7c76` | Borda de controles e contornos |
| `--espresso` | `#4a2a20` | Títulos; fundo do contato e rodapé (`--night`) |
| `--graphite` | `#2b2928` | Texto corrido |
| `--graphite-muted` | `#67605c` | Legendas, metadados, rótulos |
| `--clay` | `#744233` | Destaque primário: links, botão primário, numeração, foco |
| `--clay-deep` | `#5c3326` | Hover/pressed de botão e links |
| `--on-clay` | `#f9f4f3` | Texto sobre clay |
| `--on-night` | `#f9f4f3` | Texto principal sobre night |
| `--on-night-muted` | `#c4ada5` | Texto de apoio sobre night |
| `--clay-light` | `#e3a891` | Links, e-mail e foco sobre night |
| `--line-night` | `#5a3e35` | Fio sobre night |

Verde de status "Disponível para novas oportunidades": `#4f8a5b` (ponto de 6px com pulso).
Foco: `outline: 2px solid var(--clay); outline-offset: 3px` (sobre night, `--clay-light`).
O bloco de contato usa `--espresso` com dois radiais suaves (`clay-light` a 14% e `#a45f4d` a 22%) e ruído SVG a 7% de opacidade.

### Tipografia

| Estilo | Família | Tamanho / altura | Peso | Tracking | Uso |
|---|---|---|---|---|---|
| hero-name | Nunito | 136px / 0.96 (mobile 56px) | 600 | -0.022em | Só o nome. A linha do cargo usa o mesmo tamanho em peso 300 |
| display | Nunito | 64px / 66px (mobile 40px) | 500 | -0.03em | Título do estudo de caso |
| title-1 | Nunito | 42px / 47px (mobile 30px) | 500 | -0.025em | Títulos de seção da home; destaque em peso 300 + clay |
| title-2 | Nunito | 30px / 36px (mobile 24px) | 500 | -0.015em | Nome de projeto, seção de caso |
| title-3 | Nunito | 21px / 28px | 500 | -0.01em | Itens de abordagem, decisões |
| hero-hello | Nunito | 30px / 36px (mobile 22px) | 300 | -0.01em | "Oi! eu sou a", em graphite-muted |
| lead | Inter | 20px / 31px (mobile 18/28) | 400 | 0 | Abertura de seção, máx. 3 linhas |
| body | Inter | 17px / 28px | 400 | 0 | Texto corrido, máx. 66ch |
| body-s | Inter | 15px / 24px | 400 | 0 | Descrições, notas, metadados |
| nav | Inter | 15px / 20px | 500 | 0 | Navegação e botões |
| label | Inter | 12px / 16px | 500 | 0.08em | Rótulo em CAIXA ALTA; nunca para frases |
| caption | Inter | 13px / 20px | 400 | 0 | Legendas, em graphite-muted |

### Espaçamento, raio e grid

- Espaço: 4, 8, 12, 16, 24, 32, 48, 72, 120px (`--space-1` a `--space-9`). 120px entre seções da home no desktop (72px no mobile).
- Raio: `0` (seções e fios), `4px` (etiquetas, tags), `10px` (botões, campos), `16px` (cards, capas, figuras, retrato), `999px` (pílula do retrato, ponto de status).
- Grid de 12 colunas, máx. `1344px`: desktop ≥1024px (margem 48, gutter 24); tablet 640–1023px (8 col, margem 32); mobile <640px (4 col, margem 20, gutter 16).
- Navegação fixa de `64px`; `scroll-padding-top: 96px` e `scroll-behavior: smooth`.
- Largura de leitura `66ch`.

### Componentes e comportamento

- **Links:** cor clay, sublinhado 1px com offset 4px (35% de opacidade, 100% no hover). `.plain` remove o sublinhado até o hover. Seta `→` desloca 3px no hover; `↗` desloca (2px, -2px).
- **Botão primário:** fundo clay, texto `on-clay`, raio 10px, hover `clay-deep`. **Secundário:** borda `line-strong`, hover borda e texto clay. Sobre night: variante "ghost" com hover `clay-light`.
- **Card de projeto (`.pcard`):** grid capa + texto, raio 16px, hover sobe 2px com sombra suave; título vira clay. Empilha abaixo de 760px.
- **Faixas em loop (marquee):** habilidades (UX Design, UI Design, Product Thinking, Usabilidade, Pesquisa com usuários, Acessibilidade, Design Systems, Prototipação, Arquitetura da informação, Interaction Design) e ferramentas/métodos (Figma, FigJam, Miro, Notion, ClickUp, Google Forms, Wireframing, Fluxos de usuário, Testes de usabilidade, Levantamento de requisitos, Benchmarking, Handoff para desenvolvimento, Jornada do usuário, Desk research), separados por `✱`. Conteúdo duplicado só visualmente (`aria-hidden`); pausar com `prefers-reduced-motion`.
- **Animação de entrada (`.reveal`):** scroll-driven com `view()`; `h2` entra pela esquerda, figuras e cards com zoom, itens de lista escalonados. Desativar tudo em `prefers-reduced-motion: reduce`.
- **Logo:** monograma "S" que expande para "Stephanie Victoria" (`.logo-rest` com `max-width` animado).
- **Estudos de caso:** índice lateral numerado com seção ativa, botão "← Todos os projetos", navegação "próximo projeto" no fim, figuras com legenda, carrosséis de telas (`aria-roledescription="carousel"`), contadores e estatísticas em destaque.
- **Contato / rodapé:** único bloco escuro da página (`night`), marca o fim da leitura. Botão "Copiar e-mail", links para LinkedIn, Behance e currículo, "Voltar ao topo ↑" e `© 2026 Stephanie Victoria`.

## Conteúdo da home (ordem das seções)

1. **Hero:** "Oi! eu sou a **Stephanie.** Product designer". Texto: "Desenho produtos digitais que transformam problemas reais em experiências mais acessíveis, funcionais e intuitivas." CTA "Ver projetos ↓". Faixa de habilidades.
2. **Projetos selecionados** (`#projetos`): Donare, Onda Cultural, Troca Páginas (cards) e link "Ver no Behance ↗". Faixa de ferramentas e métodos.
3. **Sobre mim** (`#sobre`): tag "Disponível para novas oportunidades", resumo profissional, trajetória (Análise e Desenvolvimento de Sistemas, suporte técnico, depois UX/UI), botões "Ver currículo ↗" e "Ver LinkedIn ↗".
4. **Como eu trabalho** (`#abordagem`): 01 Entender, 02 Definir, 03 Explorar, 04 Projetar, 05 Validar e evoluir.
5. **Vamos conversar?** (`#contato`) e rodapé.

Os textos exatos dos projetos e dos estudos de caso estão nos arquivos do design (`project/Main.dc.html`, `Case.dc.html`, `Onda.dc.html`, `Troca.dc.html`). Copie de lá; não parafraseie nem invente números. Dados do Donare (45 participantes, 21 respostas abertas, 9 perguntas, 40,8%, 64,9%, 48,6%) e do Troca Páginas (5 meses) são do conteúdo original.

### Links e contato

- E-mail: stephanie.vicms@gmail.com
- LinkedIn: https://www.linkedin.com/in/stephanie-victoria/
- Behance: https://www.behance.net/stephanie-victoria
- Currículo: https://drive.google.com/file/d/1W532jwAIE5B387j8stOxf2aC-Ol2XpAA/view?usp=sharing
- Links externos abrem em nova aba e trazem o texto oculto "(abre em nova aba)".

## Internacionalização (PT/EN)

- Seletor "PT | EN" na navegação. PT é o padrão; a escolha fica em `localStorage` (chave única) e atualiza `<html lang>`.
- O texto-fonte fica em português no JSX, dentro de `<T>…</T>` (ou `t()` para atributos como `alt` e `aria-label`). O inglês vem de `src/i18n/en.json`, um mapa "trecho em português → inglês". A chave é o trecho normalizado (espaços colapsados), então o texto em `<T>` precisa ser idêntico à chave, inclusive nas divisões em torno de `<b>`, `<strong>` e `<em>`.
- Texto novo exige entrada nova em `en.json`. Em desenvolvimento, `translate()` avisa no console (`[i18n] sem tradução`) quando falta uma tradução; abra cada rota em EN e confira o console.
- Nomes próprios (Figma, Miro etc.) entram em `en.json` com o mesmo valor, só para não gerar aviso.
- Título da página (`document.title`) atualizado a cada rota e idioma.
- Títulos de página: "Stephanie — Product designer" e "<Projeto> — Estudo de caso · Stephanie Victoria".

## Acessibilidade (requisito, não extra)

- Contraste mínimo 4.5:1 para texto (os pares do design já cumprem; não troque tons sem recalcular).
- Link "Pular para o conteúdo" como primeiro elemento focável.
- Elementos interativos são `<a>`/`<button>` reais; ícones decorativos `aria-hidden="true"`; botões só com ícone têm `aria-label`.
- `aria-current` na navegação e no índice; `aria-labelledby` nas seções; `aria-live` para feedback de cópia.
- Alvos de toque ≥44px. Funciona por teclado, com foco visível sempre.
- Respeitar `prefers-reduced-motion`.
- Responsivo de 360px a 1440px+, sem rolagem horizontal.

## Convenções de código

- Estrutura: `index.html`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx` (rotas), `src/index.css` (Tailwind, `@theme`, utilitários `t-*` de tipografia, componentes de CSS e keyframes de reveal), `src/pages/` (Home, Donare, OndaCultural, TrocaPaginas, NotFound), `src/components/layout/` (Layout, Nav, Footer, Contact), `src/components/case/` (CaseHero, CaseSection, Toc, Carousel, Modal e blocos dos estudos de caso), `src/components/ui/` (ícones, links, Marquee, Glow), `src/hooks/`, `src/i18n/` (`translate.ts`, `LangProvider.tsx`, `useLang.ts`, `T.tsx`, `en.json`), `src/content/site.ts` (links, habilidades, projetos da home, abordagem), `src/assets/img/` (JPEGs com `width`/`height` e `loading="lazy"`), `README.md`.
- Componentes em PascalCase, props tipadas. Dados compartilhados ficam em `src/content/`; o texto longo de cada estudo de caso fica na própria página, dentro de `<T>`.
- Estilo só com utilitários Tailwind. Estados repetidos (links com sublinhado de 1px, foco, `.pcard`) viram componentes ou `@utility`/`@layer components` em `index.css`, não cópias de classes.
- Responsivo mobile-first com os breakpoints do grid: `sm` 640px, `lg` 1024px (e `md` 760px onde o card empilha).
- TypeScript em modo `strict`; sem `any`. O linter é o oxlint (`npm run lint`), que já vem no template do Vite.
- Comentários só onde o motivo não é óbvio. Sem dependências npm a menos que sejam realmente necessárias.
- Não usar gradientes decorativos, emoji, cards com borda lateral colorida nem estilos fora do sistema acima.
- Textos sempre em português do Brasil com acentuação correta; nada de lorem ipsum. Dado faltante vira placeholder visível como `[A PREENCHER]`.

## Como trabalhar neste repositório

- A pasta ainda não é um repositório git e está vazia: ao começar, crie o projeto com `npm create vite@latest . -- --template react-ts`, instale `tailwindcss @tailwindcss/vite react-router-dom` e as fontes, e faça `git init` só se a usuária pedir.
- Antes de concluir, rode `npm run build` e `npm run lint` sem erros.
- Não faça commit, push ou deploy sem pedido explícito.
- Verifique mudanças visuais no navegador (`npm run dev`) em 1440px, 768px e 390px antes de dizer que terminou.
- Publicação provável: Vercel, Netlify ou GitHub Pages (build estático em `dist/`). Em hospedagem sem fallback de SPA, configurar redirecionamento para `index.html` (ou usar `HashRouter` no GitHub Pages).
