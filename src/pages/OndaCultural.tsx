import hero from '../assets/img/hero-onda.jpg'
import {
  CardBlock,
  CaseHero,
  CaseNav,
  CaseSection,
  Chips,
  H3,
  Highlight,
  NumberedList,
  P,
  Toc,
} from '../components/case/Case'
import { Contact } from '../components/layout/Contact'
import { PageGlow } from '../components/ui/Glow'
import { T, usePageTitle } from '../i18n'

const toc = [
  { id: 's-visao', label: 'Visão geral' },
  { id: 's-contexto', label: 'Contexto e desafios' },
  { id: 's-papel', label: 'Meu papel e colaboração' },
  { id: 's-processo', label: 'Processo de design' },
  { id: 's-decisoes', label: 'Decisões de design' },
  { id: 's-entregaveis', label: 'Entregáveis e documentação' },
  { id: 's-aprendizados', label: 'Aprendizados e próximos passos' },
]

const challenges = [
  'Transformar regras administrativas e fluxos burocráticos em uma experiência clara.',
  'Equilibrar requisitos obrigatórios dos editais com uma navegação eficiente.',
  'Estruturar formulários extensos para reduzir a sobrecarga cognitiva durante o preenchimento.',
  'Antecipar dúvidas e minimizar erros ao longo dos fluxos.',
  'Manter consistência visual e de interação entre diferentes módulos do sistema.',
]

const responsibilities = [
  'Levantamento de requisitos',
  'Definição de fluxos',
  'Arquitetura da informação',
  'Protótipos de alta fidelidade',
  'Componentes do Design System',
  'Documentação para desenvolvimento (handoff)',
]

const process = [
  {
    stage: 'Levantamento de requisitos',
    how: 'Realizadas análises das documentações e entrevistas com os usuários e stakeholders.',
    purpose: 'Compreender regras, necessidades dos usuários e requisitos técnicos/legais.',
  },
  {
    stage: 'Ideação e fluxos',
    how: 'Análise de concorrentes, brainstorm colaborativo e definição dos fluxos.',
    purpose: 'Explorar soluções e estruturar caminhos do usuário.',
  },
  {
    stage: 'Interface e Design System',
    how: 'Criação de componentes reutilizáveis e diretrizes de interface.',
    purpose: 'Promover consistência entre módulos.',
  },
  {
    stage: 'Prototipação',
    how: 'Desenvolvimento de protótipos de alta fidelidade com base nos fluxos e estruturas definidos.',
    purpose: 'Tornar a solução tangível para avaliação e alinhamento.',
  },
  {
    stage: 'Testes e validação',
    how: 'Testes com usuários e validação com o cliente.',
    purpose: 'Identificar melhorias e avaliar a experiência.',
  },
  {
    stage: 'Handoff',
    how: 'Documentação de componentes, comportamentos, mensagens de erro e regras de negócio. Além disso, comunicação constante com a equipe de desenvolvimento.',
    purpose: 'Alinhar design e desenvolvimento.',
  },
]

const decisions = [
  {
    challenge: 'Formulários extensos',
    title: 'Inscrição por etapas',
    text: 'Dividir o preenchimento em partes menores.',
    benefit: 'Benefício esperado: reduzir a sobrecarga cognitiva e facilitar a compreensão do progresso.',
  },
  {
    challenge: 'Acompanhar andamento',
    title: 'Acompanhamento por status',
    text: 'Exibir indicadores de status para editais e propostas.',
    benefit: 'Benefício esperado: ajudar a identificar a situação atual e entender o andamento.',
  },
  {
    challenge: 'Saber quando agir',
    title: 'Notificações automatizadas',
    text: 'Informar mudanças de status e próximas ações por sistema e e-mail.',
    benefit: 'Benefício esperado: ajudar a perceber atualizações e ações necessárias.',
  },
  {
    challenge: 'Informações distribuídas',
    title: 'Centralização das informações',
    text: 'Organizar conteúdo em páginas dedicadas a editais e propostas.',
    benefit: 'Benefício esperado: facilitar a consulta e dar mais clareza ao contexto.',
  },
  {
    challenge: 'Um usuário, diferentes funções',
    title: 'Acesso integrado por permissões',
    text: 'Estruturar o perfil de parecerista como um complemento ao perfil de proponente, permitindo acessar diferentes funcionalidades com uma única conta.',
    benefit:
      'Benefício esperado: simplificar o acesso, evitar a duplicidade de contas e facilitar a gestão dos perfis.',
  },
]

const deliverables = [
  'Documentação dos requisitos e regras de negócio.',
  'Fluxos de usuário para os perfis atendidos.',
  'Wireframes e protótipos de alta fidelidade.',
  'Componentes e diretrizes do Design System.',
  'Documentação de comportamentos, mensagens de erro e regras de negócio.',
  'Especificações de handoff para apoiar a implementação.',
]

export default function OndaCultural() {
  usePageTitle('Onda Cultural — Estudo de caso · Stephanie Victoria')
  return (
    <>
      <PageGlow />
      <Toc items={toc} />
      <div className="relative z-[1]">
        <CaseHero
          kind="Estudo de caso · Product Design / UX/UI"
          name="Onda Cultural"
          title="projetando uma solução digital para gestão de editais culturais"
          lead="Como estruturar fluxos administrativos complexos em uma experiência digital clara para proponentes e pareceristas."
          meta={[
            { label: 'TIPO DE PROJETO', value: <T>Projeto profissional · PUAH Consultoria · 2025</T> },
            { label: 'Produto', value: <T>Sistema web de gestão de editais culturais · B2G</T> },
            { label: 'ATUAÇÃO', value: <T>UX/UI & Product Designer</T> },
            {
              label: 'Escopo',
              value: <T>Requisitos, fluxos, arquitetura, protótipos, UI, Design System e handoff</T>,
            },
          ]}
          image={hero}
          alt="Mockup de notebook exibindo o logo do Onda Cultural – Sistema de Gestão."
        />

        <CaseSection id="s-visao" title="Visão geral">
          <P>
            <T>
              O Onda Cultural foi criado para centralizar a gestão de editais culturais, contemplando etapas que vão da
              criação do edital ao recebimento, análise e acompanhamento das propostas. O projeto precisava atender
              regras administrativas e requisitos legais, além de diferentes perfis de usuários e seus respectivos
              fluxos.
            </T>
          </P>
          <P>
            <T>
              Minha atuação foi direcionada à experiência dos usuários externos (proponentes e pareceristas),
              transformando requisitos e regras de negócio em fluxos, estruturas de informação e interfaces
              documentadas para desenvolvimento.
            </T>
          </P>
          <Highlight label="Desafio central">
            <T>
              Como tornar os processos envolvidos mais claros e fáceis de acompanhar, sem comprometer regras de negócio
              e requisitos legais?
            </T>
          </Highlight>
        </CaseSection>

        <CaseSection id="s-contexto" num="01" title="Contexto e desafios">
          <P>
            <T>
              O produto buscava tornar a gestão de editais mais organizada, reunindo informações e etapas em um único
              sistema.
            </T>
          </P>
          <P>
            <T>
              A complexidade vinha da combinação de processos administrativos, regras legais e necessidades distintas
              entre os perfis envolvidos. O trabalho exigia entender o que cada usuário precisava fazer, quais
              informações eram obrigatórias e como apresentar os próximos passos sem tornar a navegação excessivamente
              difícil.
            </T>
          </P>
          <H3 className="mt-4">
            <T>Principais desafios de design</T>
          </H3>
          <NumberedList items={challenges} />
        </CaseSection>

        <CaseSection id="s-papel" num="02" title="Meu papel e colaboração">
          <P>
            <T>
              Atuei como Product Designer responsável pela experiência do público externo, com foco nos perfis de
              proponentes e pareceristas.
            </T>
          </P>
          <H3 className="mt-4">
            <T>Principais responsabilidades</T>
          </H3>
          <Chips items={responsibilities} />
          <P>
            <T>O trabalho foi realizado em colaboração com stakeholders e equipe multidisciplinar.</T>
          </P>
        </CaseSection>

        <CaseSection id="s-processo" num="03" title="Processo de design">
          <P>
            <T>
              O processo combinou entendimento de requisitos, organização dos fluxos, exploração de soluções,
              prototipação e preparação para desenvolvimento.
            </T>
          </P>
          <div className="mt-2">
            <div aria-hidden="true" className="proc-row proc-head t-label px-6 pb-3 text-clay">
              <span>
                <T>Etapa</T>
              </span>
              <span>
                <T>Como foi conduzida</T>
              </span>
              <span>
                <T>Propósito</T>
              </span>
            </div>
            <ol className="m-0 flex list-none flex-col gap-2 p-0">
              {process.map((row) => (
                <li
                  key={row.stage}
                  className="proc-row reveal rounded-card border border-card-line bg-card px-6 py-4"
                >
                  <p className="t-body-s m-0 font-semibold text-heading">
                    <T>{row.stage}</T>
                  </p>
                  <p className="m-0 text-sm leading-[22px] text-graphite">
                    <T>{row.how}</T>
                  </p>
                  <p className="m-0 text-sm leading-[22px] text-graphite-muted">
                    <T>{row.purpose}</T>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </CaseSection>

        <CaseSection id="s-decisoes" num="04" title="Da complexidade às decisões de design">
          <P>
            <T>
              As decisões buscaram tornar as tarefas e o estado do processo mais compreensíveis, preservando as regras
              de negócio.
            </T>
          </P>
          <div className="mt-2">
            <div aria-hidden="true" className="map-row map-head t-label px-6 pb-3 text-clay">
              <span>
                <T>Desafio</T>
              </span>
              <span />
              <span>
                <T>Decisão de design</T>
              </span>
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {decisions.map((d) => (
                <li key={d.title} className="map-row reveal rounded-card border border-card-line bg-card px-6 py-4">
                  <p className="t-body-s m-0 text-graphite">
                    <span className="sr-only-note">
                      <T>Desafio:</T>{' '}
                    </span>
                    <T>{d.challenge}</T>
                  </p>
                  <span className="map-arrow text-xl leading-none text-clay-light" aria-hidden="true">
                    →
                  </span>
                  <div>
                    <p className="t-body-s m-0 font-semibold text-heading">
                      <span className="sr-only-note">
                        <T>Decisão:</T>{' '}
                      </span>
                      <T>{d.title}</T>
                    </p>
                    <p className="mt-1 mb-0 text-sm leading-[22px] text-graphite">
                      <T>{d.text}</T>
                    </p>
                    <p className="mt-1 mb-0 text-sm leading-[22px] text-graphite-muted">
                      <T>{d.benefit}</T>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <P className="mt-2">
            <T>
              Essas soluções foram projetadas para apoiar a clareza dos fluxos e o acompanhamento das tarefas.
            </T>
          </P>
        </CaseSection>

        <CaseSection id="s-entregaveis" num="05" title="Entregáveis e documentação">
          <P>
            <T>
              Além das interfaces, uma parte importante do trabalho foi organizar a solução para que pudesse ser
              compreendida e implementada pela equipe de desenvolvimento.
            </T>
          </P>
          <ul className="reveal m-0 mt-2 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3 p-0">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-card border border-card-line bg-card px-5 py-4"
              >
                <span aria-hidden="true" className="flex-none font-bold text-clay">
                  ✓
                </span>
                <span className="t-body-s text-graphite">
                  <T>{item}</T>
                </span>
              </li>
            ))}
          </ul>
          <p className="m-0 max-w-[66ch] text-sm leading-[22px] text-graphite-muted">
            <strong className="font-semibold">
              <T>Nota:</T>
            </strong>{' '}
            <T>as interfaces desenvolvidas não serão exibidas devido a questões de confidencialidade e autorização.</T>
          </p>
        </CaseSection>

        <CaseSection id="s-aprendizados" num="06" title="Aprendizados e considerações">
          <P>
            <T>
              O projeto aprofundou minha experiência em organizar fluxos complexos, documentar decisões para
              desenvolvimento e colaborar com equipes multidisciplinares.
            </T>
          </P>
          <P>
            <T>
              Um dos principais aprendizados foi a necessidade de equilibrar restrições técnicas, regras de negócio e
              requisitos legais com a clareza da experiência. O trabalho com prazos curtos também exigiu priorização de
              demandas e decisões compatíveis com as limitações do projeto.
            </T>
          </P>
          <CardBlock title="O que eu faria diferente?">
            <p className="m-0">
              <T>
                Aprofundaria o mapeamento de estados e cenários além do fluxo principal, considerando situações como
                buscas sem resultados, ausência de dados e carregamentos prolongados. Embora os prazos do projeto tenham
                limitado esse aprofundamento, essa etapa ajudaria a antecipar comportamentos inesperados e tornar a
                interface mais consistente em diferentes condições de uso.
              </T>
            </p>
            <p className="m-0">
              <T>
                Além disso, definiria critérios de sucesso alinhados aos objetivos do projeto desde o início,
                facilitando o acompanhamento da implementação e a avaliação dos resultados das melhorias propostas.
              </T>
            </p>
          </CardBlock>
        </CaseSection>

        <CaseNav prev={{ to: '/donare', label: 'Donare' }} next={{ to: '/troca-paginas', label: 'Troca Páginas' }} />
        <Contact />
      </div>
    </>
  )
}
