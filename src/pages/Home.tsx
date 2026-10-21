import { Link } from 'react-router-dom'
import retrato from '../assets/img/retrato.jpg'
import { Contact } from '../components/layout/Contact'
import { HeroGlow, PageGlow } from '../components/ui/Glow'
import { ExternalLink } from '../components/ui/Links'
import { Marquee } from '../components/ui/Marquee'
import { approach, areas, links, projects, tools } from '../content/site'
import { T, useLang, usePageTitle } from '../i18n'

const section = 'container-x'
const sectionPad = 'py-[clamp(72px,8.3vw,120px)]'

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f9f4f3_0%,#f7efed_55%,#f9f4f3_100%)] pt-[clamp(128px,12vw,176px)] pb-[clamp(72px,8.3vw,120px)]"
    >
      <HeroGlow opacity={0.5} />
      <div className={section}>
        <h1 id="hero-title" className="m-0 font-semibold text-heading">
          <span className="mb-4 block text-[clamp(22px,2.1vw,30px)] leading-[1.2] font-light tracking-[-0.01em] text-graphite-muted">
            <T>Oi! eu sou a</T>
          </span>
          <span className="hero-l t-hero-name block font-semibold text-clay">
            Stephanie
            <span className="text-[42px] leading-[1.12] font-medium tracking-[-1.05px] text-heading">,</span>
            <span
              aria-hidden="true"
              className="hero-pill relative ml-[0.16em] inline-block h-14 w-[84px] overflow-hidden rounded-full bg-paper-sunk align-[0.04em]"
            >
              <img
                src={retrato}
                alt=""
                width={1448}
                height={1086}
                className="block h-full w-full object-cover [object-position:50%_30%]"
              />
            </span>
          </span>
          <span className="hero-l t-hero-name block font-light text-espresso">Product designer</span>
        </h1>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-10">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-6">
            <p className="t-lead m-0 max-w-[40em] text-graphite-muted">
              <T>
                Desenho produtos digitais que transformam problemas reais em experiências mais acessíveis, funcionais e
                intuitivas.
              </T>
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#projetos" className="btn">
                <T>Ver projetos</T>{' '}
                <span className="arrow arrow-down" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const { t } = useLang()
  return (
    <section id="projetos" aria-labelledby="projetos-title">
      <div className={section}>
        <div className={`border-t border-line ${sectionPad}`}>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <div className="min-w-0 flex-[1_1_420px]">
              <h2 id="projetos-title" className="reveal t-title-1 m-0 font-bold text-heading">
                <T>Projetos selecionados</T>
              </h2>
              <p className="t-lead mt-6 mb-0 max-w-[34em] text-graphite">
                <T>
                  Projetos que refletem minha forma de pensar e conduzir o processo de design, apresentando contexto,
                  decisões e as soluções desenvolvidas.
                </T>
              </p>
            </div>
            <ExternalLink
              href={links.behance}
              className="plain inline-flex min-h-11 items-center gap-1.5 text-[15px] leading-5 font-medium"
            >
              <T>Ver no Behance</T>
            </ExternalLink>
          </div>

          <ul className="m-0 mt-16 flex list-none flex-col gap-8 p-0">
            {projects.map((p) => (
              <li
                key={p.slug}
                className="pcard reveal relative grid min-w-0 grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-stretch overflow-hidden rounded-card border border-card-line bg-card shadow-card"
              >
                <img
                  src={p.image}
                  alt={t(p.alt)}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="block aspect-[4/3] h-full w-full bg-[#e9e2de] object-cover"
                />
                <div className="flex min-w-0 flex-col justify-center gap-6 p-[clamp(24px,3.4vw,48px)]">
                  <div className="flex flex-col gap-4">
                    <h3 className="pcard-title t-title-2 m-0 max-w-[22em] font-medium text-heading transition-colors duration-150">
                      <b>
                        <T>{`${p.name}:`}</T>
                      </b>{' '}
                      <T>{p.title}</T>
                    </h3>
                    <ul
                      aria-label={t('Áreas de atuação')}
                      className="meta-list m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0 text-sm leading-5 font-medium text-clay-label"
                    >
                      {p.tags.map((tag) => (
                        <li key={tag}>
                          <T>{tag}</T>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="t-body-s m-0 max-w-[60ch] text-graphite">
                    <T>{p.summary}</T>
                  </p>
                  <Link
                    to={p.path}
                    className="btn-sec mt-2 w-[164px] self-start"
                    aria-label={`${t('Ver projeto')} ${p.name}`}
                  >
                    <T>Ver projeto</T>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useLang()
  return (
    <section id="sobre" aria-labelledby="sobre-title">
      <div className={section}>
        <div className={`flex flex-wrap gap-x-6 gap-y-6 border-t border-line ${sectionPad}`}>
          <div className="about-wrap flex min-w-0 flex-[1_1_560px] flex-wrap items-start gap-x-12 gap-y-8">
            <figure className="about-fig reveal relative m-0 h-[540px] w-[608px] min-w-60 flex-[0_1_480px]">
              <img
                className="about-img block h-[540px] w-full rounded-card bg-paper-sunk object-cover [object-position:48%_30%]"
                src={retrato}
                alt={t('Retrato da Stephanie sorrindo, de óculos e camiseta marrom.')}
                width={1448}
                height={1086}
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-heading/10 bg-paper/90 py-2 pr-4 pl-3 text-sm leading-5 font-medium whitespace-nowrap text-heading shadow-[0_2px_8px_rgba(83,39,26,0.08)] backdrop-blur-sm">
                <span aria-hidden="true" className="open-dot relative h-2 w-2 flex-none rounded-full bg-clay-light" />
                <T>Disponível para novas oportunidades</T>
              </figcaption>
            </figure>

            <div className="about-text flex min-w-0 flex-[1_1_320px] flex-col gap-6">
              <h2 id="sobre-title" className="reveal t-title-1 m-0 font-bold text-heading">
                <T>Sobre mim</T>
              </h2>
              <p className="m-0 max-w-[66ch] text-clay">
                <T>
                  UX/UI & Product Designer com experiência na criação de interfaces e no desenvolvimento de soluções
                  para produtos digitais.
                </T>
              </p>
              <div className="max-w-[66ch] text-graphite-muted">
                <p className="m-0">
                  <T>
                    Meu trabalho envolve compreender necessidades, encontrar oportunidades e estruturar experiências
                    claras e funcionais.
                  </T>
                </p>
                <p className="mx-0 mt-7 mb-0">
                  <T>
                    Minha trajetória começou na área de tecnologia, durante a graduação em Análise e Desenvolvimento de
                    Sistemas, e se consolidou com a experiência em suporte técnico. Esse percurso ampliou minha visão
                    sobre os sistemas e a relação das pessoas com a tecnologia, despertando meu interesse por UX/UI
                    Design.
                  </T>
                </p>
                <p className="mx-0 mt-7 mb-0">
                  <T>
                    Atualmente, busco aprofundar meus conhecimentos em pesquisa, descoberta de produto e acessibilidade,
                    conectando as necessidades das pessoas aos objetivos do negócio.
                  </T>
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-4">
                <ExternalLink href={links.curriculo} className="btn">
                  <T>Ver currículo</T>
                </ExternalLink>
                <ExternalLink href={links.linkedin} className="btn-sec">
                  <T>Ver LinkedIn</T>
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="abordagem" aria-labelledby="abordagem-title">
      <div className={section}>
        <div className={sectionPad}>
          <div className="flex flex-wrap gap-x-16 gap-y-12">
            <div className="flex max-w-[560px] min-w-0 flex-[1_1_320px] flex-col gap-8">
              <h2 id="abordagem-title" className="reveal t-title-1 m-0 font-bold text-heading">
                <T>Como eu trabalho</T>
              </h2>
              <p className="t-lead m-0 border-l-2 border-clay pl-6 text-graphite-muted">
                <T>Combino</T>{' '}
                <strong className="font-normal text-clay">
                  <T>pesquisa</T>
                </strong>
                ,{' '}
                <strong className="font-normal text-clay">
                  <T>estratégia</T>
                </strong>{' '}
                <T>e</T>{' '}
                <strong className="font-normal text-clay">
                  <T>design</T>
                </strong>{' '}
                <T>para transformar problemas em experiências mais simples, acessíveis e eficientes.</T>
              </p>
              <div className="mt-4 flex flex-col gap-6">
                <p className="m-0">
                  <span>
                    <strong className="font-semibold text-heading">
                      <T>Cada projeto é único.</T>
                    </strong>{' '}
                    <T>
                      Prezo por um processo de design flexível, que se adapta ao contexto, aos objetivos e às
                      necessidades de cada projeto.
                    </T>
                  </span>
                </p>
              </div>
            </div>

            <ol className="m-0 grid min-w-0 flex-[1.4_1_520px] list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 p-0">
              {approach.map((step, i) => (
                <li
                  key={step.title}
                  className={`reveal flex flex-col gap-4 rounded-card border border-[#efe6e3] bg-card p-8 ${
                    i === approach.length - 1 ? 'col-[1/-1]' : ''
                  }`}
                >
                  <h3 className="m-0 font-display text-[19px] leading-[26px] font-semibold tracking-[-0.01em] text-clay">
                    <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span> <T>{`— ${step.title}`}</T>
                  </h3>
                  <p className="t-body-s m-0 max-w-[66ch] text-graphite">
                    <T>{step.text}</T>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('Stephanie — Product designer')
  return (
    <>
      <PageGlow />
      <div className="relative z-[1]">
        <Hero />
        <Marquee items={areas} label="Áreas de atuação" className="bg-band" />
        <Projects />
        <Marquee items={tools} label="Ferramentas e habilidades" className="bg-espresso" />
        <About />
        <Approach />
        <Contact />
      </div>
    </>
  )
}
