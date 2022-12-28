import { Link, NavLink } from 'react-router-dom';

import styles from 'src/app/components/header/Header.module.css';
// eslint-disable-next-line max-len
import useScrollDirection from 'src/app/components/header/hooks/useScrollDirection';
import PATHS from 'src/router/routes';

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header className={scrollDirection === 'down' ? styles.hidden : ''}>
      <nav className={styles.nav}>
        <span className={styles.logo}>
          <Link
            className={styles.header_link}
            to={PATHS.root}
            state
          >
            GDG Algeciras
          </Link>
        </span>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.header_link} ${
                    isActive
                      ? styles.header_link_active
                      : styles.header_link_inactive
                  }`
                }
                to={link.url}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  {
    label: 'Inicio',
    url: PATHS.home,
  },
  {
    label: 'El proyecto',
    url: PATHS.project,
  },
  {
    label: 'Ediciones',
    url: PATHS.editions,
  },
  {
    label: 'Colaboradores',
    url: PATHS.partners,
  },
  {
    label: 'Contacto',
    url: PATHS.contact,
  },
];
