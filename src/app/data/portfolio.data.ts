// Contenido real del portafolio (CV, stack, proyectos). Fuente: design/src/shared.mjs.

const STACK_IMG = 'assets/img/stack/';

export interface Job {
  role: string;
  company: string;
  dates: string;
  current?: boolean;
}

export interface StackGroup {
  group: string;
  items: { name: string; logo: string }[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  flow: string[];
  link: string;
}

export const profile = {
  name: 'Vicente Mori',
  linkedin: 'https://www.linkedin.com/in/vicente-mori-343717179/',
  github: '#',
  instagram: 'https://www.instagram.com/vicentemori/',
  cv: 'assets/pdf/Resume_Vicente_Mori.pdf',
  photo: 'assets/img/perfil.webp',
  description:
    'Más de 7 años construyendo ERP, CRM y sistemas web empresariales con Angular, .NET, React, Node.js, Java y otras tecnologías.',
};

export const stats = [
  { value: '03+', label: 'Certificaciones' },
  { value: '07+', label: 'Años de experiencia' },
  { value: '50+', label: 'Cuentas de clientes' },
];

// "About me" del CV, traducido.
export const about = {
  paragraphs: [
    'Soy Ingeniero de Sistemas con más de 7 años de experiencia, especializado en desarrollo NetSuite/SuiteScript y tecnologías web fullstack.',
    'Como Oracle NetSuite Certified Application Developer, he desarrollado módulos a medida, facturación electrónica y automatización de procesos para clientes de LATAM, Norteamérica y Europa.',
    'Me apasiona el código limpio, el aprendizaje continuo y entregar soluciones escalables que respondan a lo que el negocio necesita.',
  ],
  facts: [
    { label: 'Formación', value: 'Ingeniería de Sistemas · UNMSM' },
    { label: 'Ubicación', value: 'Málaga, España' },
    { label: 'Idiomas', value: 'Español · Inglés' },
    { label: 'Clientes', value: '50+ cuentas en Norteamérica y Europa' },
  ],
  interests:
    'En mi tiempo libre juego fútbol y videojuegos, veo series y películas, viajo y paso tiempo de calidad con mi familia y amigos.',
};

export const employers = ['LatamReady', 'Entelgy', 'Keep It Simple', 'Infosys', 'Bring IT'];

export const jobs: Job[] = [
  { role: 'Software Engineer, NetSuite', company: 'BRING IT', dates: 'Mar 2023 — actualidad', current: true },
  { role: 'Technology Analyst', company: 'Infosys', dates: 'Jun 2022 — Mar 2023' },
  { role: 'Senior Developer', company: 'Keep It Simple', dates: 'Feb 2022 — Jun 2022' },
  { role: 'NetSuite Developer', company: 'Keep It Simple', dates: 'Abr 2021 — Ene 2022' },
  { role: 'Java Programmer Analyst', company: 'Entelgy', dates: 'Dic 2020 — Mar 2021' },
  { role: 'SuiteCloud Developer', company: 'LatamReady', dates: 'Ene 2019 — Dic 2020' },
];

export const certs = [
  { title: 'Oracle NetSuite Certified Application Developer Professional', org: 'Oracle NetSuite', year: '2025' },
  { title: 'NetSuite Certified SuiteFoundation', org: 'Oracle NetSuite', year: '2023' },
  { title: 'Oracle Cloud Infrastructure Foundations', org: 'Oracle', year: '2021' },
  { title: 'International Certificate in English (FCE)', org: 'Cambridge University', year: '2017' },
];

export const stack: StackGroup[] = [
  { group: 'NetSuite', items: [
    { name: 'SuiteScript', logo: STACK_IMG + 'netsuite.svg' },
    { name: 'SuiteCloud', logo: STACK_IMG + 'netsuite.svg' },
  ] },
  { group: 'Backend', items: [
    { name: 'Java', logo: STACK_IMG + 'java.svg' },
    { name: 'Spring Boot', logo: STACK_IMG + 'springboot.svg' },
    { name: 'PostgreSQL', logo: STACK_IMG + 'postgresql.svg' },
    { name: 'MySQL', logo: STACK_IMG + 'mysql.svg' },
    { name: 'SQL Server', logo: STACK_IMG + 'microsoft_sql_server.svg' },
  ] },
  { group: 'Frontend', items: [
    { name: 'Angular', logo: STACK_IMG + 'angular.svg' },
    { name: 'JavaScript', logo: STACK_IMG + 'javascript.svg' },
    { name: 'HTML', logo: STACK_IMG + 'html.svg' },
    { name: 'CSS', logo: STACK_IMG + 'css.svg' },
  ] },
  { group: 'Herramientas', items: [
    { name: 'Git', logo: STACK_IMG + 'git.svg' },
    { name: 'Figma', logo: STACK_IMG + 'figma.svg' },
  ] },
];

export const projects: Project[] = [
  {
    title: 'Facturación Electrónica en NetSuite',
    description: 'Integración con OSE para emitir y recibir comprobantes electrónicos desde NetSuite, con envíos automatizados y archivo de los XML.',
    tags: ['SuiteScript', 'Integración', 'OSE'],
    flow: ['NetSuite', 'OSE', 'SUNAT'],
    link: '#',
  },
  {
    title: 'Libros Contables PLE',
    description: 'Generación automatizada de libros electrónicos desde NetSuite, con reportes personalizados según los formatos que exige SUNAT.',
    tags: ['SuiteScript', 'Reportes', 'PLE'],
    flow: ['NetSuite', 'PLE', 'SUNAT'],
    link: '#',
  },
  {
    title: 'Aplicación Web con Angular 17',
    description: 'Frontend con componentes reutilizables, routing y consumo de APIs REST sobre un backend Spring Boot, con diseño responsive.',
    tags: ['Angular 17', 'REST', 'Spring Boot'],
    flow: ['Angular', 'REST', 'Spring Boot'],
    link: '#',
  },
];
