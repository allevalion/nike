import { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger, close } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className="absolute z-50 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal transition-colors duration-300 cursor-pointer font-montserrat text-slate-gray hover:text-slate-gray-hover"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="hidden max-lg:block"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </button>

        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isOpen ? 'visible backdrop-blur-sm' : 'invisible backdrop-blur-0'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col items-center justify-center h-full gap-8 p-6">
              <button
                className="absolute top-6 right-6"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <img src={close} alt="Close" width={30} height={30} />
              </button>
              <ul className="flex flex-col items-center w-full gap-8">
                {navLinks.map((item) => (
                  <li key={item.label} className="w-full text-center">
                    <a
                      href={item.href}
                      className="block py-3 text-xl transition-colors duration-300 cursor-pointer font-montserrat text-slate-gray hover:text-slate-gray-hover"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
