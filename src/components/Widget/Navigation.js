import NavLink from '../Button/NavLink';
import links from '../../common/links';

const Navigation = () => {
  return (
    <div className="flex gap-x-3">
      {links.map((link) => (
        <NavLink {...link} />
      ))}
    </div>
  );
};

export default Navigation;
