import { NavLink } from 'react-router-dom';

function Header() {
  function getActiveClassName({ isActive }) {
    return isActive ? 'active--link' : '';
  }

  return (
    <header>
      <NavLink to='/' className={getActiveClassName}>
        Home
      </NavLink>

      <NavLink to='/about' className={getActiveClassName}>
        About
      </NavLink>

      <NavLink to='/blog' className={getActiveClassName}>
        Blogs
      </NavLink>

      <NavLink to='/contact' className={getActiveClassName}>
        Contact
      </NavLink>

      <NavLink to='/privacy-policy' className={getActiveClassName}>
        Privacy Policy
      </NavLink>

      <NavLink to='/music-page' className={getActiveClassName}>
        Music
      </NavLink>
    </header>
  );
}

export default Header;
