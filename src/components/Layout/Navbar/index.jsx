import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { id: 0, href: '/', title: 'Home' },
  { id: 1, href: '/about', title: 'About' },
  { id: 2, href: '/product', title: 'Products' },
  { id: 3, href: '/users', title: 'Users' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        RouteShop
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>
      <nav id="main-nav" aria-label="Main" className={`links ${open ? 'open' : ''}`}>
        {links.map(({ id, href, title }) => (
          <NavLink key={id} to={href} end={href === '/'} onClick={() => setOpen(false)}>
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
