import {
  RiGithubFill,
  RiYoutubeFill,
  RiLeafFill,
  RiMailFill,
} from 'react-icons/ri';

const NavLink = ({ text, link, icon, fn }) => {
  const icons = {
    RiGithubFill: RiGithubFill,
    RiYoutubeFill: RiYoutubeFill,
    RiLeafFill: RiLeafFill,
    RiMailFill: RiMailFill,
  };

  const GenIcon = icons[icon];

  return (
    <a
      href={!fn && link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center px-3 py-1 text-sm rounded-md md:text-base gap-x-3 ring-1 ring-gray-600 bg-blockBgColor-dark hover:ring-linkBlue"
      onClick={!fn ? null : () => fn(link)}
    >
      <GenIcon />
      {text}
    </a>
  );
};

export default NavLink;
