import copyText from '../libs/copyText';

const links = [
  {
    text: 'GitHub',
    link: 'https://github.com/dohaelee',
    icon: 'RiGithubFill',
    fn: null,
  },
  {
    text: 'YouTube',
    link: 'https://www.youtube.com/@erumcoding',
    icon: 'RiYoutubeFill',
    fn: null,
  },
  {
    text: 'Inflearn',
    link: 'https://www.inflearn.com/users/@erumcoding',
    icon: 'RiLeafFill',
    fn: null,
  },
  {
    text: 'Email',
    link: 'dev.dohaelee@gmail.com',
    icon: 'RiMailFill',
    fn: copyText,
  },
];

export default links;
