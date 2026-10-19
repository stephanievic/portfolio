import { useCallback, useState } from 'react'
import fluxo from '../assets/img/donare-fluxo.jpg'
import hero from '../assets/img/hero-donare.jpg'
import jornada from '../assets/img/donare-jornada.jpg'
import persona from '../assets/img/donare-persona.jpg'
import acesso from '../assets/img/donare-acesso.jpg'
import descoberta from '../assets/img/donare-descoberta.jpg'
import historico from '../assets/img/donare-historico.jpg'
import instituicao from '../assets/img/donare-instituicao.jpg'
import itens from '../assets/img/donare-itens.jpg'
import onboarding from '../assets/img/donare-onboarding.jpg'
import pix from '../assets/img/donare-pix.jpg'
import { Carousel, type Slide } from '../components/case/Carousel'
import {
  CaseHero,
  CaseNav,
  CaseSection,
  Figure,
  H3,
  Highlight,
  ListCard,
  Note,
  P,
  StatCard,
  Strong,
  Toc,
} from '../components/case/Case'
import { Modal } from '../components/case/Modal'
import { Contact } from '../components/layout/Contact'
import { ChevronRight } from '../components/ui/icons'
import { PageGlow } from '../components/ui/Glow'
import { T, useLang, usePageTitle } from '../i18n'

const toc = [
  { id: 's-visao', label: 'Visão geral' },
  { id: 's-pesquisa', label: 'Pesquisa' },
  { id: 's-problema', label: 'Definição do problema' },
  { id: 's-decisoes', label: 'Decisões de design' },
  { id: 's-estrutura', label: 'Estrutura da experiência' },
  { id: 's-solucao', label: 'Solução proposta' },
  { id: 's-status', label: 'Status e próximos passos' },
]

const needs = [
  {
    need: 'Encontrar instituições e oportunidades adequadas.',
    title: 'Busca por instituições',
    text: 'Filtros por causa, localização e tipo de necessidade.',
  },
  {
    need: 'Avaliar a confiabilidade antes de doar.',
    title: 'Página da instituição',
    text: 'Informações detalhadas e seção de prestação de contas.',
  },
  {
    need: 'Ter referências de outras pessoas.',
    title: 'Avaliações de instituições',
    text: 'Relatos e avaliações como informações complementares.',
  },
  {
    need: 'Realizar doações de forma prática.',
    title: 'Realização de doações',
    text: 'Opções para doações financeiras via PIX e de itens físicos.',
  },
  {
    need: 'Consultar as doações realizadas.',
    title: 'Histórico de doações',
    text: 'Registro das doações feitas pelo usuário, com status de identificação do progresso.',
  },
]

const slides: Slide[] = [
  {
    title: 'Telas iniciais',
    text: 'As telas iniciais apresentam o aplicativo e levam o usuário até o acesso. O onboarding mostra, em três passos, a proposta do Donare; em seguida, o usuário pode criar uma conta ou entrar, com e-mail e senha ou com a conta Google.',
    groupLabel: 'Escolher o fluxo das telas iniciais',
    images: [
      {
        src: onboarding,
        label: 'Onboarding',
        alt: 'Quatro telas de abertura do Donare: tela de splash com o logo e três telas de onboarding, “Doe com confiança”, “Ajude do seu jeito” e “Acompanhe o impacto”.',
      },
      {
        src: acesso,
        label: 'Cadastro e login',
        alt: 'Três telas de acesso do Donare: boas-vindas com os botões Criar nova conta e Entrar na conta; cadastro com nome, e-mail e senha; e login com e-mail e senha, com a opção de continuar com o Google.',
      },
    ],
  },
  {
    title: 'Descoberta de instituições',
    text: 'A página inicial foi estruturada para facilitar o acesso às principais funcionalidades e permitir que o usuário encontre oportunidades de doação. A pesquisa inclui filtros por causa, localização e tipo de necessidade, ajudando a refinar as opções disponíveis.',
    images: [
      {
        src: descoberta,
        alt: 'Quatro telas do Donare: página inicial com busca, causas e instituições próximas; página de pesquisa com as causas para apoiar; filtros de pesquisa por causa, localização e necessidade; e resultados da busca por instituições.',
      },
    ],
  },
  {
    title: 'Informações e transparência',
    text: 'A página da instituição reúne informações detalhadas, avaliações de usuários e uma seção de prestação de contas. Essa estrutura foi proposta para facilitar a consulta antes da doação.',
    images: [
      {
        src: instituicao,
        alt: 'Três telas da página da instituição Instituto Vida Nova: o início da aba Informações gerais, com foto, avaliação, descrição e necessidades; a mesma aba rolada até contato e avaliações; e a aba Prestação de contas, com a prestação mensal e o arquivo para download.',
      },
    ],
  },
  {
    title: 'Realização de doações',
    text: 'O fluxo permite escolher entre doações financeiras e doações de itens físicos. As etapas foram organizadas para orientar o usuário durante o processo e tornar a interação mais clara.',
    groupLabel: 'Escolher o fluxo de doação',
    images: [
      {
        src: pix,
        label: 'Doação em dinheiro (PIX)',
        alt: 'Fluxo de doação em dinheiro (PIX), em quatro telas: escolha da forma de doação, valor da doação, pagamento por QR Code ou código PIX e confirmação de doação realizada.',
      },
      {
        src: itens,
        label: 'Doação de itens físicos',
        alt: 'Fluxo de doação de itens físicos, em quatro telas: escolha da forma de doação, seleção dos itens, instruções de entrega e confirmação de doação registrada.',
      },
    ],
  },
  {
    title: 'Histórico das doações',
    text: 'Na aba Doações, o usuário acompanha o status de cada contribuição e pode filtrar a lista. Os detalhes reúnem o resumo da doação, o histórico de atualizações, o comprovante nas doações financeiras e, nas doações de itens, as orientações de entrega e a confirmação.',
    images: [
      {
        src: historico,
        alt: 'Quatro telas do histórico de doações do Donare: lista de doações com filtros por status; detalhes de uma doação financeira concluída, com resumo, histórico e comprovante; e detalhes de uma doação de itens físicos aguardando entrega, com resumo, endereço, horário de recebimento e botão para confirmar a entrega.',
      },
    ],
  },
]

const findings = [
  {
    title: 'Encontrar onde doar ainda é uma dificuldade.',
    body: (
      <>
        <b>
          <T>40,8%</T>
        </b>{' '}
        <T>dos participantes relataram</T>{' '}
        <b>
          <T>não saber para quem ou onde doar</T>
        </b>
        <T>
          . Além disso, 64,9% indicaram encontrar instituições unicamente por recomendações de amigos e redes sociais.
        </T>
      </>
    ),
  },
  {
    title: 'A confiança é uma barreira relevante.',
    body: (
      <>
        <b>
          <T>48,6%</T>
        </b>{' '}
        <T>relataram</T>{' '}
        <b>
          <T>dúvidas sobre se a doação realmente chega a quem precisa</T>
        </b>
        <T>
          . As respostas abertas também apontaram interesse por informações claras e comprovações sobre a destinação
          dos recursos. Além disso, de acordo com a Pesquisa de Doação no Brasil (2024),
        </T>{' '}
        <b>
          <T>apenas 30% dos brasileiros consideram as ONGs confiáveis</T>
        </b>
        <T>.</T>
      </>
    ),
  },
  {
    title: 'A simplicidade pode facilitar o processo.',
    body: (
      <>
        <T>As respostas abertas destacaram a importância de</T>{' '}
        <b>
          <T>poucas etapas</T>
        </b>
        <T>,</T>{' '}
        <b>
          <T>facilidade logística</T>
        </b>{' '}
        <T>e</T>{' '}
        <b>
          <T>alternativas práticas</T>
        </b>{' '}
        <T>para realizar doações, incluindo PIX.</T>
      </>
    ),
  },
]

export default function Donare() {
  usePageTitle('Donare — Estudo de caso · Stephanie Victoria')
  const { t } = useLang()
  const [personaOpen, setPersonaOpen] = useState(false)
  const closePersona = useCallback(() => setPersonaOpen(false), [])

  return (
    <>
      <PageGlow />
      <Toc items={toc} />
      <div className="relative z-[1]">
        <CaseHero
          kind="ESTUDO DE CASO · UX/UI / PRODUCT DISCOVERY"
          name="Donare"
          title="tornando o processo de doação mais simples e transparente"
          lead="Como uma pesquisa com potenciais doadores orientou a proposta de uma experiência digital para facilitar a descoberta de instituições e apoiar decisões de doação mais informadas."
          meta={[
            { label: 'Tipo de projeto', value: <><T>Estudo de caso conceitual</T> · 2026</> },
            { label: 'PRODUTO', value: <T>Aplicativo mobile - B2B</T> },
            { label: 'Atuação', value: <T>Discovery, UX Design e UI Design</T> },
            { label: 'Ferramentas', value: <T>Figma, Miro, Google Forms e Notion</T> },
          ]}
          image={hero}
          alt="Mockup mobile do Donare: tela de splash com o logo e tela inicial com busca, causas e instituições próximas."
        />

        <CaseSection id="s-visao" title="Visão geral">
          <P>
            <T>
              O Donare é uma proposta de aplicativo que conecta pessoas interessadas em doar a instituições sociais. O
              projeto surgiu de uma experiência pessoal: ao tentar doar alguns itens, encontrei dificuldades para
              identificar uma instituição adequada para recebê-los. A partir disso, investiguei se outras pessoas
              enfrentavam dificuldades semelhantes e quais fatores poderiam tornar o processo mais simples e confiável.
            </T>
          </P>
          <P>
            <T>
              O objetivo foi compreender as necessidades de potenciais doadores e utilizar os resultados da pesquisa
              para orientar a definição do problema, a priorização de funcionalidades e a concepção da interface.
            </T>
          </P>
          <Highlight label="Problema investigado">
            <T>
              Como facilitar a descoberta de instituições e ajudar as pessoas a se sentirem mais seguras ao realizar uma
              doação?
            </T>
          </Highlight>
        </CaseSection>

        <CaseSection id="s-pesquisa" num="01" title="Pesquisa: entendendo o comportamento dos doadores">
          <P>
            <T>A pesquisa exploratória combinou</T>{' '}
            <b>
              <T>pesquisa secundária</T>
            </b>{' '}
            <T>(desk research) e um</T>{' '}
            <b>
              <T>questionário</T>
            </b>{' '}
            <T>online. O formulário continha nove perguntas quantitativas e uma pergunta aberta opcional.</T>
          </P>
          <P>
            <T>
              Ao todo, participaram 45 pessoas. Todas responderam às perguntas quantitativas e 21 também contribuíram
              com respostas abertas. O objetivo foi identificar padrões de comportamento, motivações e barreiras
              percebidas no processo de doação.
            </T>
          </P>
          <ul className="reveal m-0 mt-4 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-4 p-0">
            <StatCard value="45" label="participantes no questionário" />
            <StatCard value="21" label="respostas abertas" />
            <StatCard value="9" label="perguntas quantitativas" />
          </ul>

          <H3>
            <T>Principais descobertas</T>
          </H3>
          <ol className="m-0 flex list-none flex-col gap-4 p-0">
            {findings.map((f, i) => (
              <li
                key={f.title}
                className={`reveal flex flex-wrap gap-x-8 gap-y-4 border-t border-line py-6 ${
                  i === findings.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="min-w-0 flex-[1_1_320px]">
                  <h4 className="m-0 text-[17px] leading-[26px] font-semibold text-heading">
                    <T>{f.title}</T>
                  </h4>
                  <p className="t-body-s mt-2 mb-0 max-w-[60ch] text-graphite-muted">{f.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <H3>
            <T>O que os dados indicaram?</T>
          </H3>
          <P>
            <T>Os achados sugeriram duas necessidades centrais:</T>{' '}
            <Strong>
              <T>facilitar a descoberta de oportunidades de doação</T>
            </Strong>{' '}
            <T>e</T>{' '}
            <Strong>
              <T>
                oferecer informações que ajudem as pessoas a avaliar a confiabilidade das instituições e a entender
                onde os recursos estão sendo utilizados
              </T>
            </Strong>
            <T>
              . Essas necessidades orientaram a definição do problema e a exploração de possíveis soluções.
            </T>
          </P>
        </CaseSection>

        <CaseSection id="s-problema" num="02" title="Definição do problema">
          <P>
            <T>
              A síntese da pesquisa foi utilizada para estruturar a persona e a jornada do usuário, buscando identificar
              necessidades, dificuldades e oportunidades ao longo da experiência.
            </T>
          </P>
          <div className="reveal relative mt-2 overflow-hidden rounded-card bg-espresso p-[clamp(32px,3.4vw,48px)] text-paper">
            <p className="t-label m-0 text-clay-light">
              <T>Problema definido</T>
            </p>
            <p className="mt-4 mb-0 max-w-[34em] font-display text-[clamp(20px,1.7vw,24px)] leading-[1.45] font-medium tracking-[-0.005em] text-paper">
              <T>
                Pessoas que desejam doar precisam encontrar instituições adequadas e compreender como suas doações serão
                destinadas, mas a dificuldade de localizar oportunidades e a falta de informações claras podem gerar
                insegurança durante o processo.
              </T>
            </p>
          </div>
          <H3 className="mt-6">
            <T>Oportunidade de design</T>
          </H3>
          <P>
            <T>
              Centralizar informações sobre instituições e tornar as etapas de descoberta e doação mais claras,
              ajudando o usuário a tomar uma decisão com mais informações.
            </T>
          </P>
          <button
            type="button"
            className="btn-ghost self-start"
            aria-haspopup="dialog"
            onClick={() => setPersonaOpen(true)}
          >
            <T>Ver persona e jornada do usuário</T>
            <ChevronRight size={18} />
          </button>
        </CaseSection>

        <CaseSection id="s-decisoes" num="03" title="Da pesquisa às decisões de design">
          <P>
            <T>Com base nas necessidades identificadas, explorei alternativas por meio da técnica</T>{' '}
            <em>
              <T>How Might We</T>
            </em>{' '}
            <T>(Como poderíamos?), seguida da priorização das funcionalidades propostas.</T>
          </P>
          <div className="mt-2">
            <div
              aria-hidden="true"
              className="map-row map-head t-label px-6 pb-3 text-clay"
            >
              <span>
                <T>Necessidade identificada</T>
              </span>
              <span />
              <span>
                <T>Solução proposta</T>
              </span>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {needs.map((n) => (
                <li key={n.title} className="map-row reveal rounded-card border border-card-line bg-card px-6 py-4">
                  <p className="t-body-s m-0 text-graphite">
                    <span className="sr-only-note">
                      <T>Necessidade:</T>{' '}
                    </span>
                    <T>{n.need}</T>
                  </p>
                  <span className="map-arrow text-xl leading-none text-clay-light" aria-hidden="true">
                    →
                  </span>
                  <div>
                    <p className="t-body-s m-0 font-semibold text-heading">
                      <span className="sr-only-note">
                        <T>Resposta:</T>{' '}
                      </span>
                      <T>{n.title}</T>
                    </p>
                    <p className="mt-1 mb-0 text-sm leading-[22px] text-graphite-muted">
                      <T>{n.text}</T>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <P className="mt-2">
            <T>
              A proposta combina descoberta, informação e realização da doação em uma mesma experiência, respondendo às
              necessidades identificadas durante a pesquisa. A relação acima representa a lógica pretendida para a
              solução; a eficácia de cada decisão ainda precisa ser avaliada com usuários.
            </T>
          </P>
        </CaseSection>

        <CaseSection id="s-estrutura" num="04" title="Estrutura da experiência">
          <P>
            <T>
              Com as funcionalidades priorizadas, desenvolvi o fluxo principal do usuário e os wireframes para
              estruturar a navegação e a organização das informações antes de avançar para o design visual.
            </T>
          </P>
          <P>
            <T>
              O foco foi organizar o acesso às funcionalidades essenciais e definir como o usuário poderia encontrar uma
              instituição, consultar suas informações e iniciar uma doação.
            </T>
          </P>
          <Figure
            src={fluxo}
            width={1682}
            height={752}
            caption="Fluxo principal de doação"
            alt="Fluxograma do fluxo principal de doação: o usuário faz login, busca instituições, acessa o perfil institucional, decide doar e escolhe o tipo de doação. Em doações em dinheiro, informa o valor, recebe o código de pagamento, o sistema registra como aguardando pagamento e, após o pagamento, a doação é concluída. Em doações de itens físicos, informa itens e quantidade, o sistema registra como pendente, o usuário recebe instruções de entrega e confirma a entrega, e a doação é concluída. Ao final, acompanha as atualizações da ONG pelo perfil institucional."
          />
        </CaseSection>

        <CaseSection
          id="s-solucao"
          num="05"
          title="Solução proposta"
          wide={
            <Carousel
              label="Telas da solução proposta"
              slides={slides}
              width={2000}
              height={1000}
              fit="cover"
              background="#ece6e3"
            />
          }
        >
          <div className="pt-[38px]">
            <P>
              <T>
                A proposta foi materializada em interfaces mobile que priorizam a descoberta de instituições, a consulta
                de informações e o acesso ao fluxo de doação.
              </T>
            </P>
          </div>
        </CaseSection>

        <CaseSection id="s-status" num="06" title="Aprendizados e próximos passos">
          <P>
            <T>O projeto resultou em uma</T>{' '}
            <b>
              <T>proposta</T>
            </b>{' '}
            <T>de aplicativo</T>
            <b>
              {' '}
              <T>fundamentada em pesquisa</T>
            </b>{' '}
            <T>
              exploratória, com funcionalidades priorizadas, fluxo principal, wireframes e interfaces de alta
              fidelidade.
            </T>
          </P>
          <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
            <ListCard
              title="Próximos passos"
              items={[
                'Conduzir testes de usabilidade para avaliar a compreensão da navegação e dos fluxos de doação.',
                'Iterar a solução a partir dos problemas observados e definir métricas para acompanhar sua eficácia.',
              ]}
            />
          </div>
          <Note title="Aprendizado central">
            <T>
              O projeto reforçou a importância de investigar as necessidades dos usuários antes de definir
              funcionalidades e de tratar as decisões de design como hipóteses que precisam ser avaliadas.
            </T>
          </Note>
        </CaseSection>

        <CaseNav next={{ to: '/onda-cultural', label: 'Onda Cultural' }} />
        <Contact />
      </div>

      <Modal open={personaOpen} onClose={closePersona} title="Persona e jornada do usuário">
        <figure className="m-0">
          <img
            src={persona}
            alt={t(
              'Persona Mariana Ferreira, 30 anos, gerente de RH, com foto, citação, comportamentos, objetivos e motivações e dores relacionadas à doação.',
            )}
            width={1554}
            height={1005}
            className="block h-auto w-full rounded-card border border-card-line"
          />
          <figcaption className="t-caption mt-3 text-graphite-muted">
            <strong>
              <T>Persona</T>
            </strong>{' '}
            <T>— Mariana Ferreira, 30 anos, gerente de RH</T>
          </figcaption>
        </figure>
        <figure className="m-0">
          <img
            src={jornada}
            alt={t(
              'Mapa da jornada do usuário em quatro etapas: percebe oportunidade, busca locais e instituições, avalia confiabilidade e realiza a doação. Para cada etapa, a tabela descreve o que o usuário faz, pensa e sente, suas dores e as oportunidades de design.',
            )}
            width={1463}
            height={1067}
            className="block h-auto w-full rounded-card border border-card-line"
          />
          <figcaption className="t-caption mt-3 text-graphite-muted">
            <strong>
              <T>Jornada do usuário</T>
            </strong>{' '}
            <T>— da percepção da oportunidade à doação</T>
          </figcaption>
        </figure>
      </Modal>
    </>
  )
}
