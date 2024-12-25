import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/10 backdrop-blur-md rounded-full shadow-lg">
        <div className="px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />
            
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Accueil</NavLink>
              <NavLink href="#features">Fonctionnalités</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a 
                href="#contact"
                className="bg-[#070945] text-white px-6 py-2.5 rounded-full hover:bg-[#0a0c5e] transition-all hover:scale-105"
              >
                Demander une Démo
              </a>
            </nav>
            
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#070945]" />
              ) : (
                <Menu className="h-6 w-6 text-[#070945]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white/95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
            <NavLink href="#features" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#070945] text-white px-8 py-3 rounded-full hover:bg-[#0a0c5e] transition-all hover:scale-105"
            >
              Demander une Démo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}