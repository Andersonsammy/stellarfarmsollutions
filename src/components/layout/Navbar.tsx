import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-[1200px] h-16 px-6 lg:px-8 flex items-center justify-between transition-all duration-700 rounded-full border ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl border-gray-100 shadow-[0_16px_40px_rgba(42,92,63,0.06)] scale-100' 
              : 'bg-transparent border-transparent shadow-none scale-100 lg:px-4'
          }`}
        >
          <Link to="/" className="flex items-center gap-3 cursor-pointer group" onClick={closeMenu}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 bg-grove text-white group-hover:bg-clay`}>
              <Sprout className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className={`font-serif text-[1.1rem] font-bold leading-tight hidden sm:block transition-colors duration-500 tracking-wide text-ink group-hover:text-clay`}>
              Stellar
            </div>
          </Link>
          
          <ul className="hidden md:flex items-center gap-9 list-none m-0">
            <li><NavLink to="/" className={({ isActive }) => `text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${isActive ? 'text-clay' : 'text-ink hover:text-clay'}`}>Home</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => `text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${isActive ? 'text-clay' : 'text-ink hover:text-clay'}`}>Services</NavLink></li>
            <li><NavLink to="/farmers" className={({ isActive }) => `text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${isActive ? 'text-clay' : 'text-ink hover:text-clay'}`}>For Farmers</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => `text-[0.8rem] tracking-wide font-medium transition-colors duration-300 ${isActive ? 'text-clay' : 'text-ink hover:text-clay'}`}>Story</NavLink></li>
          </ul>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className={`hidden sm:block py-2.5 px-7 text-[0.76rem] font-medium tracking-wide rounded-full cursor-pointer transition-all duration-500 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(42,92,63,0.3)] bg-grove text-white hover:bg-clay`}>
              Get in Touch
            </Link>
            <button className="flex md:hidden flex-col justify-center items-end gap-[5px] p-2 bg-transparent border-none cursor-pointer group" onClick={() => setMobileMenuOpen(true)}>
              <span className={`w-6 h-[2px] rounded-full transition-all group-hover:w-5 bg-ink group-hover:bg-clay`} />
              <span className={`w-4 h-[2px] rounded-full transition-all group-hover:w-6 bg-ink group-hover:bg-clay`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[490] flex flex-col items-center justify-center gap-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-4xl text-grove font-serif z-50 cursor-pointer bg-white rounded-full shadow-lg transition-transform hover:scale-110 border border-gray-100" onClick={closeMenu}>&times;</button>
        <Link to="/" className="font-serif text-4xl font-bold text-ink hover:text-clay transition-all hover:scale-105" onClick={closeMenu}>Home</Link>
        <Link to="/services" className="font-serif text-4xl font-bold text-ink hover:text-clay transition-all hover:scale-105" onClick={closeMenu}>Services</Link>
        <Link to="/farmers" className="font-serif text-4xl font-bold text-ink hover:text-clay transition-all hover:scale-105" onClick={closeMenu}>For Farmers</Link>
        <Link to="/about" className="font-serif text-4xl font-bold text-ink hover:text-clay transition-all hover:scale-105" onClick={closeMenu}>Story</Link>
        <Link to="/contact" className="font-serif text-4xl font-bold text-ink hover:text-clay transition-all hover:scale-105" onClick={closeMenu}>Contact</Link>
        <Link to="/contact" className="mt-6 bg-grove text-white shadow-xl shadow-grove/20 py-4 px-12 rounded-full text-base font-medium tracking-wide transition-all hover:bg-clay hover:-translate-y-1" onClick={closeMenu}>Get in Touch</Link>
      </div>
    </>
  );
}
