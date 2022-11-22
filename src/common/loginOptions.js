import { DiChrome, DiGithubBadge } from 'react-icons/di';
import { TfiTwitterAlt, TfiLinkedin, TfiEmail } from 'react-icons/tfi';

export const loginOptions = [
  {
    id: 1,
    title: 'Ingresa con tu mail',
    icon: <TfiEmail />,
    color: 'bg-white'
  },
  {
    id: 2,
    title: 'Ingresa con Google',
    icon: <DiChrome />,
    color: 'bg-white'
  },
  {
    id: 3,
    title: 'Ingresa con Linkedin',
    icon: <TfiLinkedin />,
    color: 'bg-dark-purple text-white'
  },
  {
    id: 4,
    title: 'Ingresa con Twitter',
    icon: <TfiTwitterAlt />,
    color: 'bg-sky-500 text-white'
  },
  {
    id: 5,
    title: 'Ingresa con Github',
    icon: <DiGithubBadge />,
    color: 'bg-dark-text text-white'
  }
];
