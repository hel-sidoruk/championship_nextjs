import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Burger from './UI/Burger';
import { navigationRoutes } from '@/utils/navigationRoutes';

export const Header = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);

  const openMenu = () => setActive((state) => !state);
  const closeMenu = () => {
    if (active) setActive(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <nav
          onClick={() => setActive(false)}
          className={`header__nav ${active ? 'header__navActive' : ''}`}
        >
          {navigationRoutes.map(({ id, to, text }) => (
            <Link
              key={id}
              href={to}
              onClick={closeMenu}
              className={`header__link ${pathname === to ? 'disabled' : ''}`}
            >
              {text}
            </Link>
          ))}
        </nav>
        <Burger active={active} openMenu={openMenu} />
      </div>
    </header>
  );
};
