import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { useState } from 'react';
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`nav ${isOpen ? 'nav--open' : ''}`}>
      <div className="nav__container">
        {/* Logo */}
        <div className="nav__logo">
          <h1>Zay</h1>
        </div>

        {/* Menu links - desktop */}
        <nav className="nav__menu desktop-only">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Ícones - apenas desktop */}
        <div className="nav__icons desktop-only">
          <Search size={20} />
          <div className="nav__item">
            <ShoppingCart size={20} />
            <span className="nav__badge">7</span>
          </div>
          <div className="nav__item">
            <User size={20} />
            <span className="nav__badge">99</span>
          </div>
        </div>

        {/* Botão de menu - mobile/tablet */}
        <button className="nav__toggle" onClick={toggleMenu}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile/tablet */}
      {isOpen && (
        <div className="nav__mobile" onClick={closeMenu}>
          <nav onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="nav__mobile-icons">
              <input type="text" placeholder="Search ..." />
              <Search size={20} />
              <div className="nav__item">
                <ShoppingCart size={20} />
                <span className="nav__badge">7</span>
              </div>
              <div className="nav__item">
                <User size={20} />
                <span className="nav__badge">99</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;