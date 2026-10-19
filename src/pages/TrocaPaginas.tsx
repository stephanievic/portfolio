import estante from '../assets/img/troca-estante.jpg'
import acesso from '../assets/img/troca-acesso.jpg'
import guia from '../assets/img/troca-guia.jpg'
import hero from '../assets/img/hero-troca.jpg'
import livro from '../assets/img/troca-livro.jpg'
import perfil from '../assets/img/troca-perfil.jpg'
import publicacoes from '../assets/img/troca-publicacoes.jpg'
import { Carousel, type Slide } from '../components/case/Carousel'
import { CaseHero, CaseNav, CaseSection, Chips, Highlight, Note, P, Toc } from '../components/case/Case'
import { Contact } from '../components/layout/Contact'
import { PageGlow } from '../components/ui/Glow'
import { PostIcon, ShelfIcon, SwapIcon } from '../components/ui/icons'
import { T, useLang, usePageTitle } from '../i18n'

const toc = [
  { id: 's-contexto', label: 'Contexto' },
  { id: 's-papel', label: 'Meu papel' },
  { id: 's-desafios', label: 'Desafios do projeto' },
  { id: 's-processo', label: 'Processo de design' },
  { id: 's-funcionalidades', label: 'Principais funcionalidades' },
  { id: 's-estilos', label: 'Guia de estilos' },
  { id: 's-telas', label: 'Telas' },
  { id: 's-aprendizados', label: 'Aprendizados' },
]

const roles = [
  'Identidade visual',
  'Componentes de interface',
  'Protótipos de alta fidelidade',
  'Análise de requisitos',
  'Desenvolvimento front-end',
]

const steps = [
  {
    title: 'Descoberta de oportunidades',
    text: 'Benchmarking e desk research para entender as necessidades e comportamentos de usuários leitores, além de analisar soluções já disponíveis no mercado.',
  },
  {
    title: 'Levantamento e análise de requisitos',
    text: 'A partir dos dados da pesquisa, foram identificados e documentados os requisitos funcionais e não funcionais que orientaram o desenvolvimento do aplicativo.',
  },
  {
    title: 'Definição dos fluxos',
    text: 'Estruturação dos principais fluxos de usuário e diagramas de caso de uso, definindo como os usuários interagiriam com as funcionalidades do aplicativo.',
  },
  {
    title: 'Definição da identidade visual',
    text: 'Logo, paleta de cores, tipografia, ícones e demais diretrizes visuais para garantir consistência na interface.',
  },
  {
    title: 'Prototipação',
    text: 'Protótipos de alta fidelidade no Figma, aplicando os fluxos e a identidade visual definidos e preparando as telas para a etapa de desenvolvimento.',
  },
]

const features = [
  {
    icon: <SwapIcon size={24} />,
    title: 'Troca de livros',
    text: 'O aplicativo permite que usuários cadastrados escolham e agendem a troca de livros entre si.',
  },
  {
    icon: <ShelfIcon size={24} />,
    title: 'Estante virtual',
    text: 'Permite que o usuário acesse, busque e selecione livros que estejam disponíveis para troca.',
  },
  {
    icon: <PostIcon size={24} />,
    title: 'Publicações',
    text: 'Criação de posts sobre os livros lidos e de interesse dos usuários, permitindo a interação entre eles.',
  },
]

const slides: Slide[] = [
  {
    title: 'Cadastro e login de usuários',
    text: 'O acesso começa na tela de boas-vindas e segue para o cadastro por e-mail ou Google, em duas etapas com validação de senha, ou direto para o login com Google ou e-mail e senha.',
    images: [
      {
        src: acesso,
        alt: 'Cinco telas do fluxo de acesso: boas-vindas com os botões Cadastre-se e Login; cadastro por e-mail ou Google; cadastro etapa 1 de 2 com e-mail e nome de usuário; etapa 2 de 2 com senha, validação dos requisitos e confirmação; e login com Google ou e-mail e senha.',
      },
    ],
  },
  {
    title: 'Página inicial e publicações',
    text: 'Na página inicial, o usuário vê publicações e resenhas de outras pessoas. Também pode publicar comentários ou resenhas sobre as suas leituras.',
    images: [
      {
        src: publicacoes,
        alt: 'Três telas do aplicativo: página inicial com publicações e resenhas de outras pessoas; criação de post com texto, imagem e livro; e criação de resenha com título, texto, livro e avaliação por estrelas.',
      },
    ],
  },
  {
    title: 'Estante Virtual',
    text: 'Na Estante Virtual, o usuário pesquisa e encontra os livros do acervo do aplicativo.',
    images: [
      {
        src: estante,
        alt: 'Tela da Estante Virtual, com campo de busca de livros no topo e uma grade de capas de livros do acervo do aplicativo, com título e autor.',
      },
    ],
  },
  {
    title: 'Página do livro',
    text: 'Na página do livro, o usuário vê as informações da obra e pode avaliá-la e adicioná-la ao perfil. Também lê as resenhas de outros usuários e vê quem está trocando o livro, com a opção de enviar uma solicitação de troca.',
    images: [
      {
        src: livro,
        alt: 'Quatro telas da página do livro Orgulho e Preconceito: aba Resenhas com avaliações de outros usuários; aba Trocas com a lista de quem está trocando o livro; sinopse do livro; e janela para avaliar o livro e adicioná-lo ao perfil como Interesses ou Quero trocar.',
      },
    ],
  },
  {
    title: 'Perfil do usuário',
    text: 'O perfil reúne as informações do usuário em três abas. Em Publicações, é possível ver tudo o que ele já publicou; em Interesses, ficam os livros que ele deseja adquirir por meio de trocas; e em Quero trocar, os livros que ele disponibiliza para troca.',
    images: [
      {
        src: perfil,
        alt: 'Três telas do perfil do usuário, nas abas Publicações, Interesses e Quero trocar.',
      },
    ],
  },
]

export default function TrocaPaginas() {
  usePageTitle('Troca Páginas — Estudo de caso · Stephanie Victoria')
  const { t } = useLang()

  return (
    <>
      <PageGlow />
      <Toc items={toc} />
      <div className="relative z-[1]">
        <CaseHero
          kind="ESTUDO DE CASO · UX/UI DESIGN / LEVANTAMENTO DE REQUISITOS"
          name="Troca Páginas"
          title="conectando leitores por meio da troca de experiências literárias"
          lead="Aplicativo mobile pensado para conectar leitores e possibilitar a troca de experiências literárias entre eles."
          meta={[
            { label: 'TIPO DE PROJETO', value: <T>Projeto acadêmico · Análise e Desenvolvimento de Sistemas · 2024</T> },
            { label: 'PRODUTO', value: <T>Aplicativo Mobile</T> },
            {
              label: 'ATUAÇÃO',
              value: <T>UX/UI Design, Levantamento de Requisitos e Desenvolvimento de Software</T>,
            },
            {
              label: 'ESCOPO',
              value: <T>Levantamento de requisitos, documentação, UI/UX Design, desenvolvimento front-end</T>,
            },
          ]}
          image={hero}
          alt="Mockup mobile do Troca Páginas: tela de splash com o logo e tela de boas-vindas com os botões Cadastre-se e Login."
        />

        <CaseSection id="s-contexto" title="Visão geral">
          <P>
            <T>
              O Troca Páginas é um projeto desenvolvido em 2024, durante a graduação em Análise e Desenvolvimento de
              Sistemas. A proposta surgiu da oportunidade de conectar leitores por meio de uma plataforma que
              facilitasse a troca de livros, incentivando e ampliando o acesso à leitura.
            </T>
          </P>
          <P>
            <T>
              Além de simplificar o processo de troca, o aplicativo foi pensado para fortalecer a interação entre
              pessoas com interesses literários em comum, tornando a experiência mais prática, segura e acessível.
            </T>
          </P>
          <Highlight label="Principal objetivo">
            <T>
              Criar uma plataforma acessível que conectasse os usuários por meio da leitura, possibilitando a troca de
              experiências de leitura e a troca física de livros.
            </T>
          </Highlight>
        </CaseSection>

        <CaseSection id="s-papel" num="01" title="Meu papel">
          <P>
            <T>
              Atuei como UI/UX Designer, sendo responsável pela definição da identidade visual, criação dos componentes
              da interface e desenvolvimento dos protótipos de alta fidelidade.
            </T>
            <br />
            <T>
              Também participei da análise de requisitos, contribuindo para a estruturação das funcionalidades, e do
              desenvolvimento front-end da aplicação.
            </T>
          </P>
          <Chips items={roles} />
        </CaseSection>

        <CaseSection id="s-desafios" num="02" title="Desafios do projeto">
          <div className="reveal flex flex-wrap items-center gap-x-8 gap-y-4 rounded-card border border-card-line bg-card p-8">
            <p className="m-0 flex-none font-display text-[clamp(40px,3.9vw,56px)] leading-none font-bold tracking-[-0.03em] text-clay">
              <T>5 meses</T>
            </p>
            <p className="m-0 flex-[1_1_280px] font-display text-[clamp(19px,1.6vw,22px)] leading-[1.4] font-semibold text-heading">
              <T>para desenvolver o aplicativo de ponta a ponta, do levantamento de requisitos até a implementação.</T>
            </p>
          </div>
          <P>
            <T>
              Esse cenário exigiu um bom gerenciamento de tempo e priorização de atividades, já que a definição da
              identidade visual, o design da interface e a prototipação precisaram ser realizados em um prazo reduzido,
              sem comprometer a consistência e a qualidade da experiência proposta.
            </T>
          </P>
        </CaseSection>

        <CaseSection id="s-processo" num="03" title="Processo de design">
          <P>
            <T>
              Devido ao prazo reduzido e ao escopo do projeto acadêmico, o processo de design foi adaptado para
              priorizar as etapas com maior impacto no desenvolvimento da solução.
            </T>
          </P>
          <ol className="m-0 flex list-none flex-col gap-3 p-0">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="reveal flex gap-5 rounded-card border border-card-line bg-card px-6 py-5"
              >
                <span
                  aria-hidden="true"
                  className="flex-[0_0_32px] font-display text-[19px] leading-[26px] font-bold text-clay tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="m-0 font-display text-[19px] leading-[26px] font-bold text-heading">
                    <T>{step.title}</T>
                  </h3>
                  <p className="t-body-s mt-1 mb-0 max-w-[60ch] text-graphite">
                    <T>{step.text}</T>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection
          id="s-funcionalidades"
          num="04"
          title="Principais funcionalidades"
          wide={
            <ul className="m-0 mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6 p-0">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className="reveal flex flex-col gap-6 rounded-card border border-card-line bg-card p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-clay-soft text-clay"
                    >
                      {f.icon}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-[19px] leading-[26px] font-semibold text-clay tabular-nums"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="t-title-3 m-0 font-bold text-heading">
                      <T>{f.title}</T>
                    </h3>
                    <p className="t-body-s mt-2 mb-0 text-graphite">
                      <T>{f.text}</T>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          }
        >
          <P>
            <T>Para o MVP, foram priorizadas três funcionalidades essenciais.</T>
          </P>
        </CaseSection>

        <CaseSection
          id="s-estilos"
          num="05"
          title="Guia de estilos"
          aside={
            <p className="t-body-s mt-4 mb-0 text-graphite-muted">
              <T>Logo, paleta de cores, tipografia EB Garamond e ícones da interface.</T>
            </p>
          }
        >
          <img
            className="reveal block h-auto w-full max-w-[560px] rounded-card border border-card-line bg-[#f2f2f2]"
            src={guia}
            alt={t(
              'Guia de estilos do Troca Páginas: logo, paleta com bege #CFB18C, marrom #59372A, marrom médio #826059, neutras e cores de suporte, tipografia EB Garamond e conjunto de ícones.',
            )}
            width={1440}
            height={1486}
            loading="lazy"
          />
        </CaseSection>

        <CaseSection
          id="s-telas"
          num="06"
          title="Telas"
          wide={
            <Carousel label="Telas do aplicativo" slides={slides} width={1600} height={1200} fit="contain" background="#59372a" />
          }
        >
          {null}
        </CaseSection>

        <CaseSection id="s-aprendizados" num="07" title="Aprendizados">
          <P>
            <T>
              Um dos principais aprendizados deste projeto foi compreender a importância de considerar a viabilidade
              técnica durante o processo de design. Ao também atuar no desenvolvimento do aplicativo, pude perceber os
              desafios de transformar soluções projetadas em uma implementação funcional, fortalecendo a colaboração
              entre design e desenvolvimento.
            </T>
          </P>
          <P>
            <T>
              Além disso, a experiência reforçou o valor da análise de requisitos e do trabalho em equipe para construir
              uma solução alinhada aos objetivos do projeto. Como resultado, o aplicativo foi bem recebido durante sua
              apresentação, sendo aprovado pelos alunos e professores presentes.
            </T>
          </P>
          <Note title="Equipe">
            <T>
              Este projeto foi desenvolvido em conjunto com Lucas Batista (front-end mobile), Maria Eduarda (back-end) e
              Túlio Koogi (back-end).
            </T>
          </Note>
        </CaseSection>

        <CaseNav prev={{ to: '/onda-cultural', label: 'Onda Cultural' }} next={{ to: '/donare', label: 'Donare' }} />
        <Contact />
      </div>
    </>
  )
}
