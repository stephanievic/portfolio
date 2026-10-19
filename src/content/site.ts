import capaDonare from '../assets/img/capa-donare.jpg'
import capaOnda from '../assets/img/capa-onda.jpg'
import capaTroca from '../assets/img/capa-troca.jpg'

export const links = {
  email: 'stephanie.vicms@gmail.com',
  linkedin: 'https://www.linkedin.com/in/stephanie-victoria/',
  behance: 'https://www.behance.net/stephanie-victoria',
  curriculo: 'https://drive.google.com/file/d/1H75onZ4-fiKy8lNyhbtjpjE_YicmEncO/view?usp=sharing',
} as const

export const areas = [
  'UX Design',
  'UI Design',
  'Product Thinking',
  'Usabilidade',
  'Pesquisa com usuários',
  'Acessibilidade',
  'Design Systems',
  'Prototipação',
  'Arquitetura da informação',
  'Interaction Design',
]

export const tools = [
  'Figma',
  'Wireframing',
  'FigJam',
  'Fluxos de usuário',
  'Miro',
  'Testes de usabilidade',
  'Notion',
  'Levantamento de requisitos',
  'ClickUp',
  'Benchmarking',
  'Google Forms',
  'Handoff para desenvolvimento',
  'Jornada do usuário',
  'Desk research',
]

export interface ProjectSummary {
  slug: string
  path: string
  name: string
  title: string
  tags: string[]
  summary: string
  image: string
  alt: string
}

export const projects: ProjectSummary[] = [
  {
    slug: 'donare',
    path: '/donare',
    name: 'Donare',
    title: 'tornando o processo de doação mais simples e transparente',
    tags: ['UX/UI DESIGN', 'PRODUCT DISCOVERY', 'B2B'],
    summary:
      'Aplicativo que conecta doadores a instituições sociais. A partir de pesquisas e um processo centrado no usuário, desenhei uma forma de encontrar instituições confiáveis, doar e acompanhar as atividades das instituições.',
    image: capaDonare,
    alt: 'Mockup mobile do Donare: tela de splash com o logo e tela inicial com busca, causas e instituições próximas.',
  },
  {
    slug: 'onda-cultural',
    path: '/onda-cultural',
    name: 'Onda Cultural',
    title: 'projetando uma solução digital para gestão de editais culturais',
    tags: ['UX/UI DESIGN', 'PRODUCT DESIGN', 'SaaS B2G'],
    summary:
      'Sistema web que centraliza criação, inscrição, análise e acompanhamento de editais culturais. Cuidei da experiência de proponentes e pareceristas, desde o levantamento de requisitos até o handoff.',
    image: capaOnda,
    alt: 'Mockup de notebook exibindo o logo do Onda Cultural – Sistema de Gestão.',
  },
  {
    slug: 'troca-paginas',
    path: '/troca-paginas',
    name: 'Troca Páginas',
    title: 'conectando leitores por meio da troca de livros e experiências literárias',
    tags: ['UX/UI DESIGN', 'LEVANTAMENTO DE REQUISITOS'],
    summary:
      'App mobile para troca de livros entre leitores, feito na graduação em 2024. Defini a identidade visual, os componentes e os protótipos de alta fidelidade, e participei do desenvolvimento front-end.',
    image: capaTroca,
    alt: 'Mockup mobile do Troca Páginas: tela de splash com o logo e tela de boas-vindas com os botões Cadastre-se e Login.',
  },
]

export const approach = [
  {
    title: 'Entender',
    text: 'Compreendo o contexto, os objetivos do negócio e as necessidades das pessoas envolvidas.',
  },
  {
    title: 'Definir',
    text: 'Organizo as informações para identificar padrões, oportunidades e o problema prioritário.',
  },
  {
    title: 'Explorar',
    text: 'Exploro alternativas e possibilidades antes de definir a solução mais adequada.',
  },
  {
    title: 'Projetar',
    text: 'Transformo as decisões em interfaces claras, consistentes e acessíveis.',
  },
  {
    title: 'Validar e evoluir',
    text: 'Avalio as soluções, identifico pontos de melhoria e aprimoro a experiência com base nos aprendizados.',
  },
]
