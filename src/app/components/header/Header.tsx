/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import menu from 'src/app/assets/bars-solid.svg';
import styles from 'src/app/components/header/Header.module.css';
import useScrollDirection from 'src/app/components/header/hooks/useScrollDirection';
import useWindowSize from 'src/app/components/header/hooks/useWindowSize';
import PATHS from 'src/router/routes';

const Header = () => {
  const size = useWindowSize();
  return (size.width || 0) > 700 ? <DeskHeader /> : <MobileHeader />;
};

const DeskHeader = () => {
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
          {links.map(({ url, label }) => (
            <DrawerLinkItem
              key={url}
              url={url}
              label={label}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

const MobileHeader = () => {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
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
        <DrawerButton onClick={toggleDrawer} />
      </nav>
      <Drawer
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </header>
  );
};

const DrawerButton = ({ onClick }: { onClick: () => void }) => (
  <div
    role='button'
    tabIndex={0}
    className={styles.DrawerButton_Container}
    onClick={onClick}
    onKeyDown={onClick}
  >
    <img
      src={menu}
      width='24'
      height='24'
      alt=''
    />
  </div>
);

const DrawerContents = () => (
  <ul>
    {links.map(({ url, label }) => (
      <DrawerLinkItem
        key={url}
        url={url}
        label={label}
      />
    ))}
  </ul>
);
const Drawer = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => (
  <>
    <div
      role='banner'
      onClick={handleClose}
      onKeyDown={handleClose}
      className={`${styles.Drawer__Back} ${isOpen ? styles.isOpen : styles.isClosed}`}
    />
    <div className={`${styles.Drawer__Container} ${isOpen && styles.isOpen}`}>
      <DrawerContents />
    </div>
  </>
);

const DrawerLinkItem = ({ url, label }: { url: string; label: string }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          const classes = styles.header_link;
          if (isActive) {
            return `${classes} ${styles.header_link_active}`;
          }
          return `${classes} ${styles.header_link_inactive}`;
        }}
        to={url}
      >
        {label}
      </NavLink>
    </li>
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
    label: 'Colaboradores',
    url: PATHS.partners,
  },
  {
    label: 'Ediciones',
    url: PATHS.editions,
  },
  {
    label: 'Contacto',
    url: PATHS.contact,
  },
];
